import React from 'react';
import { AvailableClasses, Form, StyleContainer, StyleImg } from './styles';
import NavBar from '../../components/navbar';
import ImageSignup from '../../assets/Images/pilates.png';
import { useEffect } from 'react';
import { parseCookies } from 'nookies';
import axios from 'axios';
import { useState } from 'react';
import MarkNewClass from '../../components/markNewClass';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/Signup.provider';

const Signup = () => {
  const { idClass } = useContext(AuthContext);
  const [list, setList] = useState([]);
  const [dataFiltro, setDataFiltro] = useState(new Date());
  const { 'reactAuth.id_usuario': tokenId } = parseCookies();

  useEffect(() => {
    axios.get('http://localhost:3001/aula').then(({ data }) => {
      const filter = data.filter(obj => {
        return new Date(obj.data) > new Date(dataFiltro) && obj.vagas > 0;
      });
      setList(filter);
    });
  }, [dataFiltro]);

  const markClass = async (e, id_usuario, id_aula) => {
    e.preventDefault();

    await axios
      .post('http://localhost:3001/have', {
        id_usuario,
        id_aula
      })
      .then(response => {
        console.log(id_aula)
        axios.put(`http://localhost:3001/aula/addAulaVaga/${id_aula}`);
        alert('Aula Marcada!');
        window.location.replace('/dashboard');
      })
      .catch(e => {
        alert('Ocorreu um erro');
      });
  };

  const handleFilterAula = e => {
    e.preventDefault();
    setDataFiltro(new Date());
  };
  return (
    <>
      <NavBar />
      <StyleContainer>
        <StyleImg>
          <h2>Vamos Começar?</h2>
          <img src={ImageSignup} />
          <span>
            <em>Studio Pilates</em>
          </span>
        </StyleImg>
        <Form>
          <h1>Marque sua aula</h1>
          <h3>A partir de . . .</h3>
          <div className="Date">
            <input
              type="date"
              value={dataFiltro}
              onChange={e => setDataFiltro(e.target.value)}
            />
            <button onClick={handleFilterAula}>Hoje</button>
          </div>
          <AvailableClasses>
            {list.map(item => (
              <MarkNewClass
                id_aula={item.id_aula}
                nome={item.nome}
                data={item.data}
                vagas={item.vagas}
                professor={item.professor.nome}
              />
            ))}
          </AvailableClasses>
          <button onClick={e => markClass(e, tokenId, idClass)}>
            MARCAR AULA
          </button>
          <span>
            Deseja Voltar? <a href="/">Menu</a>
          </span>
        </Form>
      </StyleContainer>
    </>
  );
};

export default Signup;
