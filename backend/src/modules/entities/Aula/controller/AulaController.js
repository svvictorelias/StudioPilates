const AulaService = require('@aula/services/AulaService');

const aulaService = new AulaService();

class AulaController {
  async list(req, res) {
    const aulas = await aulaService.listAllAulas();
    return res.json(aulas);
  }
  async ListAulasByNotId(req, res) {
    const {id_usuario} = req.params
    const aulas = await aulaService.ListAulasByNotId(Number(id_usuario));
    return res.json(aulas);
  }

  async create(req, res) {
    const { nome, data, hora, fk_id_professor } = req.body;
    const aula = aulaService.createAula(
      nome,
      data,
      hora,
      Number(fk_id_professor)
    );
    if(await aula instanceof Error){
      return 
    }
    console.log(aula)
    return res.status(201).json(aula);
  }

  async update(req, res) {
    const { id_aula } = req.params;
    const { nome, data, hora, fk_id_professor } = req.body;
    const aula = aulaService.updateAula(
      Number(id_aula),
      nome,
      data,
      hora,
      Number(fk_id_professor)
    );
    return res.status(201).json(aula);
  }
  async addaulavaga(req, res) {
    const { id_aula } = req.params;
    const aula = aulaService.addaulavaga(
      Number(id_aula)
    );
    return res.status(201).json(aula);
  }

  async delete(req, res){
    const {id_aula} = req.params
    const aula = aulaService.deleteAula(
      Number(id_aula)
    )
    return res.status(204).json(aula)
  }
}

module.exports = AulaController;
