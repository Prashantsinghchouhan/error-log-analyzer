const express = require("express");
const v1Router = require("./v1/index.js");
const v2Router = require("./v2/index.js");

const router = express.Router();

router.get("/", (req, res) => {
  return res.status(200).json({ msg: "On API route" });
});

router.use("/v1", v1Router);
router.use("/v2", v2Router);

module.exports = router;
