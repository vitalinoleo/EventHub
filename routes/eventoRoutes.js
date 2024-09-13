// Este módulo define as rotas da API, que mapeiam as URLs para os controladores.

const express = require('express');
const router = express.Router();
const eventoController = require('../controllers/eventoController');


// Definindo as rotas e associando aos métodos do controller
router.post('/', eventoController.criarevento);            // Criar um novo evento
router.get('/', eventoController.listareventos);           // Listar todos os eventos
router.get('/:id', eventoController.buscarEventoPorId);    // Buscar um evento por ID
router.put('/:id', eventoController.atualizarEvento);    // Atualizar um evento por ID


module.exports = router;
