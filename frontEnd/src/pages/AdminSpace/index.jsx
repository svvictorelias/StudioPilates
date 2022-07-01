import React, { useEffect } from 'react';
import axios from 'axios'
import ClassCard from '../../components/classCard';
import Navbar from '../../components/navbar';
import { ClassDone, ClassToDo, Container, MarkClass } from './styles';
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import { useState } from 'react';

const AdminSpace = () => {

  const {
    'reactAuth.nivel': tokenNivel,
    'reactAuth.id_usuario': tokenId,
    'reactAuth.token': token
  } = parseCookies();
  const [doneClasses, setDoneClasses] = useState([])
  const [toDoClasses, setToDoClasses] = useState([])
  useEffect(() => {

    axios.get(`http://localhost:3001/have/listAllById/${tokenId}`
    ).then(({ data }) => {
      const doneData = data.filter(dado=>new Date(dado.aula.data)- new Date()<=0)
      const toDoData = data.filter(dado=>new Date(dado.aula.data)- new Date()>0)
      setDoneClasses(doneData)
      setToDoClasses(toDoData)
    });
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <ClassDone>
          <div>
            <h3>Aulas Passadas</h3>
            <span>Veja as aulas concluidas</span>
          </div>
          <ClassCard aulas={doneClasses} texto='#Finalizadas' toDo={false}/>
        </ClassDone>
        <ClassToDo>
          <div>
            <h3>Aulas Cadastradas</h3>
            <span>Veja as aulas programadas</span>
          </div>
          <ClassCard aulas={toDoClasses} texto='#BORAAA'toDo={true}/>
        </ClassToDo>
        <MarkClass>
          <div>
            <h2>Você esta indo muito bem!</h2>
            <span>
              <em>
                "Você precisa fazer aquilo que pensa que não é capaz de fazer"
              </em>
            </span>
            <button>Gerar Frase</button>
          </div>
          <div>
            <h1>Deseja marcar mais uma aula?</h1>
            <span>
              <em>"A constância é o caminho para o sucesso"</em>
            </span>
            <a href="/MarkClass">
              <button>Marcar Aula</button>
            </a>
          </div>
        </MarkClass>
      </Container>
    </>
  );
};

export default AdminSpace;
