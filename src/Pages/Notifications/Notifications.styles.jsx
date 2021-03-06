import styled from 'styled-components';
import { Wrapper } from '../../Global.styles';

export const MessagesContent = styled.div`
  display:flex;
  flex-direction:column;
  height:100%;

  ${Wrapper}{
    display:flex;
  }

  ${Wrapper}:first-child{
    justify-content:center;
    align-items:center;
    background:${props => props.theme.colors.primary};
    box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.2);
    cursor:auto;
  }

  ${Wrapper}:not(:first-child){
    flex:4;
    flex-direction:column;
    overflow-y:auto;
    cursor:auto;
  }
  
  .title-wrap{
      padding-bottom:3px;
      font-size:1.5em;
      border-bottom:1px solid ${props => props.theme.colors.textTertiary};
      color:${props => props.theme.colors.textTertiary};
  }

  @media screen and (min-width:767px){
    ${Wrapper}:not(:first-child){
      ::-webkit-scrollbar {
      } 
      ::-webkit-scrollbar-track {
        margin:0 0 9px 0;
      }
      ::-webkit-scrollbar-thumb {
        border-bottom-right-radius: 15px;
        background:rgba(0,0,0,0.1)
      }
      ::-webkit-scrollbar-track {
        background:transparent;
      }
    }
  }
`;