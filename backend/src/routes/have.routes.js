const express = require('express');
const route = express();
const HaveController = require('@have/controller/HaveController');

const haveController = new HaveController();

route.get('/', haveController.listAll);
route.get('/listAllById/:id_usuario', haveController.listAllById);
route.post('/', haveController.create);
route.delete('/', haveController.delete);

module.exports = route;
