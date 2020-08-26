import React, { useState } from 'react';

import { Container } from '../../Global.styles';
import { ContentContainer, FormContainer, BackgroundContainer } from './SignUp.styles';

import Custom from '../../Components/CustomComponent/Custom.component';
import { ReactComponent as Wave } from '../../assets/wave.svg';

import { InputContainer } from '../Landing/Landing.styles';
import api from '../../services/Api';
import { calculateAge, onChange } from '../../utils/utils';
import { useDispatch } from 'react-redux';

const SignUp = () => {


  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [mention, setMention] = useState('');
  const [password, setPassword] = useState('');
  const [date, setDate] = useState('');


  const onSubmit = (event) => {
    event.preventDefault();

    const age = calculateAge(date);

    if (age < 0) {
      alert("Por favor, insira uma data de nascimento valida")
      return;
    }
    const data = { email, name, mention, age, password };
    api.post('user/register', data)
      .then(res => alert(res.data.message))
      .catch(error => console.log(error.message));
  }

  return (
    <Container style={{ backgroundColor: "#990d0d", minHeight: "600px", position: 'relative', zIndex: 1 }}>
      <ContentContainer>
        <div style={{ display: 'flex', alignItems: 'center', color: "#fff", flexWrap: 'wrap' }}>
          <img
            src={require('../../assets/icon.png')}
            style={{ height: "60px", width: "60px", marginRight: '10px' }}
            alt="icon da page"
          />
          <h3>Sign Up</h3>
        </div>
        <FormContainer onSubmit={(event) => onSubmit(event)}>
          <InputContainer>
            <Custom
              value={email}
              onChange={(event) => onChange(event.target.value, setEmail)}
              placeholder={"Informe um email"}
              type="email"
            />
            <Custom
              value={mention}
              onChange={(event) => onChange(event.target.value, setMention)}
              placeholder={"Escolha sua @ para outros usuários te encontrarem"}
              type="text"
            />
            <Custom
              value={name}
              onChange={(event) => onChange(event.target.value, setName)}
              placeholder={"Escolha seu nome de exibição"}
              type="name"
            />
            <Custom
              value={password}
              onChange={(event) => onChange(event.target.value, setPassword)}
              type="password"
              placeholder={"Escolha uma senha"}
            />
            <Custom
              value={date}
              onChange={(event) => onChange(event.target.value, setDate)}
              type="date"
              placeholder={"Sua data de nascimento:"}
              id="date-inp"
            />
          </InputContainer>
          <Custom
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
