import React, { useContext } from 'react'
import { Form, StyleContainerSignup } from './styles'
import { SignupContext } from '../../Provider/Signup.provider'

const SignupPartOne = ({ nextStep }) => {
  const {
    nameSignup,
    setNameSignup,
    cpfSignup,
    setCpfSignup,
    emailSignup,
    setEmailSignup,
    passwordSignup,
    setPasswordSignup
  } = useContext(SignupContext)
  return (
    <StyleContainerSignup>
      <h1>Crie sua Conta</h1>
      <Form>
        <input
          type="text"
          placeholder="Nome"
          value={nameSignup}
          onChange={e => setNameSignup(e.target.value)}
        />
        <input
          type="text"
          placeholder="CPF"
          value={cpfSignup}
          onChange={e => setCpfSignup(e.target.value)}
        />
        <input
          type="email"
          placeholder="Endereço de Email"
          value={emailSignup}
          onChange={e => setEmailSignup(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={passwordSignup}
          onChange={e => setPasswordSignup(e.target.value)}
        />
        <button onClick={nextStep}>Confirmar</button>
      </Form>
      <span>
        Já possui uma Conta? <a href="/login">Entrar</a>
      </span>
    </StyleContainerSignup>
  )
}

export default SignupPartOne
