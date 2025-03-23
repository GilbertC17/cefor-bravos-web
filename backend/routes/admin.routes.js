const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/control-panel-admin', authMiddleware.verifyToken, (req, res) => {
  res.send('Welcome to the admin control panel');
});

module.exports = router;