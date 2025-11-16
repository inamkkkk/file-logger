const fileLogger = require('../utils/fileLogger');

const loggerMiddleware = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${req.method} ${req.originalUrl}`;
  fileLogger.logToFile(logMessage);
  next();
};

module.exports = loggerMiddleware;