import { Request, Response } from "express";
import { Schema } from "./schema";

export abstract class BaseController {
  static schema?(): Schema;
  abstract run(req: Request, res: Response): Promise<void>;
}
