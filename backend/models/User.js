const mongoose = require('mongoose');

//criando uma nova tabela para o banco de dados
const UserSchema = new mongoose.Schema({
    email: String,
});

//exportando o model e realmente criando ele. (sem essa linha a tabela não realmente criada)
module.exports = mongoose.model('User', UserSchema);

