const errorHandler = require("./error-handler.js");
const { validateLogsInput } = require("../middlewares/validators/index.js");
module.exports = { errorHandler, validateLogsInput };
