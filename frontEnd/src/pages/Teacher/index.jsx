import React from 'react';
import { StyleContainer, LabelActions } from './styles';
import NavBar from '../../components/navbar';
import RegisterTeacher from '../../components/RegisterTeacher';
import { useState } from 'react';
import ListTeacher from '../../components/ListTeacher';
const Teacher = () => {
  const [container, setContainer] = useState(<RegisterTeacher/>)
  return (
    <>
      <NavBar />
      <StyleContainer>
        <LabelActions>
          <h1>Professores</h1>
          <div className="buttons">
            <button onClick={()=>setContainer(<RegisterTeacher/>)}>Cadastro</button>
            <button onClick={()=>setContainer(<ListTeacher/>)}>Lista</button>
          </div>
        </LabelActions>

        {container}
      </StyleContainer>
    </>
  );
};

export default Teacher;
