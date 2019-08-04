const mongoose = require('mongoose');

async function connect(){
    await mongoose.connect('mongodb://localhost/flutter_app',{
        useNewUrlParser:true
    });
    console.log('Base de datos conectada');   
};

module.exports = {connect};