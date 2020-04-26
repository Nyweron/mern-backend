const jwt = require('jsonwebtoken');

const HttpError = require("../models/http-error");

require("dotenv").config();
const secretToken = process.env.TOKEN;

module.exports = (req, res, next) => {
  if(req.method === 'OPTIONS') {
    return next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1]; //Authorization: 'Bearer TOKEN'
    if (!token) {
      throw new Error("Authentication failed!");
    }

    const decodedToken = jwt.verify(token, secretToken);
    req.userData = {userId: decodedToken.userId}
    next();

  } catch (err) {
    return next(new HttpError("Authentication failed!", 401));
  }
};
