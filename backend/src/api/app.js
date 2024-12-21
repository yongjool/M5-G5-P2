require('dotenv').config();

const express = require('express');
const cors = require('cors');

const searchRoutes = require('./routes/search.routes.js');
const errorMiddleware = require('./middleware/errorMiddleware.js');

const app = express();
app.use(cors());

app.use(express.json());
app.use('/api', searchRoutes);

app.use(errorMiddleware);

module.exports = app;
