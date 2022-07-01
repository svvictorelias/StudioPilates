const prisma = require('../../../../database/prismaClient');
const { aula, professor } = require('../../../../database/prismaClient');

const aulasRead = async () => {
  const result = await prisma.aula.findMany({
    include: {
      professor: {}
    }
  });
  return result;
};

const aulaCreate = async (nome, data, hora, fk_id_professor) => {
  try {
    const result = await prisma.aula.create({
      data: {
        nome,
        data,
        hora,
        fk_id_professor
      }
    });
    return result;
  } catch (error) {
    return;
  }
};

const aulaUpdate = async (id_aula, nome, data, hora, fk_id_professor) => {
  const aula = await prisma.aula.findFirst({
    where: { id_aula }
  });
  const result = await prisma.aula.update({
    where: { id_aula },
    data: {
      nome: nome ? nome : aula.nome,
      data: data ? data : aula.data,
      hora: hora ? hora : aula.hora,
      fk_id_professor: fk_id_professor ? fk_id_professor : aula.fk_id_professor
    }
  });
  return result;
};

const addaulavaga = async id_aula => {
  const aula = await prisma.aula.findFirst({
    where: { id_aula }
  });
  const result = await prisma.aula.update({
    where: { id_aula },
    data: {
      vagas: aula.vagas - 1
    }
  });
  return result;
};

const aulaDelete = async id_aula => {
  const result = await prisma.aula.delete({
    where: { id_aula }
  });
  return result;
};

module.exports = {
  aulasRead,
  aulaCreate,
  aulaUpdate,
  addaulavaga,
  aulaDelete
};
