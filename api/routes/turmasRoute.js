const { Router } = require('express');
const TurmaController = require('../controllers/TurmaController');

const route = Router();

route.get('/turmas', TurmaController.pegaTodasAsTurmas);

module.exports = route;
