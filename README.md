# Unknown Guardians MERN Stack E-Commerce
 ## Technologies Used
 Frontend:

React - A JavaScript library for building user interfaces.

React Router - Declarative routing for React.js.

SCSS - A popular CSS extension language.

Backend:

Node.js - A JavaScript runtime built on Chrome's V8 JavaScript engine.

Express - A minimal and flexible Node.js web application framework.

MongoDB - A NoSQL database used for storing data.
Database:

Mongoose - An elegant MongoDB object modeling tool.

Deployment:

Digital Ocean - A cloud infrastructure provider used for deployment.
Other Tools and Libraries:

Webpack - A module bundler for JavaScript applications.

Babel - A JavaScript compiler.

Gulp - A task runner that automates repetitive tasks in the development workflow, such as minification, compilation, and more.

Git - A distributed version control system.
 
 ## Introduction
Welcome to the Unknown Guardians E-Commerce Site! This project is a MERN stack E-commerce platform designed for the Esports team, Unknown Guardians.

## Prerequisites
Make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)

## Installation
1. Clone the repository:
```
git clone git@github.com:zjuan4101/UG-E-Commerce.git
```
2. Navigate to the project directory:
```
cd UG-E-Commerce
```
3. Install dependencies:
```
npm i
```

## Configuration
Create a .env file in the root directory of the project.

Add the following environment variables to the .env file:
```
PORT=3000
MONGO_URI=your-mongodb-connection-string
SECRET=your-secret-key
```
Replace your-mongodb-connection-string with your MongoDB connection string and your-secret-key with your JWT secret key.
You can create a simple SHA56 hash at https://emn178.github.io/online-tools/sha256.html

## Running the Seed File
To populate the application with items, you can run the seed file using the following command:
```
npm run seed
```
This command will execute the seed script defined in your package.json file and populate your database with items.


## Starting the App in Dev Mode
 To start the application in development mode, run the following command:
```
npm run dev
```
This command will start the development server, and you can view the app in your browser at `http://localhost:3000.`

## Usage
Start the server:
```
npm start
```

## Known Limitations
Purchasing Functionality: Currently, the site does not support the ability to make purchases. While you can browse through merchandise and add items to your cart, the checkout and payment processes are not yet implemented. I am actively working on adding this feature in future updates.

## Deployment
The application is deployed and accessible online. You can visit the Unknown Guardians E-Commerce Site by following this link: [ug.juanzelayacastillo.me]