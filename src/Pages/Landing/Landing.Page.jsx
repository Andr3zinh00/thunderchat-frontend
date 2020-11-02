import React, { useState, useEffect, useRef } from 'react';

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
import CustomInput from '../../Components/CustomComponent/Input';
import CustomButton from '../../Components/CustomComponent/Button';
import { useDispatch } from 'react-redux';
import api from '../../services/Api';
import Modal from '../../Components/Modal/Modal.component';
import LandingToModal from './Landing.ToModal';
import { useOnClickOutside } from '../../Hooks';
import { createUser } from '../../redux/User/User.actions';
import { useHistory } from 'react-router';

import { toast } from 'react-toastify';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';





//hoc do modal
const MessageModal = Modal(LandingToModal);

const Landing = () => {
  const { colors, title } = useContext(ThemeContext);
  const inputStyle = {
    "border-radius": "4px",
    "border": 'none',
    "border-bottom": "solid 1px",
    "border-bottom-color": colors.primary,
  };

  const customModalStyles = {
    backgroundColor: colors.textTertiary,
    width: '250px',
    height: '250px'
  }
  const dispatch = useDispatch();
  const history = useHistory();

  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) {
      return
    }
    if (userId[0] !== "@") {
      setUserId('@' + userId)
    }
  }, [userId])

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username: userId,
      password: userPassword
    }
    api.post('user/login', data).then(res => {
      const { user, token: { jwt } } = res.data;

      dispatch(createUser({ ...user, token: jwt }));

      //caso o usuario ja tenha errado a senha/login alguma outra vez
      if (error) setError(null);

      setShowModal(true)

    })
      .catch(error => {
        toast.error("Falha na autenticação, verifique seus dados");
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
              src={require(`../../assets/icon${title}.png`)}
            />
            <h1
              style={{
                color: colors.textTertiary,
                fontWeight: "700",
                fontSize: "2.3em",
              }}>
              ThunderChat
            </h1>
          </CenterFirst>
        </FirstSide>
        <SecondSide>
          <FormContainer onSubmit={event => onSubmit(event)}>
            <h3 style={{ alignSelf: "center", marginTop: "80px", fontSize: '1.3em', fontWeight: "bold", color: colors.textPrimary }}>Faça login</h3>
            <InputContainer>
              <CustomInput
                value={userId}
                onChange={(event) => onChange(event.target.value, setUserId)}
                customStyle={inputStyle}
                placeholder={"Digite seu @"}
                type="text"
              />
              <CustomInput
                value={userPassword}
                onChange={(event) => onChange(event.target.value, setUserPassword)}
                type="password"
                placeholder={"Senha"}
                customStyle={inputStyle}
              />
            </InputContainer>
            <CustomButton
              text={"Entrar"}
            />
            <Link
              to="/sign-up"
              style={{
                marginTop: "10px",
                fontSize: '1em',
                color: colors.primary,
              }}>Criar conta</Link>
          </FormContainer>
        </SecondSide>
      </LandingContent>
    </Container>
  )
}

export default Landing;
