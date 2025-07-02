module.exports = (message, explanation, statusCode) => ({
  success: false,
  message,
  error: explanation,
  statusCode,
});
