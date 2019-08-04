const express = require('express')
const app = express();
const morgan = require('morgan');
const cors = require('cors');

app.use(morgan('dev'))//ver las peticiones que van llegando
app.use(cors()); //dar acceso a la comunicación entre distintos servidores.
app.use(require('./routes/user'));




module.exports = app;