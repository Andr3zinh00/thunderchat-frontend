import React from 'react'
import { FooterDown } from './Footer.styles';
import { useDisplayHeaderFooter } from '../../Hooks';

const Footer = () => {
  const display = useDisplayHeaderFooter();
  return display ? null : (
    <FooterDown>
      <h5 style={{ color: "#fff" }}>
        Criado por André Luiz (@Andr3zinh00) e João Vitor
      </h5>
      
    </FooterDown>
  );
}

export default Footer;
