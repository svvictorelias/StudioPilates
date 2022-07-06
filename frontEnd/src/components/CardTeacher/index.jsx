import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/Signup.provider';
import { Container, DadosAula } from './styles';

const CardTeacher = ({ id_professor, nome, modalidade, cpf }) => {

  const {idTeacher, setIdTeacher} = useContext(AuthContext)

  return (
    <Container>
      <input
        type="radio"
        value={id_professor}
        name="aulas"
        onClick={()=>setIdTeacher(id_aula)}
      />
      <DadosAula>
        <h3>{nome}</h3>
        <p>
          {modalidade}
        </p>
        <p>
         {cpf}
        </p>
      </DadosAula>
    </Container>
  );
};

export default CardTeacher;
