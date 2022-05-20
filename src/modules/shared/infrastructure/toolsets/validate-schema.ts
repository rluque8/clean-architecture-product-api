import { Request } from "express";
import { ObjectSchema } from "joi";
import { SchemaValidationError } from "../../domain/errors/schema-validation-error";

export async function validateSchema(schema: ObjectSchema, req: Request) {
  try {
    await schema.validateAsync(req);
  } catch (error) {
    if (error instanceof Error) {
      throw new SchemaValidationError(error.message);
    }
  }
}
