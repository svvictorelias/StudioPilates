const ProfessorService = require('@professor/services/ProfessorService');

const professorService = new ProfessorService();

class ProfessorController {
  async list(req, res) {
    const professores = await professorService.listAllProfessores();
    return res.json(professores);
  }

  async create(req, res) {
    const { nome, modalidade, cpf } = req.body;
    const professor = await professorService.createTeacher(
      nome,
      modalidade,
      cpf
    );
    return res.status(201).json(professor);
  }

  async update(req, res) {
    const { id_professor } = req.params;
    const { nome, modalidade, cpf } = req.body;
    const professor = await professorService.updateTeacher(
      Number(id_professor),
      nome,
      modalidade,
      cpf
    );
    if (professor instanceof Error) {
      return res.status(401).json(professor.message);
    }
    return res.status(204).json(professor);
  }

  async delete(req, res) {
    const { id_professor } = req.params;
    const professor = await professorService.deleteTeacher(
      Number(id_professor)
    );
    if (professor instanceof Error) {
      return res.status(401).json(professor.message);
    }
    return res.status(204).json(professor);
  }
}

module.exports = ProfessorController;
