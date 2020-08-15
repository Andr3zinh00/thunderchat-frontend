import styled from "styled-components";
import { InputContainer } from '../Landing/Landing.styles';
import { Button, Input } from "../../Components/CustomComponent/Custom.styles";

export const ContentContainer = styled.div`
  height:100%;
  width:100%;
  min-height:600px;
  /* background-color:#ff7373; */
  
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
  align-items:center;
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
  height:60%;
  min-height:350px;
  width:100%;
  padding:0 5% 0 5%;

  display:flex;
  justify-content:space-between;
  flex-direction:column;
  align-items:center;

  ${InputContainer}{
    justify-content:space-between;
    height:60% ;
    min-height:300px;
  }

  ${Button}{
    align-self:center;
    min-height:56px;
    height: 56px;
    width: 155px;
    border-radius: 20px;
    background: #fff;
    color: #ff1616;
    font-size: 1.3em;
    font-weight:700;
    opacity:1;

    :hover{
      opacity:0.7;
    }

    @media (max-height:1366px){
      margin-top:40px
    }
  }

  ${Input}{
    color:#fff;
    border: none;
    border-bottom: solid 1px #fff;
    background-color:transparent;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #fff;
  }
  
  :-ms-input-placeholder {
    color: #fff;
  }

  :focus{
    border-bottom:2px solid #fff;
    transition:1s;
  }

  }
`;