const axios = require("axios");

async function analyzeLogsWithOpenAI(logText) {
  console.log("Inside the service line");
  const prompt = `Analyze the following logs and summarize key issues:\n${logText}`;
  console.log(prompt);

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
}

module.exports = { analyzeLogsWithOpenAI };
