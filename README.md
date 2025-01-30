# After cloning... #

```npm i```

create .env file:
```
NEON=your_secret_link
PORT=3000
```

# Resources and Endpoints #

## User ##
### GET /users: ###
Retrieve a list of users

### POST /users: ###
Create a new user

### GET /users/{id}: ###
Retrieve a specific user by ID

### PUT /users/{id}: ###
Update a specific user by ID

### DELETE /users/{id}: ###
Delete a specific user by ID

## Product ##
### GET /products: ###
Retrieve a list of products, optionally filtered by category ID ```GET /products?categoryId=1```

### POST /products: ###
Create a new product

### GET /products/{id}: ###
Retrieve a specific product by ID

### PUT /products/{id}: ###
Update a specific product by ID

### DELETE /products/{id}: ###
Delete a specific product by ID

## Category ##
#### GET /categories: ###
Retrieve a list of categories

#### POST /categories: ###
Create a new category

#### GET /categories/{id}: ###
Retrieve a specific category by ID

#### PUT /categories/{id}: ###
Update a specific category by ID

#### DELETE /categories/{id}: ###
Delete a specific category by ID

## Order ##
#### GET /orders: ###
Retrieve a list of orders

#### POST /orders: ###
Create a new order

#### GET /orders/{id}: ###
Retrieve a specific order by ID

#### PUT /orders/{id}: ###
Update a specific order by ID

#### DELETE /orders/{id}: ###
Delete a specific order by ID
