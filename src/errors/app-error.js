class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

const notFound = (message = 'Resource not found') => new AppError(message, 404);
const forbidden = (message = 'Forbidden access') => new AppError(message, 403);
const badRequest = (message = 'Bad request') => new AppError(message, 400);

module.exports = {
  AppError,
  notFound,
  forbidden,
  badRequest,
};