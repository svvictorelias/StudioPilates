import React from 'react'
import { Container, Icons } from './styles'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <Container>
      <p>
        <a href="/">Studio de Pilates | Saude a Mais</a>
      </p>
      <p>
        <em>© - Desenvolvido por Victor Elias</em>
      </p>
      <Icons>
        <a href="https://www.linkedin.com/in/svvictorelias/" target="_blank">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/svvictorelias" target="_blank">
          <FaGithub />
        </a>
      </Icons>
    </Container>
  )
}

export default Footer
