import { Schema } from "joi";
import { SchemaValidationError } from "../../domain/errors/schema-validation-error";

export async function validateSchema(schema: Schema, payload: Record<string, unknown>) {
  try {
    await schema.validateAsync(payload);
  } catch (error) {
    if (error instanceof Error) {
      throw new SchemaValidationError(error.message);
    }
  }
}
