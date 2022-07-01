const professorRepositorio = require('@professor/repository/professorRepository');

class ProfessorService {
  async listAllProfessores() {
    const professores = await professorRepositorio.professoresRead();
    return professores;
  }

  async createTeacher(nome, modalidade, cpf) {
    const alreadyHaveTeacher = await professorRepositorio.findUniqueTeacher(
      cpf
    );
    if (alreadyHaveTeacher) throw new Error('Professor já cadastrado');

    const teacher = await professorRepositorio.teacherCreate(
      nome,
      modalidade,
      cpf
    );
    return teacher;
  }

  async updateTeacher(id_professor, nome, modalidade, cpf) {
    const teacher = await professorRepositorio.teacherUpdate(
      id_professor,
      nome,
      modalidade,
      cpf
    );
    return teacher;
  }

  async deleteTeacher(id_professor){
    const teacher = await professorRepositorio.deleteTeacher(id_professor)
    return teacher
  }
}

module.exports = ProfessorService;
