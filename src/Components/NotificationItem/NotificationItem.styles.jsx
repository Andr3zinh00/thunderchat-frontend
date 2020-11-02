import styled, { css } from 'styled-components';
import { Button } from '../CustomComponent/Custom.styles';

export const ItemContainer = styled.div`
  min-height:100px;
  padding:5%;
  :hover{
    opacity:0.8;
    background-color: ${props => props.theme.colors.hoverPrimary};
  }

  display:flex;
  align-items:center;
  justify-content:space-between;
  cursor:auto;

  color:${p => p.theme.colors.primary};
  ${p => p.read && css`
  color:#bbb;
    `
  }

  border-bottom:1px solid ${props => props.theme.colors.primary};

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
      color:${props => props.theme.colors.secondary};
    }

    svg:hover{
      color:${props => props.theme.colors.primary};
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
     
      color:${p => p.theme.colors.textTertiary};
      background:${p => p.theme.colors.primary};
     
      opacity:1;

      :hover{
        background:${p => p.theme.colors.primary};
      }

      transition: .4s linear;

      :last-child{
        margin-top:5px;
        border:1px solid ${p => p.theme.colors.primary};
        background:${p => p.theme.colors.secondary};
        color:${p => p.theme.colors.primary};
      } 
    }
  }
`;