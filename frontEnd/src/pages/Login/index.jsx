import React, { useState } from 'react';
import { Form, StyleContainerLogin, StyleImg, StyleLogin } from './styles';
import ImageLogin from '../../assets/Images/pilates.png';
import ResetPassword from '../../components/resetPassword';
import { LabelError } from '../../styles/global';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/Signup.provider';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn, user } = useContext(AuthContext);

  const [resetPassowrd, setResetPassword] = useState(false);


  async function handleSubmit(e) {
    e.preventDefault();
    const data = { email, password };
    await signIn(data);
  }

  const handleScreens = () => {
    if (!resetPassowrd) {
      return (
        <StyleContainerLogin>
          <h1>Faça Login</h1>
          <span>É um prazer te ter de volta</span>
          <Form onSubmit={handleSubmit}>
            <input
              type="email"
              onChange={e => setEmail(e.target.value)}
              placeholder="Endereço de Email"
            />
            <input
              type="password"
              onChange={e => setPassword(e.target.value)}
              placeholder="Senha"
            />
            <button>FAZER LOGIN</button>
            <LabelError>{error}</LabelError>
          </Form>
          <span>
            Ainda não possui uma Conta? <a href="/signup">Criar Conta</a>
          </span>

          <span className="SpanLink" onClick={() => setResetPassword(true)}>
            Recuperar Senha
          </span>
        </StyleContainerLogin>
      );
    } else {
      return <ResetPassword />;
    }
  };

  return (
    <StyleLogin>
      {handleScreens()}
      <StyleImg>
        <h2>Seja Bem-Vindo(a)</h2>
        <img src={ImageLogin} />
        <span>
          <em>Studio Pilates</em>
        </span>
      </StyleImg>
    </StyleLogin>
  );
};

export default Login;
