const router = require("express").Router();
const { endpoint, topic } = require("../consts");

// ==================================================================================

const controller = require("../controllers/UserController");

const only_ms = require("../middlewares/only_ms");

// ==================================================================================
// Public

router.post(
  `${endpoint}/${topic}/v1/register`,
  only_ms,
  controller.createUserRegister
);

// ==================================================================================

module.exports = router;
