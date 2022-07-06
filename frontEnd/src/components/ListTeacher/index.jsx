import React, { useEffect } from 'react';
import { Container,AvailableTeachers } from './styles';
import { useState } from 'react';
import axios from 'axios';
import CardTeacher from '../CardTeacher';

const ListTeacher = () => {
  const [nome, setNome] = useState('');
  const [modalidade, setModalidade] = useState('');
  const [cpf, setCpf] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/professor')
      .then(res => {
        setList(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  return (
    <Container>
      <h1>Todos Professores</h1>
      <AvailableTeachers>
      {list.map(item => (
        <CardTeacher
        key={item.id_professor}
          id_professor={item.id_professor}
          nome={item.nome}
          modalidade={item.modalidade}
          cpf={item.cpf}
        />
      ))}
      </AvailableTeachers>
      <button type="submit">Deletar</button>
      <span>
        Deseja Voltar? <a href="/">Menu</a>
      </span>
    </Container>
  );
};

export default ListTeacher;
