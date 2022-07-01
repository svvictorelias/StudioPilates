const express = require('express')
const route = express()
const UsuarioController = require('@usuario/controller/UsuarioController')

const usuarioController = new UsuarioController()

/**
 * Lista todos os produtos
 */
 route.get('/', usuarioController.list);
 
 /**
 * Cria um usuário
 */
route.post('/', usuarioController.create);

/**
 * Altera usuario
 */
route.put('/:id_usuario', usuarioController.update);

/**
 * Deleta usuario
 */
 route.put('/:id_usuario/delete', usuarioController.delete);
module.exports = route