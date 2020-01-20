const mongoose = require('mongoose');

//criando uma nova tabela para o banco de dados
const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

//exportando o model e realmente criando ele. (sem essa linha a tabela não realmente criada)
module.exports = mongoose.model('Spot', SpotSchema);