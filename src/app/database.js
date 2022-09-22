const typeorm = require("typeorm"); // More : https://orkhan.gitbook.io/typeorm/docs/data-source-options

const { db_config, db_synchronize, db_logging } = require("../consts");

/**
 * @param {Function} RunServer
 */
module.exports = async (RunServer) => {
  await typeorm
    .createConnection({
      name: "default",
      ...db_config,
      synchronize: db_synchronize,
      logging: db_logging, // debug query
      entities: require("../models/entities"),
    })
    .then(() => {
      console.log(
        `Database is connected! (${db_config.database}) (${db_config.type})`
      );
      RunServer();
    })
    .catch((error) => {
      console.error(`Error connection: ${error.message}`);
      process.exit(1);
    });
};
