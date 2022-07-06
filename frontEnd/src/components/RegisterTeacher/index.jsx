import React from 'react';
import { Form } from './styles';
import { useState } from 'react';
import axios from 'axios';

const RegisterTeacher = () => {
  const [nome, setNome] = useState('');
  const [modalidade, setModalidade] = useState('');
  const [cpf, setCpf] = useState('');

  const handleRegisterTeacher = async e => {
    e.preventDefault();
    console.log(nome, modalidade, cpf);
    const create = await axios
      .post('http://localhost:3001/professor', {
        nome,
        modalidade,
        cpf
      })
      .then(res => {
        alert('Professor Cadastrado');
      })
      .catch(err => {
        alert('Professor não Cadastrado');
        console.log(err.message);
      });
  };
  return (
  
        <Form onSubmit={handleRegisterTeacher}>
          <h1>Cadastrar Professor</h1>
          <h3>Nome</h3>
          <div className="Dados">
            <input type="text" onChange={e => setNome(e.target.value)} />
          </div>
          <h3>Modalidade</h3>
          <div className="Modalidades">
            <input type="text" onChange={e => setModalidade(e.target.value)} />
          </div>
          <h3>Cpf</h3>
          <div className="Modalidades">
            <input type="text" onChange={e => setCpf(e.target.value)} />
          </div>
          <button type="submit">Cadastrar</button>
          <span>
            Deseja Voltar? <a href="/">Menu</a>
          </span>
        </Form>

  );
};

export default RegisterTeacher;
