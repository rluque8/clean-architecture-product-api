import { MongoProductRepository } from '../../infrastructure/mongo/mongo-product-repository';
import { ProductCreateInteractor } from "./product-create-interactor";
import { ProductGetInteractor } from "./product-get-interactor";
import { ProductRemoveInteractor } from "./product-remove-interactor";

const productRepository = new MongoProductRepository();

export const productCreateInteractor = new ProductCreateInteractor(productRepository);
export const productGetInteractor = new ProductGetInteractor(productRepository);
export const productRemoveInteractor  = new ProductRemoveInteractor(productRepository);
