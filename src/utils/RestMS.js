const jwt = require("jsonwebtoken");
const axios = require("axios");

const RestMS = async ({ url, method, body }) => {
  try {
    // create new token for communication
    const new_token = jwt.sign(
      { is_ms: process.env.SERVICE_NAME },
      process.env.JWT_MS,
      {
        expiresIn: 60 * 60 * 1, // minute
      }
    );
    const { data } = await axios({
      url,
      method,
      data: body,
      headers: { authorization: "Bearer " + new_token },
    });
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = RestMS;
