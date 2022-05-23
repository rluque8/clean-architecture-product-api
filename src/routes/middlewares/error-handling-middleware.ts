import { NextFunction, Request, Response } from "express";
import { HTTP_STATUS } from "../../modules/shared/domain/http-status";

export const errorHandlingMiddleware = async (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(error);
  res.status(HTTP_STATUS.INTERNAL_ERROR).send(error.message);
};
