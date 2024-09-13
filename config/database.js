// Este módulo é responsável por conectar ao banco de dados MongoDB e retornar a instância da conexão.
const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.DATABASE_URL)
.then(() => console.log('Conectado ao MongoDB'))
.catch(err => console.error('Erro ao conectar ao MongoDB', err));


module.exports = mongoose;


