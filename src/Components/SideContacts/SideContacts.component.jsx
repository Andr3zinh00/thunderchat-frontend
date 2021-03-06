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
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

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

  const [isLoadingContacts, setIsLoadingContacts] = useState(true);
  const [contacts, setContacts] = useState([]);
  const { toggle, setToggle, setSelectedUser } = useHomeContext();

  const sideEffects = useSelector(state => state.sideEffectReducer);
  const user = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const { colors } = useContext(ThemeContext)


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
          text={`Adicione algum contato. Procure utilizando a @ dele.`}
          nodo={modalRef}
          closeModal={() => setModalToggle(false)}
          user={user}
          contacts={contacts}
        />
      }
      <Aside ref={ref} toggle={toggle} colors={sideEffects.theme}>
        <HeaderContainer
          style={{ cursor: 'pointer' }}
        >
          <div style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
            onClick={() => setModalToggle(true)}>
            <TiUserAdd
              style={{alignSelf: 'center', cursor: 'pointer' }}
              size={35}
              color={colors.textTertiary}
            />
          </div>
          <IconContainer isToggled={false}>
            <TiChevronRight
              onClick={() => setToggle(!toggle)}
              size={35}
              style={{ marginLeft: '3px', color: colors.primary, alignSelf: 'center' }}
            />
          </IconContainer>
        </HeaderContainer>
        {isLoadingContacts ?
          <ContainerLoading>
            <ThunderLoading />
          </ContainerLoading>
          :
          contacts.length === 0 && !isLoadingContacts ?
            <a style={{ marginTop: '5px', color: colors.disabled, justifyContent: 'center', display: 'flex' }}> Nenhum contato adicionado :( </a> :
            (
              contacts.map(contact => (
                <UserContacts
                  onClick={() =>{setSelectedUser({ user: contact.contact }); setToggle(!toggle) }}
                  key={String(contact.contact._id)}
                >
                  <ImgContainer>
                    <TiUser style={{ flex: 1 }} size={35} color={colors.primary} />
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
