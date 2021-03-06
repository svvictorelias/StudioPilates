const express = require('express')
const route=express()
const AulaController = require('@aula/controller/AulaController')

const aulaController = new AulaController()

/**
 * Lista todos os aulas
 */
 route.get('/', aulaController.list);
/**
 * Lista todos as aulas que o usuario não está
 */
 route.get('/:id_usuario', aulaController.ListAulasByNotId);

/**
 * Cria aula
 */
 route.post('/', aulaController.create);

/**
 * Altera aula
 */
route.put('/:id_aula', aulaController.update);

/**
 * Adiciona vaga em aula quando desmarcada
 */
route.put('/addAulaVaga/:id_aula', aulaController.addaulavaga);
/**
 * Deleta aula
 */
 route.delete('/:id_aula', aulaController.delete);

 module.exports = route