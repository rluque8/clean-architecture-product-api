import { Schema } from './../../modules/shared/domain/schema';
import { HTTP_STATUS } from "./../../modules/shared/domain/http-status";
import { NextFunction, Request, Response } from "express";
import { validateSchema } from "../../modules/shared/infrastructure/toolsets/validate-schema";

enum RequestValues {
  Body = 'body',
  Query = 'query',
  Headers = 'headers',
  Params = 'params',
}

export const validationMiddleware = (schemas: Schema) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    for (const [requestPart, schema] of Object.entries(schemas)) {
      const requestPartType = requestPart as RequestValues;
      await validateSchema(schema, req[requestPartType]);
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
