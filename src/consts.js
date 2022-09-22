const path = require("path");

exports.project_root =
  process.env.PWD || // Docker
  process.env.INIT_CWD || // Cloud
  process.env.LSNODE_ROOT || // Hosting
  path.join(__dirname, ".."); // local

// Setup Environment
require("dotenv").config();
require("dotenv").config({
  path: path.join(this.project_root, `.env.${process.env.ENV}`),
});

exports.endpoint = process.env.ENDPOINT;

// -------------------------------------------------------------------------------

exports.isCompiled = ["index.js", "app.js"].some((root) =>
  String(__filename).endsWith(root)
);

exports.isProduction = String(process.env.NODE_ENV).includes("production");

exports.skip_request = ["/favicon.ico", "/log"];

// -------------------------------------------------------------------------------

exports.expired_token = process.env.EXPIRED_TOKEN
  ? parseInt(process.env.EXPIRED_TOKEN)
  : 7; // day

exports.debug = false; // if true ? id : false

// -------------------------------------------------------------------------------

exports.db_config = {
  type: process.env.DB_TYPE || "mysql",
  port: process.env?.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
  host: process.env.DB_HOST || "localhost",
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "dbname",
};
exports.db_synchronize = process.env.DB_SYNC === "true";
exports.db_logging = process.env.DB_LOG === "true";

// -------------------------------------------------------------------------------

exports._template = [];

exports.topic = "user";

exports.role_user = ["SA", "ADMIN", "MERCHANT", "CUSTOMER"];
