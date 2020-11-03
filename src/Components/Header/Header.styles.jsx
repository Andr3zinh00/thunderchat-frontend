import styled from 'styled-components';
import { DropDownContainer } from '../DropDown/DropDown.styles';
import { Container } from '../../Global.styles';

export const LogoContainer = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
`;

export const HeaderTop = styled.header`
  height:60px;
  min-height:60px;

  width:100%;

  display:flex;
  align-items:center;
  flex-direction:row;
  justify-content:space-between;
  padding: 0 5%;
  background:${props => props.theme.colors.primary};

  h1{
    font-size:1.7em;
    color:${props => props.theme.colors.textTertiary};
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
      color:${p => p.theme.colors.primary};
    }
    div{
        background:${p => p.theme.colors.primary};

        border-radius:50%;
        position:absolute;
        bottom:0;
        right:-3px;
        padding:4px;

        h4{
          color:${p => p.theme.colors.secondary};
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
      color:${p => p.theme.colors.secondary} !important;
    }

    .abs{
      svg{
        color:${p => p.theme.colors.secondary} !important;
      }
      div{
          background:${p => p.theme.colors.secondary};
          h4{
            color:${p => p.theme.colors.primary};
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