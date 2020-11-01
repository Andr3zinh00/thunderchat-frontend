import styled, { css } from 'styled-components';
import { Button } from '../CustomComponent/Custom.styles';

export const ItemContainer = styled.div`
  min-height:100px;
  padding:5%;
  :hover{
    opacity:0.8;
    background-color:#e5e5e5;
  }

  display:flex;
  align-items:center;
  justify-content:space-between;
  cursor:auto;

  color:${p => p.colors.theme.primaryColor};
  ${p => p.read && css`
  color:#bbb;
    `
  }

  border-bottom:1px solid ${props => props.colors.theme.primaryColor};

  :last-child{
    border:none;
  }

  .msg{
    padding-right:7px;
    flex:60%;
    text-align:left;
    font-size: .9em;
    display:flex;
    align-items:center;
    flex-direction:row;
  

    svg{
      height:45px;
      width:45px;
      color:#990d0d;
    }

    svg:hover{
      color:#ff1616;
    }
  }
  .btn-container{
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:space-evenly;
    flex:40%;
   
   ${Button}{
      width:100%;
      height:40px;
     
      color:${p => p.colors.theme.fontColor};
      background:${p => p.colors.theme.primaryColorDarker};
     
      opacity:1;

      :hover{
        background:${p => p.colors.theme.primaryColor};
      }

      transition: .4s linear;

      :last-child{
        margin-top:5px;
        border:1px solid ${p => p.colors.theme.primaryColor};
        background:${p => p.colors.theme.secondaryColor};
        color:${p => p.colors.theme.primaryColor};
      } 
    }
  }
`;