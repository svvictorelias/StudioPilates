import { useState } from 'react'
import { LabelError } from '../../styles/global'
import Style from './styles'

const ResetPassword = () => {
  const [error, setError] = useState('')
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')

  const handleResetPassword = e => {
    e.preventDefault()

    if (!email && !name && !cpf) {
      setError('Preencha seus dados')
      return
    }
    if (!email) {
      setError('Preencha seu email')
      return
    }
    if (!name || !cpf) {
      setError('Preencha seu CPF')
      return
    }
    if (email && name && cpf) {
      setError('')
      return
    }
  }

  return (
    <Style.StyleContainerResetPass>
      <h1>Recupere sua senha</h1>
      <span>Insira os dados abaixo</span>
      <Style.Form onSubmit={handleResetPassword}>
        <input
          type="text"
          onChange={e => setName(e.target.value)}
          placeholder="Nome"
        />
        <input
          type="text"
          onChange={e => setCpf(e.target.value)}
          placeholder="CPF"
        />
        <input
          type="email"
          onChange={e => setEmail(e.target.value)}
          placeholder="Endereço de Email"
        />
        <button>CONFIRMAR</button>
        <LabelError>{error}</LabelError>
      </Style.Form>
      <span>
        Deseja entrar na sua Conta? <a href="/login">Entrar</a>
      </span>
      <span>
        Não tem uma conta? <a href="/signup">Criar Conta</a>
      </span>
    </Style.StyleContainerResetPass>
  )
}

export default ResetPassword
