import { validationMiddleware } from "./middlewares/validation-middleware";
import { Router } from "express";
import {
  ProductCreateController,
  ProductGetController,
  ProductRemoveController,
} from "../modules/product/infrastructure/controllers";
import { authenticationMiddleware } from "./middlewares/auth-middleware";

const productCreateController = new ProductCreateController();
const productGetController = new ProductGetController();
const productRemoveController = new ProductRemoveController();
const apiKey = process.env.API_KEY || "";

const productRouter = Router();

productRouter.post(
  "/",
  authenticationMiddleware(apiKey),
  validationMiddleware(ProductCreateController.schema()),
  productCreateController.run.bind(this)
);

productRouter.get("/", productGetController.run.bind(this));

productRouter.delete(
  "/:id",
  authenticationMiddleware(apiKey),
  validationMiddleware(ProductRemoveController.schema()),
  productRemoveController.run.bind(this)
);

export default productRouter;

