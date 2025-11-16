const fileLogger = require('../utils/fileLogger');

exports.logMessage = (req, res) => {
  const message = req.body.message;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }
  fileLogger.logToFile(message);
  res.status(200).json({ message: 'Message logged successfully' });
};