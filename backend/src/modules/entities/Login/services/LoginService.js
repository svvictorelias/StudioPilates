const usuarioRepository = require('@usuario/repository/usuarioRepository');
const { compare } = require('bcrypt');
const { sign } = require('jsonwebtoken');

class LoginService {
  async signin(email, senha) {
    const user = await usuarioRepository.findUserPerEmail(email);
    var token = null;
    if (!user) {
      throw new Error('Invalid Login!');
    }
    console.log(user);

    try {
      const comparePassword = await compare(senha, user.senha);
      console.log(comparePassword);
      if (comparePassword) {
        token = sign(
          {
            cpf: user.cpf,
            nivel: user.nivel,
            id_usuario: user.id_usuario
          },
          process.env.JWT_SECRET,
          { expiresIn: '2h' }
        );
      }
    } catch (error) {
      throw new Error(error);
    }
    return token;
  }
}

module.exports = LoginService;
