const express = require('express');
const router = express.Router();
const { getNotices } = require('../controllers/public.controller');

router.get('/notices', getNotices);

module.exports = router;