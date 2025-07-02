const AppError = require("../../utils/errors/app-error.js");
function validateLogsInput(req, res, next) {
  const { logs } = req.body;
  if (!logs || typeof logs !== "string" || logs.trim().length === 0) {
    throw new AppError({
      message: "No fields provided for update",
      explanation: ["Request body must contain at least one field to update."],
      statusCode: 400,
    });
  }
  next();
}
module.exports = { validateLogsInput };
