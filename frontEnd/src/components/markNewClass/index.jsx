import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/Signup.provider';
import { Container, DadosAula } from './styles';

const MarkNewClass = ({ id_aula, nome, data, vagas, professor }) => {
  const [, hora] = data.split(' ');

  function dataAtualFormatada() {
    var dataFormat = new Date(data),
      dia = dataFormat.getDate().toString(),
      diaF = dia.length == 1 ? '0' + dia : dia,
      mes = (dataFormat.getMonth() + 1).toString(),
      mesF = mes.length == 1 ? '0' + mes : mes,
      anoF = dataFormat.getFullYear();
    return diaF + '/' + mesF + '/' + anoF;
  }
  const {idClass, setIdClass} = useContext(AuthContext)

  return (
    <Container>
      <input
        type="radio"
        value={id_aula}
        name="aulas"
        onClick={()=>setIdClass(id_aula)}
      />
      <DadosAula>
        <h3>{nome}</h3>
        <p>{`${dataAtualFormatada(data)} ${hora}`}</p>
        <p>
          <strong>Professor:</strong> {professor}
        </p>
        <p>
          <strong>Vagas:</strong> {vagas}
        </p>
      </DadosAula>
    </Container>
  );
};

export default MarkNewClass;
