// Este módulo define o modelo do evento e encapsula a lógica de manipulação dos dados.

const mongoose = require('mongoose');


const eventoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        required: true
    },
    imagem: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('evento', eventoSchema);
