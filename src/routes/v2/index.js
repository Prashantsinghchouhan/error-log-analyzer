const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.json({ msg: "Okay on v2 Route" });
});
module.exports = router;
