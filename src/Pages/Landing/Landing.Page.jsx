import React, { useState, useRef, useEffect } from 'react';

import { Container } from "../../Global.styles";
import {
  LandingContent,
  FirstSide,
  SecondSide,
  CenterFirst,
  FormContainer,
  InputContainer
} from "./Landing.styles";

import { onChange } from '../../utils/utils';

import { Link } from 'react-router-dom';
import Custom from '../../Components/CustomComponent/Custom.component';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../services/Api';
import Modal from '../../Components/Modal/Modal.component';
import LandingToModal from './Landing.ToModal';
import { useOnClickOutside } from '../../Hooks';
import { createUser } from '../../redux/User/User.actions';
import { useHistory } from 'react-router';


const inputStyle = {
  border: 'none',
  "border-bottom": "solid 1px",
  "border-bottom-color": "#ff1616",
};

const customModalStyles = {
  backgroundColor: "#fff",
  width: '250px',
  height: '250px'
}


//hoc do modal
const MessageModal = Modal(LandingToModal);

const Landing = () => {

  const dispatch = useDispatch();
  const selector = useSelector(state => state);
  const history = useHistory();

  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(selector)
  }, [showModal])


  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      userId,
      password: userPassword
    }

    api.post('user/login', data)
      .then(res => {
        const user = { ...res.data };

        //seria isso uma gambiarra? acredito que nao...
        const filter = ({ message, ...rest }) => ({ ...rest });

        dispatch(createUser(filter(user)));

        console.log(res)
        // localStorage.setItem("u", JSON.stringify(user));

        //caso o usuario ja tenha errado a senha/login alguma outra vez
        if (error) setError(null);

        setShowModal(true);
      })
      .catch(error => {
        setError(error.response.data.message);
        setShowModal(true);
      });
  }


  const closeModal = () => {
    setShowModal(false);
    if (!error) history.push('/home');
  }

  const ref = useRef();
  useOnClickOutside(ref, () => closeModal());

  return (
    <Container display={0}>
      {showModal &&
        <MessageModal
          shouldBlurBackground={true}
          closeModal={closeModal}
          nodo={ref}
          text={error ?
            error
            :
            "Login feito com sucesso :D"}
          customStyles={customModalStyles}
        />
      }
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
            <h3 style={{ alignSelf: "start", marginTop: "80px", fontSize: '1.3em', fontWeight: 400 }}>Faça login:</h3>
            <InputContainer>
              <Custom
                value={userId}
                onChange={(event) => onChange(event.target.value, setUserId)}
                customStyle={inputStyle}
                placeholder={"Email ou @"}
                type="text"
              />
              <Custom
                value={userPassword}
                onChange={(event) => onChange(event.target.value, setUserPassword)}
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
