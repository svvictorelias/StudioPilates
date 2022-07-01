import React, { useState } from 'react';
import { StyleImg, StyleSignup } from './styles';
import ImageSignup from '../../assets/Images/pilates.png';
import SignupPartTwo from '../../components/signupPartTwo';
import SignupPartOne from '../../components/signupPartOne';
import { SignupContext } from '../../Provider/Signup.provider.jsx';
import axios from 'axios';

const Signup = () => {
  const [nameSignup, setNameSignup] = useState('');
  const [cpfSignup, setCpfSignup] = useState('');
  const [emailSignup, setEmailSignup] = useState('');
  const [passwordSignup, setPasswordSignup] = useState('');
  const [birthday, setBirthday] = useState('');
  const [cepSignup, setCepSignup] = useState('');
  const [streetSignup, setStreetSignup] = useState('');
  const [addressNumberSignup, setAddressNumberSignup] = useState('');
  const [neighborhoodSignup, setNeighborhoodSignup] = useState('');
  const [citySignup, setCitySignup] = useState('');
  const [stateAddressSignup, setStateAddressSignup] = useState('');

  const [partOneSignup, setPartOneSignup] = useState(true);
  const handleChangeScreens = e => {
    e.preventDefault();
    setPartOneSignup(!partOneSignup);
  };

  async function registerNewUser() {
    try {
      const responseAxios = await axios.post('http://localhost:3001/usuario', {
        nome: nameSignup,
        cpf: cpfSignup,
        email: emailSignup,
        senha: passwordSignup,
        data_nascimento: birthday,
        cep: cepSignup,
        rua: streetSignup,
        numero: addressNumberSignup,
        bairro: neighborhoodSignup,
        cidade: citySignup,
        estado: stateAddressSignup
      });
      alert('Cadastro Realizado com Sucesso')
      window.location.replace('/login')
      return responseAxios
    } catch (error) {
      alert('Falha ao realizar Cadastro')
    }
  }
  const handleFinish = e => {
    e.preventDefault();
    registerNewUser();
  };
  const handleScreens = () => {
    if (partOneSignup) return <SignupPartOne nextStep={handleChangeScreens} />;
    else
      return (
        <SignupPartTwo nextStep={handleFinish} prevStep={handleChangeScreens} />
      );
  };
  return (
    <SignupContext.Provider
      value={{
        nameSignup,
        setNameSignup,
        cpfSignup,
        setCpfSignup,
        emailSignup,
        setEmailSignup,
        passwordSignup,
        setPasswordSignup,
        birthday,
        setBirthday,
        cepSignup,
        setCepSignup,
        streetSignup,
        setStreetSignup,
        addressNumberSignup,
        setAddressNumberSignup,
        neighborhoodSignup,
        setNeighborhoodSignup,
        citySignup,
        setCitySignup,
        stateAddressSignup,
        setStateAddressSignup
      }}
    >
      <StyleSignup>
        <StyleImg>
          <h2>Vamos Começar?</h2>
          <img src={ImageSignup} />
          <span>
            <em>Studio Pilates</em>
          </span>
        </StyleImg>
        {handleScreens()}
      </StyleSignup>
    </SignupContext.Provider>
  );
};

export default Signup;
