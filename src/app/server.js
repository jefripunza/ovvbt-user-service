// 1st Module
const http = require("http");

// Third Party Module
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const { isProduction, skip_request } = require("../consts");

const random = require("../helpers/random");

// ---------------------------------------------------------------------
// ## Setup App

// Define
const app = express();
const server = http.createServer(app);

// Endpoint Logger
app.use((req, _, next) => {
  if (
    !skip_request.some((v) => String(req.originalUrl).startsWith(v)) &&
    req.originalUrl !== "/"
  ) {
    const traceId = random.Text(8);
    req.traceId = traceId;
    console.log(`[${traceId}][START] : ${req.originalUrl}`);
  }
  return next();
});
app.use(require("../utils/logger")());

// Config
app.set("port", process.env.PORT || 8080);

// Middleware
if (!isProduction) app.use(cors());
if (isProduction) app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ---------------------------------------------------------------------
// Import Routers

require("../routers")(app);

// Very Not Found !!!
app.all("*", (_, res) =>
  res.status(404).json({
    message: "endpoint not found!",
  })
);

// ---------------------------------------------------------------------

module.exports = { app, server };
