import { useState } from 'react';
import { createContext } from 'react';
import { api } from '../services/api';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import jwt_decode from 'jwt-decode';
import { useEffect } from 'react';

export const SignupContext = createContext();

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [idClass, setIdClass] = useState();
  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'reactAuth.token': token } = parseCookies();
    if (token) {
      const { cpf, nivel, id_usuario } = jwt_decode(token);
      setUser({ cpf, nivel, id_usuario });
    }
  }, []);

  async function signIn({ email, password }) {
    try {
      const response = await api.post('login', {
        email,
        senha: password
      });
      const { cpf, nivel, id_usuario } = jwt_decode(response.data);
      setCookie(undefined, 'reactAuth.token', response.data, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/'
      });
      setCookie(undefined, 'reactAuth.cpf', cpf, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/'
      });
      setCookie(undefined, 'reactAuth.nivel', nivel, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/'
      });
      setCookie(undefined, 'reactAuth.id_usuario', id_usuario, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/'
      });
      setUser({ email, cpf, nivel, id_usuario });
      api.defaults.headers['Authorization'] = `Bearer ${response.data}`;
      console.log(user);
      alert('Login Realizado');
      window.location.replace('/dashboard');
    } catch (error) {
      alert(error?.response.data.message);
      console.log(error);
    }
  }
  return (
    <AuthContext.Provider
      value={{ signIn, isAuthenticated, user, idClass, setIdClass }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const logout = () => {
  destroyCookie(null,'reactAuth.token',{path:'/'})
  destroyCookie(null,'reactAuth.cpf',{path:'/'})
  destroyCookie(null,'reactAuth.nivel',{path:'/'})
  destroyCookie(null,'reactAuth.id_usuario',{path:'/'})
};
