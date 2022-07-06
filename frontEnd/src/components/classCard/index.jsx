import React, { useRef } from 'react';
import { Buttons, Carousel, Container, Image, Info, Item } from './styles';
import LogoImage from '../../Assets/icons/logo.png';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import axios from 'axios';
import { parseCookies } from 'nookies';

const ClassCard = ({ aulas, texto, toDo }) => {
  function dataAtualFormatada(data) {
    var dataFormat = new Date(data),
      dia = dataFormat.getDate().toString(),
      diaF = dia.length == 1 ? '0' + dia : dia,
      mes = (dataFormat.getMonth() + 1).toString(),
      mesF = mes.length == 1 ? '0' + mes : mes,
      anoF = dataFormat.getFullYear();
    return diaF + '/' + mesF + '/' + anoF;
  }
  const { 'reactAuth.id_usuario': id_usuario,'reactAuth.nivel': tokenNivel } = parseCookies();
  const carousel = useRef(null);
  const handleRightClick = e => {
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
  const handleLeftClick = e => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleDeleteMarkClass = async id_aula => {
    console.log(id_usuario, id_aula);

    await axios
      .delete('http://localhost:3001/have', {
        data: {
          id_usuario,
          id_aula
        }
      })
      .then(response => {
        alert('Aula Desmarcada!');
      })
      .catch(e => {
        alert('Ocorreu um erro');
      });
  };

  return (
    <>
      <Container>
        <Carousel ref={carousel}>
          {aulas?.map(item => {
            const data =tokenNivel=='USER'? item.aula.data:item.data;
            const hora = data.substring(10);
            return (
              <Item key={item.id_aula}>
                <Image>
                  <img src={LogoImage} alt="" />
                </Image>
                <Info>
                  <span className="name">{tokenNivel=='USER'?item.aula.nome:item.nome}</span>
                  <span className={toDo ? 'statusText' : 'statusTextCheck'}>
                    {texto}
                  </span>
                  <span>{dataAtualFormatada(data) + hora}</span>
                  {toDo ? (
                    <button onClick={e => handleDeleteMarkClass(tokenNivel=='USER'?item.aula.id_aula:item.id_aula)}>
                      Cancelar
                    </button>
                  ) : (
                    <button disabled>Finalizado</button>
                  )}
                </Info>
              </Item>
            );
          })}
        </Carousel>
        <Buttons>
          <FaArrowAltCircleLeft onClick={handleLeftClick} />
          <FaArrowAltCircleRight onClick={handleRightClick} />
        </Buttons>
      </Container>
    </>
  );
};

export default ClassCard;
