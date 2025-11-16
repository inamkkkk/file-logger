const express = require('express');
const bodyParser = require('body-parser');
const logRoutes = require('./routes/logRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/log', logRoutes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});