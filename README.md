# Jobber

Jobber is an advanced e-commerce marketplace application designed with a microservices architecture. It leverages a modern tech stack to ensure scalability, reliability, and maintainability. This application showcases best practices in frontend and backend development, containerization, orchestration, CI/CD, monitoring, and more.

## What the App is Doing
Jobber provides a platform where users can create and manage freelance gigs, purchase services, and communicate with service providers. The application supports various features essential for an e-commerce marketplace, including user authentication, gig management, order processing, secure payments, real-time chat, notifications, and reviews. The microservices architecture ensures that each functionality is handled by a dedicated service, making the system modular and scalable.

## Features

### Frontend

- **React**: For building a dynamic and responsive user interface.
- **TypeScript**: Enhances type safety and improves maintainability.
- **TailwindCSS**: Utility-first CSS framework for efficient styling.
- **Redux Toolkit (RTK) Query**: Efficient data fetching and state management.

### Backend

- **Node.js with TypeScript**: Implements a clean 3-layer architecture (controller, service, repository).
- **Express**: Framework for building RESTful APIs.
- **Socket.io**: Facilitates real-time, bidirectional communication.
- **Stripe**: Handles secure payment processing.
- **RabbitMQ**: Message broker for asynchronous communication between microservices.

### Databases

- **MongoDB**: NoSQL database for flexible and scalable data storage.
- **MySQL**: Relational database management system.
- **PostgreSQL**: Advanced open-source relational database.
- **Elasticsearch**: Search and analytics engine.
- **Redis**: In-memory data structure store, used as a database, cache, and message broker.

## Testing

- **Jest**: JavaScript testing framework.
- **Supertest**: Library for testing Node.js HTTP servers.

## DevOps and CI/CD

- **Docker**: Containerization platform to package applications and their dependencies.
- **Kubernetes**: Orchestrates the deployment, scaling, and management of containerized applications.
- **Minikube**: Local Kubernetes environment.
- **AWS EKS**: Managed Kubernetes service on AWS.
- **Jenkins**: Automates CI/CD pipelines.
- **Terraform**: Infrastructure as Code (IaC) tool for building, changing, and versioning infrastructure.
- **Docker Compose**: Tool for defining and running multi-container Docker applications.

## Monitoring and Observability

- **Elastic Stack (Elasticsearch, Logstash, Kibana)**: For centralized logging, search, and visualization.
- **Prometheus**: Monitoring system and time series database.
- **Grafana**: Analytics and interactive visualization web application.
- **Heartbeat**: Monitor the availability of services.
- **Metricbeat**: Collects metrics from systems and services.

## Project Structure
```bash
Jobber/
├── auth/ # Authentication service
├── chat/ # Chat service
├── client/ # Frontend application
├── gateway/ # API gateway
├── gig/ # Gig management service
├── infra/ # Infrastructure as code (Terraform, Kubernetes)
├── notifications/ # Notifications service
├── order/ # Order management service
├── review/ # Reviews and ratings service
├── shared/ # Shared utilities and modules
├── users/ # User management service
```
## Microservices and Their Responsibilities

### Auth Service

- **Functionality**: Handles user authentication and authorization.
- **Key Features**:
  - User registration and login.
  - JWT-based authentication for secure access to other services.
  - Password management and security.

### User Service

- **Functionality**: Manages user profiles and related operations.
- **Key Features**:
  - CRUD operations for user profiles.
  - Managing user settings and preferences.
  - Integration with Auth service for secure access.

### Gig Service

- **Functionality**: Manages the creation, update, and retrieval of gigs.
- **Key Features**:
  - CRUD operations for gigs.
  - Search and filter functionality for gigs.
  - Handling gig metadata and categorization.

### Order Service

- **Functionality**: Processes and manages orders related to gigs.
- **Key Features**:
  - Creating and updating orders.
  - Tracking order status (created, cancelled, completed).
  - Associating orders with users and gigs.

### Payment Service

- **Functionality**: Handles secure payment processing.
- **Key Features**:
  - Integrates with Stripe for payment transactions.
  - Validates payment information and processes payments.
  - Manages payment records and statuses.

### Chat Service

- **Functionality**: Enables real-time messaging between users.
- **Key Features**:
  - Real-time, bidirectional communication using Socket.io.
  - Message history and storage.
  - User notifications for new messages.

### Notification Service

- **Functionality**: Manages and delivers notifications to users.
- **Key Features**:
  - Real-time notifications for various events (new messages, order updates, etc.).
  - Push notifications and email alerts.
  - User preferences for notification settings.

### Review Service

- **Functionality**: Allows users to provide and view reviews and ratings for gigs.
- **Key Features**:
  - CRUD operations for reviews.
  - Aggregating and displaying ratings for gigs.
  - Moderation and reporting of reviews.

### API Gateway

- **Functionality**: Acts as the central entry point for all microservices.
- **Key Features**:
  - Routing requests to appropriate microservices.
  - Centralized authentication and request validation.
  - Load balancing and API rate limiting.

## Setup and Usage

### Installation

# Jobber Project Setup and Deployment Guide

## Clone the repository:
   ```bash
   git clone https://github.com/almoghindi/Jobber.git
   cd Jobber
   ```

## Install Frontend Dependencies

```bash
cd client
npm install
cd ..
```
## Install Backend Dependencies for Each Service

```bash
cd auth && npm install
cd ../chat && npm install
cd ../gateway && npm install
cd ../gig && npm install
cd ../notifications && npm install
cd ../order && npm install
cd ../review && npm install
cd ../users && npm install
cd ..
```

## Deployment
### Deploy Infrastructure Using Terraform
```bash
cd infra
terraform init
terraform apply
```

### Deploy Services to Kubernetes
```bash
kubectl apply -f infra/k8s
```

## Running the Application
Ensure Docker and Kubernetes are running, then start all services using Docker Compose:
```bash
docker-compose up --build
```

# Monitoring and Logging Setup

## Deploy Prometheus and Grafana for Monitoring

Follow setup guides for Prometheus and Grafana to monitor your Jobber application.

## Deploy Elasticsearch, Kibana, Heartbeat, and Metricbeat for Centralized Logging and Observability

Configure and deploy the following tools for centralized logging and observability:

- **Elasticsearch**: Search and analytics engine.
- **Kibana**: Visualization tool for Elasticsearch data.
- **Heartbeat**: Monitor the availability of services.
- **Metricbeat**: Collects metrics from systems and services.

## Media

### Landing Page

![Screenshot 2024-07-01 112231](https://github.com/almoghindi/Jobber/assets/102804545/ec1f708f-8be7-405e-9164-4dd2ac0e86a1)

### Home Page

![Screenshot 2024-07-01 112600](https://github.com/almoghindi/Jobber/assets/102804545/62e1c274-b04e-468f-bdac-464a1e00157c)

### Profile Page

![Screenshot 2024-07-01 112658](https://github.com/almoghindi/Jobber/assets/102804545/f1f1f427-ef14-4c70-92ac-081655d4e885)

## Chat Page

![Screenshot 2024-07-01 154302](https://github.com/almoghindi/Jobber/assets/102804545/31db7d3e-23d5-45f1-9def-1c8fbb0cb2ff)

## Gig Page

![Screenshot 2024-07-01 154419](https://github.com/almoghindi/Jobber/assets/102804545/1ac2d681-d23f-49c4-a1e9-bf7ce8d7ee1b)