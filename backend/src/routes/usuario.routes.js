const express = require('express')
const route = express()
const UsuarioController = require('@usuario/controller/UsuarioController')

const usuarioController = new UsuarioController()

/**
 * Lista todos os usuarios
 */
 route.get('/', usuarioController.list);
/**
 * Lista um usuario
 */
 route.get('/:id_usuario', usuarioController.listById);
 
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