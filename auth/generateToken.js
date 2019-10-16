const jwt = require("jsonwebtoken");

function generateToken(user) {
    const payload = {
      username: user.username,
      subject: user.id
    };
  
    const secret = "My dog is my best friend";
  
    const options = {
      expiresIn: "1d"
    }
  
  
    return jwt.sign(payload, secret, options);
  }

  module.exports = generateToken;