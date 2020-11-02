import React from 'react'
import { FooterDown } from './Footer.styles';
import { useDisplayHeaderFooter } from '../../Hooks';

const Footer = () => {
  const display = useDisplayHeaderFooter();
  return display ? null : (
    <FooterDown>
      <h4 style={{ color: "#fff" }}>
        Criado por André Luiz (@Andr3zinh00) e João Vitor(@joaovitorcl13)
      </h4>
      
    </FooterDown>
  );
}

export default Footer;
