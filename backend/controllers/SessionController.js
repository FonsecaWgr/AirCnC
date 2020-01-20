//dentro do controller pode ter esses metodos: index, show, store, update, destroy
const User = require('../models/User');

module.exports = {
    //criando o metodo de cadastro de sessao, usando o asybc await pq no momento de criar
    //a tabela no banco pode demorar um pouco
    async store(req,res){
        const {email} = req.body;

    let user = await User.findOne({email});

    if(!user){
        user =  await User.create({email});
    }

    return res.json(user);
    }
};