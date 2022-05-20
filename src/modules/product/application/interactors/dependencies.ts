import { MongoProductRepository } from "../../infrastructure/mongo/mongo-product-repository";
import { ProductCreateInteractor } from "./product-create-interactor";

const productRepository = new MongoProductRepository();

export const productCreateInteractor = new ProductCreateInteractor(productRepository);