'use strict';

const { AppError } = require('../errors/app-error');
const { mapConstraintError } = require('../errors/constraint-map');

module.exports = (err, req, res, next) => {
  // Handle mapped DB constraint errors
  const mappedError = mapConstraintError(err);
  if (mappedError) {
    return res.status(mappedError.statusCode).json({
      error: mappedError.message,
    });
  }

  // Handle custom AppError instances
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: err.message,
    });
  }

  // Fallback internal server error
  console.error(err);
  return res.status(500).json({
    error: 'Internal Server Error',
  });
};