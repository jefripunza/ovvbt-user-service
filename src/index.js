const { isProduction } = require("./consts");

// ---------------------------------------------------------------------

require("./utils/init_logger");

const { app, server } = require("./app/server");

const RunServer = () => {
  server.listen(app.get("port"), () => {
    console.log(`${process.env.SERVICE_NAME} running at ${app.get("port")}`);
  });
};

require("./app/database")(RunServer);
