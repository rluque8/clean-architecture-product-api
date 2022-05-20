import { Schema } from './../../modules/shared/domain/schema';
import { HTTP_STATUS } from "./../../modules/shared/domain/http-status";
import { NextFunction, Request, Response } from "express";
import { validateSchema } from "../../modules/shared/infrastructure/toolsets/validate-schema";

export const validationMiddleware = (schemas: Schema) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  try {
    for (const [, schema] of Object.entries(schemas)) {
      await validateSchema(schema, req);
    }
    await next();
  } catch (error) {
    if (error instanceof Error) {
      res.status(HTTP_STATUS.BAD_REQUEST).json({
        error: error.message
      });
    }
  }
};
