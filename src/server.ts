import express, { Application, Router } from "express";
import "dotenv/config";

export class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.port = process.env.PORT || "8080";
    this.app = express();
    const router = Router();
    this.app.use(router);
  }

  async listen(): Promise<void> {
    return new Promise((resolve) => {
      this.app.listen(this.port, () => {
        console.log(`Server running in ${this.app.get("env")}`);
        resolve();
      });
    });
  }
}