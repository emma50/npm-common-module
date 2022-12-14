import { CustomError } from "./custom-error"

export class DatabaseConnectionError extends CustomError {
  statusCode = 500
  reason: string = 'Error connecting to database'
  constructor() {
    super('Error connecting to DB')

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
  }

  serializeErrors() {
    return [{
      message: this.reason
    }]
  }
}