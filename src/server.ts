import express, { Application } from "express";
import "dotenv/config";
import helmet from "helmet";
import bodyParser from "body-parser";
import { connectDb } from "./modules/shared/infrastructure/connection";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "../swagger.json";
import productRouter from "./routes/product-router";

export class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.port = process.env.PORT || "8080";
    this.app = express();
    this.configureDefaultMiddlewares();
    this.registerRoutes();
    this.initSwagger();
    connectDb(process.env.MONGODB_URL || "");
  }

  async listen(): Promise<void> {
    return new Promise((resolve) => {
      this.app.listen(this.port, () => {
        console.log(`Server running in ${this.app.get("env")}`);
        resolve();
      });
    });
  }

  private registerRoutes() {
    this.app.use("/v1/products", productRouter);
  }

  private initSwagger() {
    this.app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }

  private configureDefaultMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(helmet.xssFilter());
    this.app.use(helmet.noSniff());
  }
}
