import { Router } from "express";
import productRouter from "./product-router";

export function registerRoutes(router: Router) {
  router.use('v1/products', productRouter);
}