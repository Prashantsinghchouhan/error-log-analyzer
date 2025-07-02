const express = require("express");
const { analyzeLogs } = require("../../controllers/index.js");
const { validateLogsInput } = require("../../middlewares/index.js");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "Okay on v1 Route" });
});

router.post("/analyze", validateLogsInput, analyzeLogs);
module.exports = router;
