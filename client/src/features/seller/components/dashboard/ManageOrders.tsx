import { findIndex } from "lodash";
import { FC, ReactElement, useEffect, useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { IOrderDocument } from "src/features/order/interfaces/order.interface";
import {
  orderTypes,
  sellerOrderList,
  shortenLargeNumbers
} from "src/shared/utils/util.service";
// import { socket } from "src/sockets/socket.service";

import { SellerContextType } from "../../interfaces/seller.interface";
import ManageOrdersTable from "./components/ManageOrdersTable";
import { socket } from "src/sockets/socket.service";

const SELLER_GIG_STATUS = {
  ACTIVE: "active",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
  IN_PROGRESS: "in progress",
  DELIVERED: "delivered"
};

const ManageOrders: FC = (): ReactElement => {
  const [type, setType] = useState<string>(SELLER_GIG_STATUS.ACTIVE);
  const { orders } = useOutletContext<SellerContextType>();
  const memoizedOrders = useMemo(() => [...orders], [orders]);

  useEffect(() => {
    socket.on("order notification", (order: IOrderDocument) => {
      const index = findIndex(memoizedOrders, ["orderId", order.orderId]);
      if (index > -1) {
        memoizedOrders.splice(index, 1, order);
      }
    });
  }, [memoizedOrders]);

  return (
    <div className="container mx-auto mt-8 px-6 md:px-12 lg:px-6">
      <div className="flex flex-col flex-wrap">
        <div className="mb-8 px-4 text-xl font-semibold text-black md:px-0 md:text-2xl lg:text-4xl">
          Manage Orders
        </div>
        <div className="p-0">
          <ul className="flex w-full cursor-pointer list-none flex-col flex-wrap rounded-[2px] sm:flex-none sm:flex-row">
            <li
              className="inline-block py-3 uppercase"
              onClick={() => setType(SELLER_GIG_STATUS.ACTIVE)}
            >
              <a
                href="#activeorders"
                className={`px-4 py-3 text-xs text-[#555555] no-underline sm:text-sm md:text-base ${
                  type === SELLER_GIG_STATUS.ACTIVE
                    ? "pb-[15px] outline outline-1 outline-[#e8e8e8] sm:rounded-t-lg"
                    : ""
                }`}
              >
                Active
                {orderTypes(SELLER_GIG_STATUS.IN_PROGRESS, memoizedOrders) >
                  0 && (
                  <span className="ml-1 rounded-[5px] bg-sky-500 px-[5px] py-[1px] text-xs font-medium text-white">
                    {shortenLargeNumbers(
                      orderTypes(SELLER_GIG_STATUS.IN_PROGRESS, memoizedOrders)
                    )}
                  </span>
                )}
              </a>
            </li>
            <li
              className="inline-block py-3 uppercase"
              onClick={() => setType(SELLER_GIG_STATUS.COMPLETED)}
            >
              <a
                href="#completedorders"
                className={`px-4 py-3 text-xs text-[#555555] no-underline sm:text-sm md:text-base ${
                  type === SELLER_GIG_STATUS.COMPLETED
                    ? "pb-[15px] outline outline-1 outline-[#e8e8e8] sm:rounded-t-lg"
                    : ""
                }`}
              >
                Completed
                {orderTypes(SELLER_GIG_STATUS.COMPLETED, memoizedOrders) >
                  0 && (
                  <span className="ml-1 rounded-[5px] bg-sky-500 px-[5px] py-[1px] text-xs font-medium text-white">
                    {shortenLargeNumbers(
                      orderTypes(SELLER_GIG_STATUS.COMPLETED, memoizedOrders)
                    )}
                  </span>
                )}
              </a>
            </li>
            <li
              className="inline-block py-3 uppercase"
              onClick={() => setType(SELLER_GIG_STATUS.CANCELLED)}
            >
              <a
                href="#cancelledorders"
                className={`px-4 py-3 text-xs text-[#555555] no-underline sm:text-sm md:text-base ${
                  type === SELLER_GIG_STATUS.CANCELLED
                    ? "pb-[15px] outline outline-1 outline-[#e8e8e8] sm:rounded-t-lg"
                    : ""
                }`}
              >
                Cancelled
                {orderTypes(SELLER_GIG_STATUS.CANCELLED, memoizedOrders) >
                  0 && (
                  <span className="ml-1 rounded-[5px] bg-sky-500 px-[5px] py-[1px] text-xs font-medium text-white">
                    {shortenLargeNumbers(
                      orderTypes(SELLER_GIG_STATUS.CANCELLED, memoizedOrders)
                    )}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </div>

        {type === SELLER_GIG_STATUS.ACTIVE && (
          <ManageOrdersTable
            type="active"
            orders={sellerOrderList(
              SELLER_GIG_STATUS.IN_PROGRESS,
              memoizedOrders
            )}
            orderTypes={orderTypes(
              SELLER_GIG_STATUS.IN_PROGRESS,
              memoizedOrders
            )}
          />
        )}
        {type === SELLER_GIG_STATUS.COMPLETED && (
          <ManageOrdersTable
            type="completed"
            orders={sellerOrderList(
              SELLER_GIG_STATUS.COMPLETED,
              memoizedOrders
            )}
            orderTypes={orderTypes(SELLER_GIG_STATUS.COMPLETED, memoizedOrders)}
          />
        )}
        {type === SELLER_GIG_STATUS.CANCELLED && (
          <ManageOrdersTable
            type="cancelled"
            orders={sellerOrderList(
              SELLER_GIG_STATUS.CANCELLED,
              memoizedOrders
            )}
            orderTypes={orderTypes(SELLER_GIG_STATUS.CANCELLED, memoizedOrders)}
          />
        )}
      </div>
    </div>
  );
};

export default ManageOrders;