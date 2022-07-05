import React from 'react';
import Navbar from '../../components/navbar';
import ImageLogin from '../../assets/Images/pilates.png';
import { StyleContainer, Form, Buttons, StyleImg } from './styles';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { parseCookies } from 'nookies';

const EditProfile = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [senha, setSenha] = useState('');
  const { 'reactAuth.id_usuario': id_usuarioJWT } = parseCookies();

  useEffect(() => {
    async function dataLogin() {
      try {
        await axios.get(`http://localhost:3001/usuario/${id_usuarioJWT}`).then(resp => {
          setNome(resp.data.nome)
          setEmail(resp.data.email)
          setDataNascimento(resp.data.data_nascimento)
  
        });
      } catch (error) {
        alert(`Ocorreu um Erro`)
      }
    }
    dataLogin();
  }, []);

  async function handleUpdateUser(e) {
    e.preventDefault();
    console.log(nome, email, dataNascimento, senha);
    try {
      const updateUser = await axios.put(
        `http://localhost:3001/usuario/${id_usuarioJWT}`,
        {
          nome,
          email,
          senha,
          data_nascimento: dataNascimento
        }
      );
      alert('Conta Alterada com Sucesso');
      return updateUser;
    } catch (error) {
      alert('Ocorreu um erro ao Atualizar dados');
    }
  }
  return (
    <>
      <Navbar />
      <StyleContainer>
        <Form onSubmit={e => handleUpdateUser(e)}>
          <h1>Atualizar Dados</h1>
          <h3>Nome</h3>
          <div>
            <input
              type="text"
              value={nome}
              onChange={e => setNome(e.target.value)}
            />
          </div>
          <h3>Email</h3>
          <div>
            <input
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <h3>Data de Nascimento</h3>
          <div>
            <input
              type="date"
              value={dataNascimento}
              onChange={e => setDataNascimento(e.target.value)}
            />
          </div>
          <h3>Senha</h3>
          <div>
            <input
              type="password"
              value={senha}
              onChange={e => setSenha(e.target.value)}
            />
          </div>
          <Buttons>
            <button>Deletar Conta</button>
            <button type="submit">Alterar</button>
          </Buttons>
          <span>
            Deseja Voltar? <a href="/">Menu</a>
          </span>
        </Form>
        <StyleImg>
          <h2>Seja Bem-Vindo(a)</h2>
          <img src={ImageLogin} />
          <span>
            <em>Studio Pilates</em>
          </span>
        </StyleImg>
      </StyleContainer>
    </>
  );
};

export default EditProfile;
