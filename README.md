# Fintonic Product Api


## Description

The main purpose of the project is to create a simple API where the user can retrieve, create and remove products. The main functionalities are:

- Create a product 
- Remove a product given an id 
- List all the products 

The following actions require authentication:
- Create a product 
- Remove a product given an id 

A **Product** has:
- `id`: A unique identifier. (string)
- `name`: The name of the product. (string)
- `description`: A description of the product. (string)

This project uses as the database an instance of MongoDB.