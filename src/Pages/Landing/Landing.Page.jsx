import React from 'react';

import { Container } from "../../Global.styles";
import {
  LandingContent,
  FirstSide,
  SecondSide,
  CenterFirst,
  FormContainer,
  InputContainer
} from "./Landing.styles";

import { Link } from 'react-router-dom';
import Custom from '../../Components/CustomComponent/Custom.component';


const inputStyle = {
  border: 'none',
  "border-bottom": "solid 1px",
  "border-bottom-color": "#ff1616",
};

const Landing = () => {

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Container>
      <LandingContent>
        <FirstSide>
          <CenterFirst>
            <img
              style={{
                height: '100px',
                width: '100px'
              }}
              alt="Logo do app"
              src={require('../../assets/icon.png')}
            />
            <h1
              style={{
                color: "#fff",
                fontWeight: "700",
                fontSize: "2.3em",
                textShadow: " 2px 2px 0px rgba(150, 150, 150, 1)",
              }}>
              ThunderChat
            </h1>
          </CenterFirst>
        </FirstSide>
        <SecondSide>
          <FormContainer onSubmit={event => onSubmit(event)}>
            <h3 style={{ alignSelf: "start", marginTop: "80px", fontSize: '1.3em', fontWeight:400 }}>Faça login:</h3>
            <InputContainer>
              <Custom
                customStyle={inputStyle}
                placeholder={"Nome de Usuário"}
                type="name"
              />
              <Custom
                type="password"
                placeholder={"Senha"}
                customStyle={inputStyle}
              />
            </InputContainer>
            <Custom
              text={"Entrar"}
            />
            <Link
              to="/sign-up"
              style={{
                marginBottom: "50px",
                fontSize: '1em',
              }}>Criar conta</Link>
          </FormContainer>
        </SecondSide>
      </LandingContent>
    </Container>
  )
}

export default Landing;
