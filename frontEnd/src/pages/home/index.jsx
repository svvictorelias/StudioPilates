import React from 'react'
import ImageSlider from '../../components/ImageSlider'
import ModalidadesCard from '../../components/modalidades'
import Navbar from '../../components/navbar'
import { LeftMainPage, MainPage, RightCarrosel } from './styles'
import { SliderData } from '../../components/ImageSlider/SliderData'

const Home = () => {

  return (
    <>
      <Navbar />
      <MainPage>
        <LeftMainPage>
          <h3>Seja muito Bem vindo(a)</h3>
          <h1>Agendamento de aulas rápido e fácil</h1>
          <p>
            Os melhores profissionais pertinho de você!
            <br />
            Basta entrar na sua conta e aproveitar
          </p>
          <ModalidadesCard />
        </LeftMainPage>
        <RightCarrosel>
          <ImageSlider slides={SliderData} />
        </RightCarrosel>
      </MainPage>
    </>
  )
}

export default Home
