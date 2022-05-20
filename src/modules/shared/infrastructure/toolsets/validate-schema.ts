import { ObjectSchema } from "joi";
import { SchemaValidationError } from "../../domain/errors/schema-validation-error";

export async function validateSchema(
  schema: ObjectSchema,
  payload: Record<string, any>
) {
  try {
    await schema.validateAsync(payload, { abortEarly: false });
  } catch (error) {
    if (error instanceof Error) {
      throw new SchemaValidationError(error.message);
    }
  }
}
