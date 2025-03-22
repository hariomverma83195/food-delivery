# Shhh.... Let's not leak our hardwork

 Do not share this repo

# Food Delivery System (MERN Stack)

This is a food delivery system application built with the MERN stack (MongoDB, Express, React, Node.js). The app consists of a backend API and a frontend React application. It uses Vite for React.

## Features

- User Authentication (Login, Register)
- Browse food categories and items
- Add items to the cart
- Place orders
- Admin, Restaurant, Delivery Partner dashboard for managing food items and orders

## Prerequisites

Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/try/download/community) (or use MongoDB Atlas)

## Project Setup

### Dotenv setup

1. Goto the api folder and rename the .envsample to .env
2. Change the mongodb URI to local or your atlas URI


### Backend Setup

1. Navigate to the backend directory, install dependencies and start the api:
   ```bash
   cd api
   npm install
   npm start
   ```

2. Navigate to the frontend directory, install dependencies and start the app:
   ```bash
   cd app
   npm install
   npm start
   ```

Now navgate to http://localhost:5173

## Home Page

![Home](https://github.com/hariomverma83195/food-delivery/blob/main/assets/homepage.jpg?raw=true)


## Order Page

![Home](https://github.com/hariomverma83195/food-delivery/blob/main/assets/order.jpg?raw=true)


## Admin Page

![Home](https://github.com/hariomverma83195/food-delivery/blob/main/assets/admin.jpg?raw=true)


## Restaurant Page

![Home](https://github.com/hariomverma83195/food-delivery/blob/main/assets/rest.jpg?raw=true)


## Delivery Partner

![Home](https://github.com/hariomverma83195/food-delivery/blob/main/assets/delivery.jpg?raw=true)



### Note: The admin username and password are hardcoded in the app.js file you can add them in database

Admin Username :- admin@new.com
Admin Password :- 123456

1. Login with the above credentials and create some mock restaurants
2. Login into the restaurant dashboard to add menu items and create/update delivery partner password
3. Now signup and login as a user to order the menu items you created and view them
4. Login to delivery partner dashboard to view and change the order statuses.