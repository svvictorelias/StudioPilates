const express = require('express')
const route = express()
const EnderecoController = require('@endereco/controller/EnderecoController')

const enderecoController = new EnderecoController()

/**
 * Lista todos os produtos
 */
//  route.get('/', enderecoController.list);
 
 /**
 * Cria um usuário
 */
route.post('/', enderecoController.create);

/**
 * Altera endereco
 */
// route.put('/:id_endereco', enderecoController.update);

/**
 * Deleta endereco
 */
//  route.put('/:id_endereco/delete', enderecoController.delete);
module.exports = route