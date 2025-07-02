const { analyzeLogsWithOpenAI } = require("../services/index.js");
const { StatusCodes } = require("http-status-codes");
const { SuccessResponse } = require("../utils/common/index.js");
const AppError = require("../utils/errors/app-error.js");

async function analyzeLogs(req, res, next) {
  try {
    const { logs } = req.body;
    const analysis = await analyzeLogsWithOpenAI(logs);
    res
      .status(StatusCodes.OK)
      .json(SuccessResponse("POST request made successfully", analysis));
  } catch (err) {
    next(err);
  }
}

module.exports = { analyzeLogs };
