import React from 'react'
import { FooterDown } from './Footer.styles';
import { useSelector } from 'react-redux';

const Footer = () => {
  const display = useSelector(state=>state.sideEffectReducer.displayHeaderFooter);
  return display?(
    <FooterDown>
      <h3 style={{color:"#fff"}}>
        Criado por André Luiz (@Andr3zinh00)
      </h3>
    </FooterDown>
  ):null;
}

export default Footer;
