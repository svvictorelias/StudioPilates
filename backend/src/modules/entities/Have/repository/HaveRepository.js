const prisma = require('../../../../database/prismaClient');
const { have,aula } = require('../../../../database/prismaClient');

const haveRead = async () => {
  const result = await prisma.have.findMany({
    include: {
      aula: {},
      usuario: {}
    }
  });
  return result;
};

const haveReadById = async id_usuario => {
  const result = await prisma.have.findMany({
    where: { id_usuario },
    include: {
      aula: {},
      usuario: {}
    }
  });
  return result;
};

const haveCreate = async (id_usuario, id_aula) => {
  const result = await prisma.have.create({
    data: {
      id_usuario,
      id_aula
    }
  });
  return result;
};

const haveDelete = async (id_usuario, id_aula) => {
  const result = await prisma.have.delete({
    where:
    { id_usuario_id_aula: {
      id_usuario,
      id_aula
    } }
  });
  const aula = await prisma.aula.findFirst({
    where: { id_aula }
  });
  const diminuiAula = await prisma.aula.update({
    where:{id_aula},
    data:{
      vagas: aula.vagas +1
    }
  })
  return result;
};

module.exports = {
  haveRead,
  haveReadById,
  haveCreate,
  haveDelete
};
