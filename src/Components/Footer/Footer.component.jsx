import React from 'react'
import { FooterDown } from './Footer.styles';
import { useLocation } from 'react-router';

const Footer = () => {
  const location = useLocation();
  return location.pathname === "/" || location.pathname === "/sign-up" ? null : (
    <FooterDown>
      <h3 style={{ color: "#fff" }}>
        Criado por André Luiz (@Andr3zinh00)
      </h3>
    </FooterDown>
  );
}

export default Footer;
