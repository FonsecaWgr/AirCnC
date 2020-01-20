const mongoose = require('mongoose');

//criando uma nova tabela para o banco de dados
const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    }
});

//exportando o model e realmente criando ele. (sem essa linha a tabela não realmente criada)
module.exports = mongoose.model('Booking', BookingSchema);

