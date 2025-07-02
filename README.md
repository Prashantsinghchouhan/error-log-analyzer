# Error Log Analyzer

This project uses Node.js and Ollama (llama 3.2) to analyze logs and summarize errors.

## Setup

1. Clone repo
2. Run `npm install`
3. Create `.env` with `OPENAI_API_KEY`
4. Run with `node server.js`

## API Endpoint

`POST /analyze` with JSON:

```json
{ "logs": "Your log text here" }
```
