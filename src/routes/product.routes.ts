import { Router } from "express";
import {
  ProductCreateController,
  ProductGetController,
  ProductRemoveController,
} from "../modules/product/infrastructure/controllers";

const PRODUCT_PATH = '/v1/products';

export const initialize = (router: Router) => {
  const productCreateController = new ProductCreateController();
  const productGetController = new ProductGetController();
  const productRemoveController = new ProductRemoveController();

  router.post(`${PRODUCT_PATH}/`, productCreateController.run);
  router.get(`${PRODUCT_PATH}/`, productGetController.run);
  router.delete(`${PRODUCT_PATH}/:id`, productRemoveController.run);
};
