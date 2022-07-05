import { parseCookies } from 'nookies';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { logout } from '../../Provider/Signup.provider';
import { NavBar } from './styles';

const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false);
  const { 'reactAuth.token': tokenJWT, 'reactAuth.nivel': nivelUsuarioJWT } =
    parseCookies();

  useEffect(() => {
    if (tokenJWT) setIsLogged(true);
    console.log(nivelUsuarioJWT);
  }, []);

  const handleLogout = () => {
    logout();
  };

  const NavLogged = () => {
    return nivelUsuarioJWT == 'USER' ? (
      <ul>
        <li>
          <a href="/dashboard">Minhas Aulas</a>
        </li>
        <li>
          <a href="/MarkClass">Marcar Aula</a>
        </li>
        <li>
          <a href="/perfil">Perfil</a>
        </li>
        <li>
          <a href="/" onClick={handleLogout}>
            Sair
          </a>
        </li>
      </ul>
    ) : (
      <ul>
        <li>
          <a href="/dashboard">Aulas</a>
        </li>
        <li>
          <a href="/teachers">Professores</a>
        </li>
        <li>
          <a href="/users">Usuários</a>
        </li>
        <li>
          <a href="/" onClick={handleLogout}>
            Sair
          </a>
        </li>
      </ul>
    );
  };

  return (
    <NavBar>
      <a href="/">
        <span>Studio Pilates</span>
      </a>
      {isLogged ? (
        <NavLogged />
      ) : (
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/login">Entrar</a>
          </li>
          <li>
            <a href="/signup">Cadastrar</a>
          </li>
          <li>
            <a href="/dev">Desenvolvedor</a>
          </li>
        </ul>
      )}
    </NavBar>
  );
};

export default Navbar;
