import styled from 'styled-components';
import { DropDownContainer } from '../DropDown/DropDown.styles';
import { Container } from '../../Global.styles';

export const LogoContainer = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
`;

export const HeaderTop = styled.header`
  height:10vh;
  min-height:70px;

  width:100%;

  display:flex;
  align-items:center;
  flex-direction:row;
  justify-content:space-between;
  padding: 0 5%;
  background:#ff1616;

  h1{
    text-shadow: 3px 3px 2px rgba(150, 150, 150, 1);
    font-size:1.7em;
    color:#fff;
  }

  img{
    height:3em;
    width:3em;
  }
`;

export const Nav = styled.div`
 cursor:pointer;   
 display:flex;

 svg{
    height: 35px;
    width: 35px;
  }

  .hide{
   display: none;
  } 

  @media screen and (min-width:767px){
    ${DropDownContainer}:last-child{
      display:none !important;
    }

    .hide{
      display:unset;
    }
  }
`;


export const NotificationWrap=styled.div`
    ${Container}{
      height:350px;
    }
    border-top-right-radius: 15px;
    width:100%;
`;