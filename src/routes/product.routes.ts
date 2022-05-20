import { Router } from "express";
import {
  ProductCreateController,
  ProductGetController,
  ProductRemoveController,
} from "../modules/product/infrastructure/controllers";
import { authenticationMiddleware } from "./middlewares/auth-middleware";

const PRODUCT_PATH = '/v1/products';

export const initialize = (router: Router) => {
  const productCreateController = new ProductCreateController();
  const productGetController = new ProductGetController();
  const productRemoveController = new ProductRemoveController();

  const apiKey = process.env.API_KEY || '';

  router.post(`${PRODUCT_PATH}/`, authenticationMiddleware(apiKey), productCreateController.run);
  router.get(`${PRODUCT_PATH}/`, productGetController.run);
  router.delete(`${PRODUCT_PATH}/:id`, authenticationMiddleware(apiKey), productRemoveController.run);
};
