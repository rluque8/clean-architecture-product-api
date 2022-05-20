import express, { Application, Router } from "express";
import "dotenv/config";
import helmet from "helmet";
import bodyParser from "body-parser";
import { connectDb } from "./modules/shared/infrastructure/connection";
import { registerRoutes } from "./routes/router";

export class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.port = process.env.PORT || "8080";
    this.app = express();
    this.configureDefaultMiddlewares();
    const router = Router();
    this.app.use(router);
    registerRoutes(router);
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

  private configureDefaultMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(helmet.xssFilter());
    this.app.use(helmet.noSniff());
  }
}