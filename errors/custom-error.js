class CustomAPIError extends Error {
  constructor(message, statusCode) {
    // super ==> used to inherent props from obj's parent which in this case is built-in (Error)
    super(message)
    // properties
    this.statusCode = statusCode
  }
}

const createCustomError = (msg, statusCode) => {
  return new CustomAPIError(msg, statusCode)
}

module.exports = { createCustomError, CustomAPIError }
