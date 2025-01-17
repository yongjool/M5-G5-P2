require('dotenv').config();

const express = require('express');
const cors = require('cors');

const apiRoutes = require('./routes/api.routes.js');
const checkQueryLength = require('./middleware/checkQueryLength.js');
const errorMiddleware = require('./middleware/errorMiddleware.js');

const app = express();
app.use(cors());

app.use(express.json());

app.use(checkQueryLength);

app.use('/api', apiRoutes);

app.use(errorMiddleware);

module.exports = app;
