const prisma = require('../../../../database/prismaClient');
const { hash } = require('bcrypt');
const { usuario, endereco } = require('../../../../database/prismaClient');

const usuariosRead = async () => {
  const result = await prisma.usuario.findMany({});
  return result;
};

const findUniqueUser = async cpf => {
  const result = await prisma.usuario.findFirst({
    where: { cpf }
  });
  return result;
};
const findById = async id_usuario => {
  const result = await prisma.usuario.findFirst({
    where: { id_usuario }
  });
  return result;
};

const findUserPerEmail = async email => {
  const result = await prisma.usuario.findFirst({
    where: { email }
  });
  return result;
};

const usuarioCreate = async (
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
) => {
  const password = await hash(senha, 8);
  const endereco = await prisma.endereco.create({
    data:{
      cep,
      rua,
      numero,
      bairro,
      cidade,
      estado
    }
  });
  console.log(endereco.id_endereco)
  const result = await prisma.usuario.create({
    data: {
      nome,
      cpf,
      email,
      senha: password,
      nivel: 'USER',
      ativo: true,
      data_nascimento,
      fk_id_endereco: endereco.id_endereco
    }
  });
  return result;
};

const usuarioUpdate = async (
  id_usuario,
  nome,
  cpf,
  email,
  senha,
  data_nascimento
) => {
  const user = await prisma.usuario.findFirst({
    where: { id_usuario }
  });
  const result = await prisma.usuario.update({
    where: { id_usuario },
    data: {
      nome: nome ? nome : user.nome,
      cpf: cpf ? cpf : user.cpf,
      email: email ? email : user.email,
      senha: senha ? senha : user.senha,
      data_nascimento: data_nascimento ? data_nascimento : user.data_nascimento
    }
  });
  return result;
};

const usuarioDelete = async id_usuario => {
  const result = await prisma.usuario.update({
    where: { id_usuario },
    data: {
      ativo: false
    }
  });
  return result;
};

module.exports = {
  usuariosRead,
  findUniqueUser,
  findById,
  findUserPerEmail,
  usuarioCreate,
  usuarioUpdate,
  usuarioDelete
};
