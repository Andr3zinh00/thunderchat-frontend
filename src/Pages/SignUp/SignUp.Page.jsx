import React from 'react';

import { Container } from '../../Global.styles';
import { ContentContainer, FormContainer, BackgroundContainer } from './SignUp.styles';

import Custom from '../../Components/CustomComponent/Custom.component';
import { ReactComponent as Wave } from '../../assets/wave.svg';

import { InputContainer } from '../Landing/Landing.styles';

const SignUp = () => {
  return (
    <Container style={{ backgroundColor: "#990d0d", minHeight: "600px", position: 'relative', zIndex: 1 }}>
      <ContentContainer>
        <div style={{ display: 'flex', alignItems:'center', color: "#fff", flexWrap: 'wrap' }}>
          <img
            src={require('../../assets/icon.png')}
            style={{ height: "60px", width: "60px", marginRight: '10px' }}
            alt="icon da page"
          />
          <h3>Sign Up</h3>
        </div>
        <FormContainer>
          <InputContainer>
            <Custom
              placeholder={"Informe um email"}
              type="email"
            />
            <Custom
              placeholder={"Escolha seu nome de usuário"}
              type="name"
            />
            <Custom
              type="password"
              placeholder={"Escolha uma senha"}
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
