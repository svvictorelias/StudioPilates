const HaveService = require('@have/services/HaveService');

const haveService = new HaveService();

class HaveController {
  async listAll(req, res) {
    const have = await haveService.listAllHave();
    return res.json(have);
  }
  async listAllById(req, res) {
    const { id_usuario } = req.params;
    const have = await haveService.listAllHaveById(Number(id_usuario));
    return res.json(have);
  }

  async create(req, res) {
    const { id_usuario, id_aula } = req.body;
    const have = haveService.createHave(Number(id_usuario), Number(id_aula));
    if ((await have) instanceof Error) {
      return res.status(404).json('Ocorreu um erro Ao criar');
    }
    return res.status(201).json(have);
  }

  async delete(req, res) {
    const { id_usuario, id_aula } = req.body;
    const have = haveService.deleteHave(Number(id_usuario),Number(id_aula));
    if ((await have) instanceof Error) {
      return res.status(404).json(Error);
    }
    return res.status(201).json(have);
  }
}

module.exports = HaveController;
