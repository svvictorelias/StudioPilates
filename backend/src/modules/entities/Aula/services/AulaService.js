const aulaRepositorio = require('@aula/repository/aulaRepository');

class AulaService {
  async listAllAulas() {
    const aulas = await aulaRepositorio.aulasRead();
    return aulas;
  }

  async createAula(nome, data, hora, fk_id_professor) {
    const aula = await aulaRepositorio.aulaCreate(
      nome,
      data,
      hora,
      fk_id_professor
    );
    if (aula) {
      return aula;
    }
    throw new Error('Parametros invalidos')
  }

  async updateAula(id_aula, nome, data, hora, fk_id_professor) {
    const aula = await aulaRepositorio.aulaUpdate(
      id_aula,
      nome,
      data,
      hora,
      fk_id_professor
    );
    return aula;
  }
  async addaulavaga(id_aula) {
    const aula = await aulaRepositorio.addaulavaga(
      id_aula
    );
    return aula;
  }

  async deleteAula(id_aula){
    const aula = await aulaRepositorio.aulaDelete(
      id_aula
    )
    return aula
  }
}

module.exports = AulaService;
