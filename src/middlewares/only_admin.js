const { print } = require("../utils/services");
const { role_user } = require("../consts");

module.exports = (req, res, next) => {
  let message = "";
  if ([role_user[0], role_user[1]].includes(req.user.role)) {
    return next();
  }
  message = "Only Admin !!!";
  print(req.traceId, { message });
  return res.status(401).json({
    message,
  });
};
