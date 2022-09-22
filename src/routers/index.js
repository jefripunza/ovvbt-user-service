module.exports = (app) => {
  // ----------------------

  app.use(require("./AuthRouter"));
  app.use(require("./RegisterRouter"));

  app.use(require("./UserRouter"));

  // ----------------------
};
