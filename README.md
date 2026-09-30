# 🌱 AgroGreen Market

**AgroGreen Market** is a digital agricultural marketplace designed to connect local farmers, producers, vendors, and consumers through a centralized platform focused on fresh products, local commerce, sustainability, and Costa Rican agricultural markets.

The project originated as a web application for promoting and selling agricultural products in Costa Rica. Its next stage transforms that prototype into a structured full-stack marketplace where customers can discover and purchase products, vendors can manage their businesses and inventory, and administrators can supervise the marketplace, fairs, stalls, users, and commercial activity.

---

## 🌿 About the Project

Costa Rica has a rich agricultural ecosystem with local farmers, producers, agricultural fairs, and independent vendors offering fresh products across the country.

However, many of these businesses still depend on physical markets, direct communication, or fragmented sales channels.

AgroGreen aims to provide a digital bridge between producers and consumers.

The platform is designed to make local agricultural commerce easier by providing tools for:

- discovering local agricultural products;
- managing vendor inventories;
- registering products and prices;
- managing agricultural fairs;
- assigning vendor stalls;
- purchasing products through a shopping cart;
- managing orders;
- reviewing marketplace activity;
- monitoring sales and revenue;
- supporting sustainable and local commerce.

---

## 🎯 Project Vision

AgroGreen is more than an online grocery store.

The long-term vision is to create a digital ecosystem for local agricultural commerce where producers can manage their presence in both physical fairs and the online marketplace.

Customers can discover fresh products and local sellers while vendors receive tools to manage inventory, products, sales, and participation in agricultural fairs.

Administrators provide moderation and operational control for the entire marketplace.

---

## 👥 User Roles

### Customer

Customers can:

- create an account;
- authenticate securely;
- browse available products;
- explore product categories;
- search and filter products;
- view product and vendor information;
- add products to a shopping cart;
- place orders;
- manage their profile;
- review previous orders;
- leave product or vendor reviews.

### Vendor

Vendors can:

- apply for a vendor account;
- manage their vendor profile;
- register products;
- update prices and available stock;
- manage their inventory;
- participate in registered agricultural fairs;
- view assigned stalls;
- manage incoming orders;
- review sales information;
- monitor revenue and marketplace activity.

### Administrator

Administrators can:

- manage users;
- approve or reject vendor applications;
- manage vendors;
- manage products and categories;
- register agricultural fairs;
- manage fair stalls;
- assign stalls to vendors;
- moderate marketplace content;
- review marketplace activity;
- monitor inventory and sales information.

---

## 🧩 Core Modules

AgroGreen is organized around the following business domains:

### Authentication & Users

Registration, authentication, profiles, roles, permissions, and account management.

### Marketplace

Product discovery, categories, search, filters, pricing, product details, and availability.

### Vendor Management

Vendor profiles, applications, inventory management, products, and sales.

### Shopping Cart

Cart management, quantities, totals, and checkout preparation.

### Orders

Customer purchases, order status, order history, and vendor fulfillment.

### Agricultural Fairs

Registration and administration of agricultural fairs across Costa Rica.

### Fair Stalls

Management and assignment of physical stalls to approved vendors.

### Reviews

Customer feedback for products and vendors.

### Administration

Marketplace moderation, vendor approval, fair management, user administration, and operational reports.

### Analytics

Vendor sales, revenue information, inventory indicators, and administrative marketplace statistics.

---

## 🏗️ Architecture

AgroGreen follows a **modular monolith architecture**.

Instead of placing application logic directly inside route definitions, responsibilities are separated into modules and layers.

```text
Client
   │
   ▼
Routes
   │
   ▼
Controllers
   │
   ▼
Services
   │
   ▼
Repositories / Models
   │
   ▼
MongoDB
```

This approach keeps the application simple to deploy while providing enough separation to scale the codebase safely.

### Proposed project structure

```text
AgroGreen-Market/
│
├── src/
│   ├── config/
│   │   ├── database.js
│   │   └── env.js
│   │
│   ├── modules/
│   │   ├── auth/
│   │   ├── users/
│   │   ├── vendors/
│   │   ├── products/
│   │   ├── categories/
│   │   ├── cart/
│   │   ├── orders/
│   │   ├── fairs/
│   │   ├── stalls/
│   │   ├── reviews/
│   │   └── analytics/
│   │
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   ├── roles.middleware.js
│   │   ├── error.middleware.js
│   │   └── validation.middleware.js
│   │
│   ├── routes/
│   ├── services/
│   ├── views/
│   ├── public/
│   ├── app.js
│   └── server.js
│
├── tests/
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

---

## 🛠️ Technology Stack

### Current Prototype

The original AgroGreen prototype was developed using:

- JavaScript
- Node.js
- Express
- MongoDB
- Mongoose
- EJS
- HTML5
- CSS3
- Vanilla JavaScript
- Nodemon

### Modernization Target

The architecture can progressively evolve toward:

- Node.js
- TypeScript
- Express
- MongoDB
- Mongoose
- REST API
- React or a modern server-rendered frontend
- secure cookie-based authentication
- Argon2 or bcrypt password hashing
- schema validation
- role-based access control
- automated testing
- Docker
- CI/CD

The modernization can be performed incrementally without replacing the entire application at once.

---

## 🗃️ Main Domain Models

The application is designed around several core entities.

```text
User
├── Customer
├── Vendor
└── Administrator

Vendor
├── Products
├── Inventory
├── Orders
└── Fair Stalls

Product
├── Category
├── Inventory
├── Vendor
└── Reviews

Fair
└── Stalls
    └── Vendor

Customer
├── Cart
├── Orders
└── Reviews
```

Product categories such as fruits, vegetables, dairy products, and other agricultural goods are represented as categories of the same Product entity instead of independent product models.

---

## 🔐 Security

The modernized version of AgroGreen is intended to include:

- hashed passwords;
- secure authentication sessions;
- HTTP-only cookies;
- role-based authorization;
- protected customer, vendor, and administrator routes;
- request validation;
- environment variables for secrets;
- secure database configuration;
- rate limiting;
- security HTTP headers;
- centralized error handling;
- input sanitization.

Sensitive information must never be committed to the repository.

---

## 🌎 Costa Rican Agricultural Fairs

One of AgroGreen's distinguishing features is the integration between digital commerce and physical agricultural fairs.

Fairs can contain information such as:

- fair name;
- date;
- province;
- canton;
- district;
- participating vendors;
- available stalls.

Administrators can manage fairs and assign stalls to vendors, allowing AgroGreen to represent both online and physical agricultural commerce.

---

## 📦 Marketplace Flow

A simplified marketplace flow is:

```text
Vendor
   │
   ├── Creates Product
   │
   ├── Defines Price
   │
   └── Updates Inventory
            │
            ▼
        Marketplace
            │
            ▼
         Customer
            │
        Adds to Cart
            │
            ▼
          Order
            │
            ▼
          Vendor
            │
            ▼
      Order Fulfillment
```

---

## 🗺️ Roadmap

### Phase 1 — Architecture

- reorganize the existing codebase;
- separate routes, controllers, services, and models;
- centralize the MongoDB connection;
- introduce environment variables;
- create centralized error handling.

### Phase 2 — Security

- replace plain-text passwords with secure password hashing;
- implement authenticated sessions;
- introduce role-based authorization;
- protect vendor and administrator routes;
- validate incoming data.

### Phase 3 — Marketplace

- create a unified Product model;
- implement categories;
- connect products to vendors;
- connect the shopping cart to the database;
- implement orders and checkout flow;
- add search, filtering, and sorting.

### Phase 4 — Vendor Platform

- vendor dashboard;
- inventory management;
- order management;
- sales history;
- revenue statistics.

### Phase 5 — Agricultural Fairs

- fair management;
- stall management;
- vendor participation;
- stall assignment;
- fair discovery by location.

### Phase 6 — Administration

- vendor approval;
- product moderation;
- user management;
- marketplace reports;
- fair administration;
- platform analytics.

### Phase 7 — Quality & Deployment

- automated tests;
- API documentation;
- Docker support;
- continuous integration;
- production deployment;
- monitoring and logging.

---

## 🚀 Local Development

### Requirements

- Node.js
- npm
- MongoDB

### Installation

Clone the repository:

```bash
git clone <repository-url>
cd AgroGreen-Market
```

Install dependencies:

```bash
npm install
```

Create the environment configuration:

```bash
cp .env.example .env
```

Example configuration:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/agrogreen
SESSION_SECRET=change-me
NODE_ENV=development
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

---

## 🧪 Testing

Automated testing is part of the modernization roadmap.

The project should include:

- unit tests for business logic;
- integration tests for the API;
- authentication and authorization tests;
- database integration tests;
- end-to-end tests for critical marketplace flows.

---

## 🌱 Sustainability

AgroGreen promotes:

- local agricultural commerce;
- direct connections between producers and consumers;
- visibility for independent vendors;
- fresh and locally produced goods;
- stronger digital tools for agricultural communities.

---

## 📌 Project Status

AgroGreen currently exists as an original functional prototype built with Node.js, Express, MongoDB, Mongoose, EJS, HTML, CSS, and JavaScript.

The project is being redesigned around a cleaner modular architecture with improved security, maintainability, marketplace functionality, and production readiness.

---

## 📄 License

This project is intended for educational and portfolio purposes.

---

## 🌿 AgroGreen

**Connecting agriculture, technology, local markets, and people.**