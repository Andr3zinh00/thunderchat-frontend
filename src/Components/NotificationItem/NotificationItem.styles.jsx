import styled from 'styled-components';
import { Button } from '../CustomComponent/Custom.styles';

export const ItemContainer = styled.div`
  min-height:100px;

  display:flex;
  align-items:center;
  justify-content:space-between;
  cursor:auto;

  color:${p => p.colors.theme.primaryColor};

  border-bottom:1px solid ${props=>props.colors.theme.primaryColor};

  :last-child{
    border:none;
  }

  .msg{
    padding-right:7px;
    flex:60%;
    text-align:left;
    font-size: .9em;
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