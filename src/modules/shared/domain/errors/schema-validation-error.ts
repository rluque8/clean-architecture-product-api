export class SchemaValidationError extends Error {
  constructor(message: string) {
    super(`Schema error on validation: ${message}`);
  }
}
