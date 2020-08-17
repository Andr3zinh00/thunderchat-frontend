import React from 'react'

import {HeaderTop} from './Header.styles';

const Header = () => {
  return (
    <HeaderTop>
      <div style={{cursor:'pointer'}}>
        <img src={require('../../assets/icon.png')} alt="logo"/>
        <h1>ThunderChat</h1>
      </div>
      
    </HeaderTop>
    )
}

export default Header;
