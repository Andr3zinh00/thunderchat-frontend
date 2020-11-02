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
import { TiChevronRight, TiUser, TiUserAdd } from 'react-icons/ti';

import Modal from '../Modal/Modal.component';
import SideContactsToModal from './SideContacts.ToModal';
import { useDispatch, useSelector } from 'react-redux';

import { } from '../../services/Socket';
import api from '../../services/Api';
import { ContainerLoading, ThunderLoading } from '../WithSpinner/WithSpinner.styles';
import { useHomeContext } from '../../Contexts/HomeContext';
import { reloadContacts } from '../../redux/SideEffects/SideEffects.actions';

const infoStyle = {
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
  width: "130px",
  fontSize: '1em'
}

const SearchModal = Modal(SideContactsToModal);

const SideContacts = () => {

  const [modalToggle, setModalToggle] = useState(false);
  const [modalError, setModalError] = useState({ message: "", error: false });

  const [isLoadingContacts, setIsLoadingContacts] = useState(true);
  const [contacts, setContacts] = useState([]);
  const { toggle, setToggle, setSelectedUser } = useHomeContext();

  const sideEffects = useSelector(state => state.sideEffectReducer);
  const user = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const ref = useRef();
  const modalRef = useRef();
  const loadContacts = (reload) => {
    api.get(`contact-chat/${user._id}`)
      .then(res => {
        if (reload) {
          dispatch(reloadContacts());
        }
        setContacts(res.data.content);
        setIsLoadingContacts(false);
      })
      .catch(error => {
        setIsLoadingContacts(false);
        console.log(error.response)
      });

  };
  useEffect(() => {
    loadContacts();
  }, [user._id]);


  useEffect(() => {
    if (sideEffects.reloadContacts) {
      loadContacts(true);
    }
  }, [sideEffects.reloadContacts]);


  //caso o usuario dê um click fora da sidebar
  useOnClickOutside(ref, () => !toggle || modalToggle ? null : setToggle(!toggle));
  useOnClickOutside(modalRef, () => setModalToggle(false));

  return (
    <>
      {modalToggle &&
        <SearchModal
          text={`Adicione algum contato. Procure utilizando a @ delx.`}
          nodo={modalRef}
          closeModal={() => setModalToggle(false)}
          error={modalError}
          user={user}
          contacts={contacts}
        />
      }
      <Aside ref={ref} toggle={toggle} colors={sideEffects.theme}>
        <HeaderContainer
          style={{ cursor: 'pointer' }}
          onClick={() => setModalToggle(true)}
        >
          <TiUserAdd
            style={{ margin: "5px 0 0 10px", alignSelf: 'center', cursor: 'pointer' }}
            size={35}
            color="#fff"
          />
          <IconContainer isToggled={toggle} onClick={() => setToggle(!toggle)}>
            <TiChevronRight
              size={35}
              style={{ marginLeft: '3px', color: "#ff1616", alignSelf: 'center' }}
            />
          </IconContainer>
        </HeaderContainer>
        {isLoadingContacts ?
          <ContainerLoading>
            <ThunderLoading />
          </ContainerLoading>
          :
          contacts.length === 0 && !isLoadingContacts ?
            <a style={{ marginTop: '5px', color: "#aaa", justifyContent: 'center', display: 'flex' }}> Nenhum contato adicionado :( </a> :
            (
              contacts.map(contact => (
                <UserContacts
                  onClick={() => setSelectedUser({ user: contact.contact })}
                  key={String(contact.contact._id)}
                >
                  <ImgContainer>
                    <TiUser style={{ flex: 1 }} size={35} color="#ff1616" />
                  </ImgContainer>
                  <ContactInfoContainer>
                    <h3 style={infoStyle}>{contact.contact.mention}</h3>
                    <p style={infoStyle}>
                      {contact.lastMsg ? contact.lastMsg.content : ""}
                    </p>
                    <Span />
                  </ContactInfoContainer>
                </UserContacts>
              )))
        }
      </Aside>
    </>
  )
}

export default SideContacts;
