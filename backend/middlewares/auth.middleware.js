const jwt = require('jsonwebtoken');

const authMiddleware = {
  verifyToken: (req, res, next) => {
    const token = req.headers['authorization'];
    console.log('Token received in request:', token);

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