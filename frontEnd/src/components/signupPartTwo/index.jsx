import React, { useContext, useEffect, useState } from 'react';
import { SignupContext } from '../../Provider/Signup.provider';
import { LabelError } from '../../styles/global';
import {
  StreetInput,
  CityInput,
  Actions,
  FormContainer,
  StyleContainerSignup
} from './styles';
import axios from 'axios';

const SignupPartTwo = ({ nextStep, prevStep }) => {
  const [error, setError] = useState('');

  const {
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
  } = useContext(SignupContext);

  const handleCheckCep = () => {
    const cep = cepSignup.replace(/\D/g, '');
    if (cep.length !== 8) {
      setStreetSignup('');
      setNeighborhoodSignup('');
      setCitySignup('');
      setStateAddressSignup('');
      setError('Digite os 8 números do CEP');
      //setHasErrorCep(true)
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => res.json())
      .then(data => {
        if (data.erro) {
          setStreetSignup('');
          setNeighborhoodSignup('');
          setCitySignup('');
          setStateAddressSignup('');
          setError('CEP não encontrado');
          //setHasErrorCep(true)
          return;
        }
        setStreetSignup(data.logradouro);
        setNeighborhoodSignup(data.bairro);
        setCitySignup(data.localidade);
        setStateAddressSignup(data.uf);
        setError('');
        //setHasErrorCep(false)
      });
  };

  useEffect(() => {
    handleCheckCep();
  }, [cepSignup]);

  return (
    <StyleContainerSignup>
      <h1>Finalize seu Cadastro</h1>
      <FormContainer>
        <form>
          <label>
            <span>Data de Nascimento</span>
            <input
              type="date"
              onChange={e => setBirthday(e.target.value)}
              value={birthday}
            />
          </label>
          <label>
            <span>CEP</span>
            <input
              type="text"
              onChange={e => setCepSignup(e.target.value)}
              value={cepSignup}
              name="cepSignup"
              id="cepSignup"
              placeholder="#####-###"
            />
          </label>
          <StreetInput>
            <label>
              <span>Rua</span>
              <input
                type="text"
                name="streetSignup"
                id="streetSignup"
                onChange={e => setStreetSignup(e.target.value)}
                value={streetSignup}
                disabled
              />
            </label>
            <label>
              <span>Número</span>
              <input
                type="number"
                id="addressNumberSignup"
                onChange={e => setAddressNumberSignup(e.target.value)}
                value={addressNumberSignup}
              />
            </label>
          </StreetInput>
          <CityInput>
            <label>
              <span>Bairro</span>
              <input
                type="text"
                name="neighborhoodSignup"
                id="neighborhoodSignup"
                onChange={e => setNeighborhoodSignup(e.target.value)}
                value={neighborhoodSignup}
                disabled
              />
            </label>
            <label>
              <span>Cidade</span>
              <input
                type="text"
                name="citySignup"
                id="citySignup"
                onChange={e => setCitySignup(e.target.value)}
                value={citySignup}
                disabled
              />
            </label>
            <label>
              <span>Estado</span>
              <input
                type="text"
                name="stateAddressSignup"
                id="stateAddressSignup"
                onChange={e => setStateAddressSignup(e.target.value)}
                value={stateAddressSignup}
                disabled
              />
            </label>
          </CityInput>
          <LabelError>{error}</LabelError>
          <Actions>
            <button onClick={prevStep}>Voltar</button>
            <button onClick={nextStep}>Finalizar</button>
          </Actions>
        </form>
      </FormContainer>
      <span>
        Já possui uma Conta? <a href="/login">Entrar</a>
      </span>
    </StyleContainerSignup>
  );
};

export default SignupPartTwo;
