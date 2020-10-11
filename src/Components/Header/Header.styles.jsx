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
  min-height:60px;

  width:100%;

  display:flex;
  align-items:center;
  flex-direction:row;
  justify-content:space-between;
  padding: 0 5%;
  background:#990d0d;

  h1{
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

  .abs{
    position:relative;
    svg{
      color:${p => p.color.primaryColor};
    }
    div{
        background:${p => p.color.primaryColor};

        border-radius:50%;
        position:absolute;
        bottom:0;
        right:-3px;
        padding:4px;

        h4{
          color:${p => p.color.secondaryColor};
          font-size:0.7em;
          font-weight:700;
        }
    }
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
      color:${p => p.color.secondaryColor} !important;
    }

    .abs{
      svg{
        color:${p => p.color.secondaryColor} !important;
      }
      div{
          background:${p => p.color.secondaryColor};
          h4{
            color:${p => p.color.primaryColor};
          }
      }
  }
}
`;


export const NotificationWrap = styled.div`
    ${Container}{
      height:350px;
    }
    border-top-right-radius: 15px;
    width:100%;
`;