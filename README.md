# Fintonic Product Api


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

## Debugging

### VS Code

Add the following configuration to you .vscode/launch.json file:

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

## Author

Rodrigo Luque 

2022