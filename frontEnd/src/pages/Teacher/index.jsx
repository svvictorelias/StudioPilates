import React from 'react';
import { StyleContainer, LabelActions } from './styles';
import NavBar from '../../components/navbar';
import RegisterTeacher from '../../components/RegisterTeacher';

const Teacher = () => {
  return (
    <>
      <NavBar />
      <StyleContainer>
        <LabelActions>
          <h1>Professores</h1>
          <div className="buttons">
            <button>Cadastro</button>
            <button>Lista</button>
          </div>
        </LabelActions>

        <RegisterTeacher />
      </StyleContainer>
    </>
  );
};

export default Teacher;
