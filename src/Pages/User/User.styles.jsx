import styled, { css } from 'styled-components';
import { Button } from '../../Components/CustomComponent/Custom.styles';

export const UserProfileImgContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;

  height:30%;
  border-radius:50% !important;
  color:${props => props.theme.colors.textPrimary};

  img{
    border-radius:50%;
    box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.1);
  }
`;

export const Input = styled.input`
      background: transparent;
      text-align: center;
      border: 0;
      border-bottom: 2px solid ${props => props.theme.colors.hoverPrimary} ;
      height: 25px;
      font-size: 16px;
      padding: 0 100px;
      margin: 5px 0 15px;
      
      :focus{
        border-bottom-color:${props => props.theme.colors.primary};
        transition:0.5s;
      }
${(props) => !props.disabled &&
    css`
    color:${props => props.theme.colors.textPrimary}
    border-bottom-color:${props => props.theme.colors.textPrimary};
    transition:0.81s;
     `}
`;

export const OtherInfo = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content: center;

  background:${props => props.theme.colors.backgroundPrimary};
  border-radius:15px;
  box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.1);
  height:70%;
  margin-top:20px;
  font-size:0.8em;

  span{
    color: ${props => props.theme.colors.primary};
    text-align:left;
  }

  ${Button}{
    background:${props => props.theme.colors.primary};
    height:45px;
    width:90px;

    color:${props => props.theme.colors.textTertiary};
    opacity:1;
    
    
    @media screen and (min-width:767px){

      :hover{
        opacity:0.76;
      }

    }
    
  }
`;

export const UserContent = styled.div`
  height:100%;

  padding:25px 10%;

  font-size:1.3em;
  background:${props => props.theme.colors.hoverPrimary};

  display:flex;
  flex-direction:column;

  @media screen and (min-width:767px){
    flex-direction:row;

    ${OtherInfo}{
      width:70%;
      margin-top:unset;
    }
    ${UserProfileImgContainer}{
      width:30%;
    }

    ${OtherInfo}, ${UserProfileImgContainer}{
      height:100%;
    }
  }

`;

