import React, { useRef, useState, useEffect } from 'react';

import { useOnClickOutside } from '../../Hooks';

import {
  Aside,
  HeaderContainer,
  IconContainer,
  UserContacts,
  ImgContainer,
  ContactInfoContainer,
  Span
} from './SideContacts.styles';
import { TiArrowRightThick, TiUser, TiUserAdd } from 'react-icons/ti';

import Modal from '../Modal/Modal.component';
import SideContactsToModal from './SideContacts.ToModal';
import { useSelector } from 'react-redux';

import socketio from '../../services/Socket';

const infoStyle = {
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
  width: "130px",
  fontSize: '1em'
}

const SearchModal = Modal(SideContactsToModal);

const SideContacts = ({ onToggle, toggle }) => {

  const [modalToggle, setModalToggle] = useState(false);
  const [modalError, setModalError] = useState({ message: "", error: false });
  const [requestResponse, setRequestResponse] = useState("");

  useEffect(() => {
    console.log(requestResponse);
  }, [requestResponse]);

  useEffect(() => {
    socketio.on('add-contact', (eventRes) => {
      setRequestResponse(eventRes);
      console.log(eventRes, 'merdaaaa')
    });
  }, []);

  const colors = useSelector(state => state.sideEffectReducer);
  const user = useSelector(state => state.userReducer);


  const ref = useRef();
  const modalRef = useRef();

  const onRequestSent = (value) => {
    if (value[0] !== "@") {
      setModalError({ message: "Insira a @!", error: true });
      return;
    }

    //caso o exxxpertinho do usuario tente mandar uma mensagem pra ele mesmo
    //WARNING: FAZER ISSO PARA CASO ELE TENTE MANDAR UM PEDIDO PARA ALGUEM QUE JA
    //CONSTA NA LISTA DE CONTATOS!
    if (user.mention === value) {
      setModalError({
        message:"Você está tentando mandar um pedido para si mesmo?",
        error:true
      })  
      return
    }

    socketio.emit('request', {
      mention: value,
      message: {
        message: "O usuário " + user.mention + " quer ser seu contato.",
        genre: "contact",
        sender: user.mention
      }
    });

  }

  //caso o usuario dê um click fora da sidebar
  useOnClickOutside(ref, () => !toggle || modalToggle ? null : onToggle());
  useOnClickOutside(modalRef, () => setModalToggle(false));

  return (
    <>
      {modalToggle &&
        <SearchModal
          text={`Adicione algum contato. Procure utilizando a @ dele/dela.`}
          nodo={modalRef}
          closeModal={() => setModalToggle(false)}
          error={modalError}
          onRequestSent={onRequestSent}
        />
      }
      <Aside ref={ref} toggle={toggle} colors={colors.theme}>
        <HeaderContainer>
          <TiUserAdd
            style={{ margin: "5px 0 0 10px", alignSelf: 'center', cursor: 'pointer' }}
            size={35}
            color="#fff"
            onClick={() => setModalToggle(true)}
          />
          <IconContainer isToggled={toggle} onClick={() => onToggle()}>
            <TiArrowRightThick
              size={35}
              style={{ marginLeft: '3px', color: "#ff1616", alignSelf: 'center' }}
            />
          </IconContainer>
        </HeaderContainer>
        <UserContacts>
          <ImgContainer>
            <TiUser style={{ flex: 1 }} size={35} color="#ff1616" />
          </ImgContainer>
          <ContactInfoContainer>
            <h3 style={infoStyle}>André Luiz</h3>
            <p style={infoStyle}>
              EAE MAN ME DEVOLVE LA O BAGULHO SE NÃO VOU PEGAR SUA FAMILIA
            </p>
            <Span />
          </ContactInfoContainer>
        </UserContacts>
        <UserContacts>
          <ImgContainer>
            <TiUser style={{ flex: 1 }} size={35} color="#ff1616" />
          </ImgContainer>
          <ContactInfoContainer>
            <h3 style={infoStyle}>André Luiz</h3>
            <p style={infoStyle}>
              EAE MAN ME DEVOLVE LA O BAGULHO SE NÃO VOU PEGAR SUA FAMILIA
            </p>
            <Span />
          </ContactInfoContainer>
        </UserContacts>
        <UserContacts>
          <ImgContainer>
            <TiUser style={{ flex: 1 }} size={35} color="#ff1616" />
          </ImgContainer>
          <ContactInfoContainer>
            <h3 style={infoStyle}>André Luiz</h3>
            <p style={infoStyle}>
              EAE MAN ME DEVOLVE LA O BAGULHO SE NÃO VOU PEGAR SUA FAMILIA
            </p>
            <Span />
          </ContactInfoContainer>
        </UserContacts>
      </Aside>
    </>
  )
}

export default SideContacts;
