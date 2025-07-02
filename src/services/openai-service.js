const axios = require("axios");
const AppError = require("../utils/errors/app-error");
const dotenv = require("dotenv");
dotenv.config();

async function analyzeLogsWithOpenAI(logText) {
  const prompt = `Analyze the following logs and summarize key issues:\n${logText}`;
  try {
    const response = await axios.post(
      "http://127.0.0.1:11434/api/generate",
      {
        model: "llama3.2:1b",
        prompt: prompt,
        stream: false,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.response;
  } catch (error) {
    const status = error.response?.status;
    const explanation = error.response?.data?.error?.message || error.message;

    throw new AppError({
      message: "Ollama API error",
      statusCode: status,
      explanation: [explanation],
    });
  }
}

module.exports = { analyzeLogsWithOpenAI };
