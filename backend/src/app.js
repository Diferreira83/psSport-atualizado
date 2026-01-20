/*

const express = require('express');
const app = express();

app.use(express.json());

app.use('/categorias', require('./routes/categorias.routes'));

module.exports = app;

*/
/*
const express = require('express');
const cors = require('cors');

require('dotenv').config();

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

module.exports = app;*/
/*
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', routes); // ⭐ IMPORTANTE

module.exports = app;*/

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes); // 👈 NÃO coloque barra aqui

module.exports = app;


