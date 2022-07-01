import React from 'react'
import { ContainerCard, Cards, Card, ImgCard } from './styles'
import PilateInit from '../../assets/icons/pilatesInit.png'
import PilateEqui from '../../assets/icons/pilatesEqui.png'
import pilatesPhysioball from '../../assets/icons/pilatesPhysioball.png'

const ModalidadesCard = () => {
  return (
    <ContainerCard>
      <h3>Modalidades</h3>
      <Cards>
        <Card>
          <ImgCard src={PilateInit} alt="" />
          <p>Fundamentos</p>
        </Card>      
        <Card>
          <ImgCard src={PilateEqui} alt="" />
          <p>Alongamentos</p>
        </Card>      
        <Card>
          <ImgCard src={pilatesPhysioball} alt="" />
          <p>Physiobal</p>
        </Card>      
      </Cards>
    </ContainerCard>
  )
}

export default ModalidadesCard
