# Clean Architecture Product Api


## Description

The main purpose of the project is to create a simple API where the user can retrieve, create and remove products. The main functionalities are:

- Create a product (POST /v1/products)
- Remove a product given an id (DELETE /v1/products/:id)
- List all the products (GET /v1/products)

The following routes require an `api-key` header:
- POST /v1/products
- DELETE /v1/products/:id

A **Product** has:
- `id`: A unique identifier. (string)
- `name`: The name of the product. (string)
- `description`: A description of the product. (string)

This project was done using as database an instance of MongoDB.

TO KNOW ALL THE DETAILS ABOUT THE DOCUMENTATION OF THE API, YOU CAN USE THE `/swagger` endpoint, which will show you a Swagger UI.

## Installation

IMPORTANT! This project requires [Node.js](https://nodejs.org/) and MongoDB installed in your computer to run. 

1. In the environment file located in the root of the project (.env.example) you have all the needed variables for starting the project. You will have to create your own .env with the values that work for you, and you might have to change some values of the database in order to connect to it.

2. Requirements

Run the following commands

```bash
$ nvm install 16
$ nvm use
$ npm i -g npm@8
```

3. Set up a local MongoDB instance in localhost. (Get the url and use it in the corresponding .env variable).

### Commands

For installing the modules, execute the following command:

`npm install` 

For building the project, execute the following command:

`npm run build` 

In order to run the project, execute the following command:

`npm run start` 

In order to run the tests, execute the following command:

`npm run test` 

## Debugging

### VS Code

Add the following configuration to you .vscode/launch.json file:
(Change the node version if needed, this is for v16.14.2)

```json
{
  "version": "1.0.0",
  "configurations": [
    {
      "name": "Service",
      "request": "launch",
      "runtimeArgs": ["run", "start"],
      "preLaunchTask": "npm: build",
      "runtimeExecutable": "${env:HOME}/.nvm/versions/node/v16.14.2/bin/npm",
      "skipFiles": ["<node_internals>/**"],
      "type": "node",
      "internalConsoleOptions": "neverOpen",
      "console": "integratedTerminal"
    }
  ]
}
```

## To improve

There are many features to be implemented in this project. Some of the most important ones are:

- Infrastructure tests (repository).
- Integration tests.
- Improve SWAGGER documentation.
- Add a Dockerfile for a mongo instance.
- Use Value Objects instead of Primitives.
- More advanced authentication (by using a more sofisticated way)
- More control over the request body (limit number of characters, etc)
- Traceability (logging, error handling)

## Author

Rodrigo Luque 

2022