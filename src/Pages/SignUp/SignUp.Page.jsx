import React, { useState } from 'react';

import { Container } from '../../Global.styles';
import { ContentContainer, FormContainer, BackgroundContainer } from './SignUp.styles';

import CustomButton from '../../Components/CustomComponent/Button';
import CustomInput from '../../Components/CustomComponent/Input';
import Modal from '../../Components/Modal/Modal.component';
import SignUpToModal from './SignUp.ToModal';
import { ReactComponent as Wave } from '../../assets/wave.svg';

import { InputContainer } from '../Landing/Landing.styles';

import api from '../../services/Api';
import { calculateAge, onChange } from '../../utils/utils';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const OnSubmitModal = Modal(SignUpToModal);

const SignUp = () => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [mention, setMention] = useState('');
  const [password, setPassword] = useState('');
  const [date, setDate] = useState('');
  const [toggleModal, setToggleModal] = useState({
    toggle: false,
    message: "",
    error: false
  });

  const state = useSelector(state=>state);

  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();

    const age = calculateAge(date);

    if (age < 0) {
      alert("Por favor, insira uma data de nascimento valida")
      return;
    }

    const checkMention = mention[0] === "@" ?
      mention.split('@')[1] :
      mention;
    const data = { email, name, date, mention: checkMention, password };
    api.post('user/create', data)
      .then(res => {
        setToggleModal({ message: res.data.message, toggle: true, error: false });
      })
      .catch(error => {
        console.log(error.response.data.message)
        setToggleModal({ message: error.response.data.message, toggle: true, error: true });
      });
  }

  const closeModal = () => {
    setToggleModal({ message: toggleModal.message, toggle: false, error: false });
    if (!toggleModal.error) {
      history.push('/');
    }
  }

  return (
    <Container style={{ backgroundColor: "#990d0d", minHeight: "600px", position: 'relative', zIndex: 1 }}>
      <ContentContainer colors={state.sideEffectReducer.theme}>
        {toggleModal.toggle &&
          <OnSubmitModal
            text={toggleModal.message}
            closeModal={closeModal}
          />
        }
        <div style={{
          display: 'flex',
          alignItems: 'center',
          color: "#fff",
          flexWrap: 'wrap',
          marginTop: '10px'
        }}>
          <img
            src={require('../../assets/icon.png')}
            style={{ height: "60px", width: "60px", marginRight: '10px' }}
            alt="icon da page"
          />
          <h3>Criar Conta</h3>
        </div>
        <FormContainer onSubmit={(event) => onSubmit(event)}>
          <InputContainer>
            <CustomInput
              value={email}
              onChange={(event) => onChange(event.target.value, setEmail)}
              placeholder={"Informe um email"}
              type="email"
            />
            <CustomInput
              value={mention}
              onChange={(event) => onChange(event.target.value, setMention)}
              placeholder={"Escolha sua @ para outros usuários te encontrarem"}
              type="text"
            />
            <CustomInput
              value={name}
              onChange={(event) => onChange(event.target.value, setName)}
              placeholder={"Escolha seu nome de exibição"}
              type="name"
            />
            <CustomInput
              value={password}
              onChange={(event) => onChange(event.target.value, setPassword)}
              type="password"
              placeholder={"Senha"}
            />
            <CustomInput
              value={date}
              onChange={(event) => onChange(event.target.value, setDate)}
              type="date"
              placeholder={"Data de nascimento"}
              id="date-inp"
            />
          </InputContainer>
          <CustomButton
            text={"Cadastrar"}
          />
        </FormContainer>
      </ContentContainer>
      <BackgroundContainer>
        <Wave style={{ height: "100%" }} />
      </BackgroundContainer>
    </Container>
  )
}

export default SignUp;
