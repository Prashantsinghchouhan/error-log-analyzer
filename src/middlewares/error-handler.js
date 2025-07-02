function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  return res.status(statusCode).json({
    success: false,
    message: err.message || "Something went wrong",
    error: err.explanation || {},
    statusCode: statusCode,
  });
}

module.exports = errorHandler;
