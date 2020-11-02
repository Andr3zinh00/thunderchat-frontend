import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../../Global.styles';
import { ContentContainer, FormContainer, BackgroundContainer } from './SignUp.styles';

import CustomButton from '../../Components/CustomComponent/Button';
import CustomInput from '../../Components/CustomComponent/Input';
import Modal from '../../Components/Modal/Modal.component';
import SignUpToModal from './SignUp.ToModal';

import { InputContainer } from '../Landing/Landing.styles';

import api from '../../services/Api';
import { calculateAge, onChange } from '../../utils/utils';

import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const OnSubmitModal = Modal(SignUpToModal);
const SignUp = () => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [mention, setMention] = useState('');
  const [password, setPassword] = useState('');
  const [birth_date, setBirth_date] = useState('');
  const [toggleModal, setToggleModal] = useState({
    toggle: false,
    message: "",
    error: false
  });

  const {title, colors} = useContext(ThemeContext);

  useEffect(()=>{
    if(!mention){
      return
    }
    if (mention[0] !== "@"){
      setMention('@' + mention)
    }
  },[mention])

  const state = useSelector(state => state);

  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();

    const age = calculateAge(birth_date);

    if (age < 0) {
      alert("Por favor, insira uma data de nascimento valida")
      return;
    }

    

    const data = { email, name, birth_date, mention, password };
    console.log(data);
    api.post('user/create', data)
      .then(res => {
        setToggleModal({ message:`Bem vindo ao ThunderChat ${mention}!`, toggle: true, error: false });
      })
      .catch(error => {
        console.log(error.response.data.message)
        setToggleModal({ message: "Erro: "+error.response.data.message, toggle: true, error: true });
      });
  }

  const closeModal = () => {
    setToggleModal({ message: toggleModal.message, toggle: false, error: false });
    if (!toggleModal.error) {
      history.push('/');
    }
  }

  return (
    <Container style={{ backgroundColor: colors.secondary, minHeight: "600px", position: 'relative', zIndex: 1 }}>
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
            src={require(`../../assets/icon${title}.png`)}
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
              value={birth_date}
              onChange={(event) => onChange(event.target.value, setBirth_date)}
              type="date"
              placeholder={"Data de nascimento"}
              id="date-inp"
            />
          </InputContainer>
          <CustomButton
            text={"Cadastrar"}
          />
          <Link
              to="/"
              style={{
                marginTop: "-30px",
                fontSize: '1em',
                color: "#fff",
              }}>Fazer login</Link>
        </FormContainer>
      </ContentContainer>
      <BackgroundContainer>
        <img src={require(`../../assets/wave${title}.svg`)} style={{ height: "100%" }} />
      </BackgroundContainer>
    </Container>
  )
}

export default SignUp;
