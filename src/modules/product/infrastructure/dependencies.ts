import { MongoProductRepository } from './mongo/mongo-product-repository';
import { ProductCreateInteractor } from "../application/interactors/product-create-interactor";
import { ProductGetInteractor } from "../application/interactors/product-get-interactor";
import { ProductRemoveInteractor } from "../application/interactors/product-remove-interactor";

const productRepository = new MongoProductRepository();

export const productCreateInteractor = new ProductCreateInteractor(productRepository);
export const productGetInteractor = new ProductGetInteractor(productRepository);
export const productRemoveInteractor  = new ProductRemoveInteractor(productRepository);
