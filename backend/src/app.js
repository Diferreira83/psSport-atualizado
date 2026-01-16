const express = require('express');
const app = express();

app.use(express.json());

app.use('/categorias', require('./routes/categorias.routes'));

module.exports = app;
