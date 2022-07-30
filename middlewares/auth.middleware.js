const axios = require('axios');

require('dotenv').config();

exports.verifyToken = (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    if (!token) {
      return res.status(403).json({
        error: "No token provided."
      })
    }

    axios.post('http://localhost:4001/api/verify_token', { token: token })
      .then((response => {
        const user = response.user;
        req.user = user;
        next();
      }))
      .catch((error => {
        return res.status(401).json({
          error: "Unauthorized."
        })
      }))
    
  } catch (error) {
    return res.status(401).json({
      error: "Unauthorized."
    })
  }
}