const axios = require("axios");
const AppError = require("../utils/errors/app-error");

async function analyzeLogsWithOpenAI(logText) {
  const prompt = `Analyze the following logs and summarize key issues:\n${logText}`;
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    const status = error.response.status;
    const openaiError = error.response.data?.error;
    if (error.response && error.response.status === 429) {
      throw new AppError({
        message: "Too many requests. Please wait and retry",
        statusCode: error.response.status,
        explanation: [
          openaiError?.message ||
            "You've hit the rate limit. Slow down or upgrade your quota.",
        ],
      });
    }
    throw new AppError({
      message: "OpenAI API error",
      statusCode: status,
      explanation: [
        openaiError?.message ||
          "An unknown error occurred while calling OpenAI.",
      ],
    });
  }
}

module.exports = { analyzeLogsWithOpenAI };
