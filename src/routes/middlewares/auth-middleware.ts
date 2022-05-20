import { HTTP_STATUS } from "./../../modules/shared/domain/http-status";
import { NextFunction, Request, Response } from "express";

export const authenticationMiddleware =
  (validApiKey: string) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const apiKey = req.get("api-key");

    if (validApiKey !== apiKey) {
      res.status(HTTP_STATUS.UNAUTHORIZED).json({
        error: "You don't have enough permissions to execute this operation"
      });
    } else { 
      await next();
    }
  };
