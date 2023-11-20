## E-Commerce BackEnd

### Description

This project is the backend implementation of an E-Commerce application. It includes models for products, categories, and tags, along with API routes to perform CRUD operations on these entities.

### Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- Mock-Up

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/e-commerce-backend.git

### Usage
  Start the server: npm start  

### API Routes
- GET /api/products: Get all products with categories and tags.
- GET /api/products/:id: Get a specific product by ID with its category and tags.
- POST /api/products: Create a new product.
  (Add other routes as needed)

## Mock-Up

![In Insomnia, the user tests “GET tags,” “GET Categories,” and “GET All Products.”.](./Assets/13-orm-homework-demo-01.gif)

The following animation shows the application's GET routes to return a single category, a single product, and a single tag being tested in Insomnia:

![In Insomnia, the user tests “GET tag by id,” “GET Category by ID,” and “GET One Product.”](./Assets/13-orm-homework-demo-02.gif)

The following animation shows the application's POST, PUT, and DELETE routes for categories being tested in Insomnia:

![In Insomnia, the user tests “DELETE Category by ID,” “CREATE Category,” and “UPDATE Category.”](./Assets/13-orm-homework-demo-03.gif)

Your walkthrough video should also show the POST, PUT, and DELETE routes for products and tags being tested in Insomnia.

