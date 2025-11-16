# File Logger Node.js Project

This project is a simple utility that logs messages to a file instead of the console.

## Usage

1.  Install dependencies: `npm install`
2.  Run the server: `node server.js`
3.  Send requests to the `/log` endpoint to log messages.

## Project Structure


.|
├── controllers
│   └── logController.js
├── middlewares
│   └── loggerMiddleware.js
├── routes
│   └── logRoutes.js
├── server.js
├── utils
│   └── fileLogger.js
└── package.json

