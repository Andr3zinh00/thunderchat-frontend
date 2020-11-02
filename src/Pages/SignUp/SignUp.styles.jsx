import styled from "styled-components";
import { InputContainer } from '../Landing/Landing.styles';
import { Button, Input } from "../../Components/CustomComponent/Custom.styles";
import { Wrapper } from "../../Global.styles";

export const ContentContainer = styled.div`
  height:100%;
  width:100%;
  min-height:600px;
  
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
  align-items:center;

  ${Wrapper}{
    height:300px;
    width:75vw;

    border-radius:25px;
    text-align:center;
    padding:0 20px;

    display:flex;
    justify-content:space-evenly;
    flex-direction:column;
    align-items:center;

    background:${props => props.theme.colors.secondary};
    color:${props => props.theme.colors.primary};
    box-shadow: 0 0px 5px 0px rgba(0,0,0,1);

    ${Button}{
      width:45%;
      height:35px;
      border-radius:14px;
      font-weight:700;
      font-size:1em;
      background-color:${props => props.theme.colors.primary};
      color:${props => props.theme.colors.textPrimary};
    }
    
  }

  @media screen and (min-width:767px){
    ${Wrapper}{
        width:400px;
    }
  }
`;

export const BackgroundContainer = styled.section`
 position:absolute;
 bottom:0;
 left:0; 
 height:500px;
 width:100%;
 overflow:hidden;
 z-index:-1;
`;

export const FormContainer = styled.form`
  height:90%;
  min-height:350px;
  width:100%;
  padding:0 5% 0 5%;

  display:flex;
  justify-content:space-around;
  flex-direction:column;
  align-items:center;

  ${InputContainer}{
    justify-content:space-around;
    height:70%;
    min-height:300px;
  }

  ${Button}{
    align-self:center;
    min-height:56px;
    height: 56px;
    width: 155px;
    border-radius: 20px;
    background: ${props => props.theme.colors.textTertiary};
    color: ${props => props.theme.colors.primary};
    font-size: 1.3em;
    font-weight:700;
    opacity:1;

    :hover{
      opacity:0.7;
    }
  }

  ${Input}{
    color:${props => props.theme.colors.textTertiary};
    border: none;
    border-bottom: solid 1px ${props => props.theme.colors.textTertiary};
    background-color:transparent;
    opacity:0.75;

    ::placeholder{
      color: ${props => props.theme.colors.textTertiary};
    }
  
    :focus{
      opacity:1;
      transition:1s;
    }
  }

  #date-inp:before{
    content: "Nascimento:" !important;
    margin-right:3px;
  }

  #date-inp{
    text-align: right;
    cursor:text;
  }

  @media screen and (min-width:767px){
    #date-inp:before{
      color: lightgrey;
      content: attr(placeholder) !important;
      margin-right: 0.5em;
    }
  }

`;