const prisma = require('../../../../database/prismaClient');
const { professor } = require('../../../../database/prismaClient');

const findUniqueTeacher = async cpf => {
  const result = await prisma.professor.findFirst({
    where: { cpf }
  });
  return result;
};

const professoresRead = async () => {
  const result = await prisma.professor.findMany({});
  return result;
};

const teacherCreate = async (nome, modalidade, cpf) => {
  const result = await prisma.professor.create({
    data: {
      nome,
      modalidade,
      cpf
    }
  });
  return result;
};

const teacherUpdate = async (id_professor, nome, modalidade, cpf) => {
  const teacher = await prisma.professor.findFirst({
    where: { id_professor }
  });
  const result = await prisma.professor.update({
    where: { id_professor },
    data: {
      nome: nome ? nome : teacher.nome,
      modalidade: modalidade ? modalidade : teacher.modalidade,
      cpf: cpf ? cpf : teacher.cpf
    }
  });
  return result
};

const deleteTeacher = async(id_professor)=>{
  const result = await prisma.professor.delete({
    where:{id_professor}
  })
  return result
}

module.exports = {
  professoresRead,
  findUniqueTeacher,
  teacherCreate,
  teacherUpdate,
  deleteTeacher
};
