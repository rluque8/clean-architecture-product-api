import { Router } from "express";
import {
  ProductCreateController,
} from "../modules/product/infrastructure/controllers";

const PRODUCT_PATH = '/v1/products';

export const initialize = (router: Router) => {
  const productCreateController = new ProductCreateController();

  router.post(`${PRODUCT_PATH}/`, productCreateController.run);
};
