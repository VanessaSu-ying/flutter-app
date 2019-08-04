const app = require('./app');
const { connect } = require('./database');



async function main(){

    //conexión a base de datos 
    await connect();

    //App express
    await app.listen(5000)
    console.log('Servidor en puerto 5000: Conectado')
}

main();