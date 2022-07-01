const haveRepositorio = require('@have/repository/HaveRepository');

class HaveService {
  async listAllHave() {
    const have = await haveRepositorio.haveRead();
    return have;
  }
  async listAllHaveById(id_usuario) {
    const have = await haveRepositorio.haveReadById(id_usuario);
    return have;
  }
  async createHave(id_usuario, id_aula) {
    try {
      const have = await haveRepositorio.haveCreate(id_usuario, id_aula);
      return have;
    } catch (error) {
      return new Error('Erro ao Cadastro');
    }
  }
  async deleteHave(id_usuario, id_aula) {

      const have = await haveRepositorio.haveDelete(id_usuario, id_aula);
      return have;

  }
}

module.exports = HaveService;
