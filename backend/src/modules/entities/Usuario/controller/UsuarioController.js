const UsuarioService = require('@usuario/services/UsuarioService');

const usuarioService = new UsuarioService();

class UsuarioController {
  async list(req, res) {
    const usuarios = await usuarioService.listAllUsuarios();
    return res.json(usuarios);
  }

  async create(req, res) {
    const {
      nome,
      cpf,
      email,
      senha,
      data_nascimento,
      cep,
      rua,
      numero,
      bairro,
      cidade,
      estado
    } = req.body;
    const usuario = await usuarioService.createUsuario(
      nome,
      cpf,
      email,
      senha,
      data_nascimento,
      cep,
      rua,
      numero,
      bairro,
      cidade,
      estado
    );
    return res.status(201).json(usuario);
  }

  async update(req, res) {
    const { id_usuario } = req.params;
    const { nome, cpf, email, senha, data_nascimento } = req.body;
    const usuario = await usuarioService.updateUsuario(
      Number(id_usuario),
      nome,
      cpf,
      email,
      senha,
      data_nascimento
    );
    return res.status(204).json(usuario);
  }

  async delete(req, res) {
    const { id_usuario } = req.params;
    const usuario = await usuarioService.deleteUsuario(Number(id_usuario));
    if (usuario instanceof Error) {
      return res.status(401).json(usuario.message);
    }
    return res.status(204).json(usuario);
  }
}
module.exports = UsuarioController;
