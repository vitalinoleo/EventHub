// O arquivo principal do aplicativo Express, que usa as rotas e middlewares definidos.
const express = require('express');
const bodyParser = require('body-parser');
const eventoRoutes = require('./routes/eventoRoutes');
require('dotenv').config();
require('./config/database'); // Conectando ao banco de dados


const app = express();


// Middlewares
app.use(bodyParser.json());


// Rotas
app.use('/eventos', eventoRoutes);


// Exportando a aplicação configurada
module.exports = app;
