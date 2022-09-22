const router = require("express").Router();
const { endpoint, topic } = require("../consts");

// ==================================================================================

const controller = require("../controllers/UserController");

const only_ms = require("../middlewares/only_ms");

// ==================================================================================
// Public

router.post(
  `${endpoint}/${topic}/v1/is-login`,
  only_ms,
  controller.validationLogin
);

// ==================================================================================

module.exports = router;
