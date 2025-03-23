const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const authMiddleware = {
  verifyToken: (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
      console.log('No token provided');
      return res.status(403).send({ message: 'No token provided!' });
    }

    jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.log('Unauthorized:', err.message);
        return res.status(401).send({ message: 'Unauthorized!' });
      }
      req.userId = decoded.username;
      console.log('Token verified, userId:', req.userId);
      next();
    });
  }
};

module.exports = authMiddleware;