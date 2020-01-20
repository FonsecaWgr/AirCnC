const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');


//startando a aplicação
const app = express();

//conectando com servidor
mongoose.connect('mongodb+srv://Wagner:wgr061228@cluster0-79qsy.mongodb.net/test?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(2828);



