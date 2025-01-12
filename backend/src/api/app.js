require('dotenv').config();

const express = require('express');
const cors = require('cors');
const winston = require('winston');
const expressWinston = require('express-winston');

const apiRoutes = require('./routes/api.routes.js');
const checkQueryLength = require('./middleware/checkQueryLength.js');
const errorMiddleware = require('./middleware/errorMiddleware.js');

const app = express();
app.use(expressWinston.logger({
    transports: [
      new winston.transports.Console()
    ],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    )
  }));
app.use(expressWinston.errorLogger({
    transports: [
      new winston.transports.Console()
    ],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    )
  }));
app.use(cors());

app.use(express.json());

app.use(checkQueryLength);

app.use('/api', apiRoutes);

app.use(errorMiddleware);

module.exports = app;
