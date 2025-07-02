const express = require("express");
const { ServerConfig } = require("./config/index.js");
const apiRoutes = require("./routes/index.js");
const { errorHandler } = require("./middlewares/index.js");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

app.use("/home", (req, res) => {
  res.json({ msg: "PING-PONG - AT HOME" });
});

app.listen(ServerConfig.PORT, () => {
  console.log("Successfully started the server on port", ServerConfig.PORT);
});

app.use(errorHandler);
