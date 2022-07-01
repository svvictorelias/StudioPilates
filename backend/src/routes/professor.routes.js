const express = require('express')
const route = express()
const ProfessorController = require('@professor/controller/ProfessorController')

const professorController = new ProfessorController()

/**
 * Lista todos os professores
 */
 route.get('/', professorController.list);

/**
 * Cria Professor
 */
 route.post('/', professorController.create);

/**
 * Altera Professor
 */
 route.put('/:id_professor', professorController.update);

/**
 * Deleta Professor
 */
 route.delete('/:id_professor', professorController.delete);
 

module.exports = route