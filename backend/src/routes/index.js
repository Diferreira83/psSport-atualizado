/*
const express = require('express');
const router = express.Router();
const atletasRoutes = require('./atletasRoutes');

// Rota de teste para ver se o roteador está funcionando
router.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

// Aqui você registra a sua funcionalidade de atletas
router.use('/atletas', atletasRoutes);

module.exports = router
*/
/*
const express = require('express');
const router = express.Router();

const atletasRoutes = require('./atletasRoutes');

router.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

router.use('/atletas', atletasRoutes);

module.exports = router;
*/

const express = require('express');
const router = express.Router();

const atletasRoutes = require('./atletasRoutes');

// 🔎 rota de teste
router.get('/teste', (req, res) => {
  res.send('FUNCIONANDO');
});

// rota de health
router.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// rotas de atletas
router.use('/atletas', atletasRoutes);

module.exports = router;


