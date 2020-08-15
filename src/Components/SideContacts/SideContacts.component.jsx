import React, { useRef } from 'react';

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

const infoStyle = {
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
  width: "130px",
  fontSize:'1em'
}

const SideContacts = ({ onToggle, toggle }) => {

  const ref = useRef();
  //caso o usuario dê um click fora da sidebar
  useOnClickOutside(ref, () => !toggle ? null : onToggle());

  return (
    <>
      {/* JAMAIS USE SOMENTE O NOME DA VARIAVEL NESSA DESGRAÇA, SE FIZER ISSO VAI COMO TRUE */}
      <Aside ref={ref} toggle={toggle}>
        <HeaderContainer>
          <TiUserAdd
            style={{ margin: "5px 0 0 10px", alignSelf: 'center' }}
            size={35}
            color="#fff"
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
            <Span/>
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
            <Span/>
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
            <Span/>
          </ContactInfoContainer>
        </UserContacts>
      </Aside>
    </>
  )
}

export default SideContacts;
