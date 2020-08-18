import React, { useState, useRef } from 'react'

import { HeaderTop, Nav, DropDown, HiddenElements } from './Header.styles';
import { TiThMenu, TiCogOutline, TiBell, TiUser } from 'react-icons/ti';
import { useOnClickOutside } from '../../Hooks';
import { useHistory } from 'react-router-dom';

const Header = () => {

  const [dropDown, setDropDown] = useState(false);
  const history = useHistory();

  const handleClick = () => {
    setDropDown(!dropDown);
  };

  const ref = useRef();
  useOnClickOutside(ref, () => !dropDown ? null : setDropDown(false));

  return (
    <HeaderTop>
      <div onClick={() => history.push('/home')} style={{ cursor: 'pointer' }}>
        <img src={require('../../assets/icon.png')} alt="logo" />
        <h1>ThunderChat</h1>
      </div>

      <Nav>
        <TiBell className="hide" onClick={() => history.push('/sign-up')} color="#fff" />
        <TiUser className="hide" onClick={() => history.push('/home')} color="#fff" />
        <TiCogOutline className="hide" color="#fff" />
        <DropDown ref={ref} >
          <TiThMenu onClick={handleClick} color="#fff" />
          <HiddenElements dropDown={dropDown}>
            <TiBell onClick={() => history.push('/sign-up')} color="#ff1616" />
            <TiUser onClick={() => history.push('/home')} color="#ff1616" />
            <TiCogOutline color="#ff1616" />
          </HiddenElements>
        </DropDown>
      </Nav>


    </HeaderTop>
  )
}

export default Header;
