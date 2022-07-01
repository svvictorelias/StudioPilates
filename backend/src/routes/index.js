const express = require('express');
const aulaRoute = require('./aula.routes');
const professorRoute = require('./professor.routes');
const usuarioRoute = require('./usuario.routes');
const loginRoute = require('./login.routes')
const haveRoute = require('./have.routes')
const cors = require('cors')
const errors = require('@Middleware/errors');

const app = express();
app.use(cors())

app.use(express.json());
app.use('/aula', aulaRoute);
app.use('/professor', professorRoute);
app.use('/usuario', usuarioRoute);
app.use('/login', loginRoute);
app.use('/have', haveRoute);

app.use(errors);

module.exports = app;
