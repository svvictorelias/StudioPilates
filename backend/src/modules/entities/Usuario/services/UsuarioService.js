const usuarioRepositorio = require('@usuario/repository/usuarioRepository');

class UsuarioService {
  async listAllUsuarios() {
    const usuarios = await usuarioRepositorio.usuariosRead();
    return usuarios;
  }

  async createUsuario(
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
  ) {
    const alreadyHaveUser = await usuarioRepositorio.findUniqueUser(cpf);
    //console.log(alreadyHaveUser);

    if (alreadyHaveUser && alreadyHaveUser.email === email)
      throw new Error(`Email already in use.`);
    if (alreadyHaveUser) throw new Error(`Already have user.`);

    const usuario = await usuarioRepositorio.usuarioCreate(
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
    return usuario;
  }

  async updateUsuario(id_usuario, nome, cpf, email, senha, data_nascimento) {
    const usuario = await usuarioRepositorio.usuarioUpdate(
      id_usuario,
      nome,
      cpf,
      email,
      senha,
      data_nascimento
    );
    return usuario;
  }

  async deleteUsuario(id_usuario) {
    const usuario = await usuarioRepositorio.usuarioDelete(id_usuario);
    return usuario;
  }
}

module.exports = UsuarioService;
