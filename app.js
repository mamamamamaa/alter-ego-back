const express = require("express");
const cors = require("cors");
const logger = require("morgan");
require("dotenv").config();

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

const newsRouter = require("./routes/api/news");

app.use(cors());
app.use(logger(formatsLogger));
app.use(express.json());

app.use("/api/news", newsRouter);

module.exports = app;
