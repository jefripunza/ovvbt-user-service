const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  let token = req.headers.ms_auth;
  token =
    token !== undefined && String(token).startsWith("Bearer ")
      ? String(token).split(" ")[1]
      : false;
  if (token) {
    return jwt.verify(token, process.env.JWT_MS, (err, token_decoded) => {
      if (err) {
        console.log("Not Authorized");
        return res.status(401).json({
          message: "Not Authorized (MS)",
        });
      }
      if (token_decoded?.is_ms) {
        console.log({ ...token_decoded });
        return next();
      }
      console.log("Only Microservice Communication !!!");
      return res.status(401).json({
        message: "Only Microservice Communication !!!",
      });
    });
  } else {
    console.log(`${token} Authorization Bearer is required!`);
    return res.status(403).json({
      message: "Authorization Bearer is required! (MS)",
    });
  }
};
