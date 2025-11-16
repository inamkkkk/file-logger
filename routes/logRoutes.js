const express = require('express');
const logController = require('../controllers/logController');
const loggerMiddleware = require('../middlewares/loggerMiddleware');

const router = express.Router();

router.post('/', loggerMiddleware, logController.logMessage);

module.exports = router;