import styled from 'styled-components';
import { Button } from '../../Components/CustomComponent/Custom.styles';

export const UserProfileImgContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;

  height:30%;
  border-radius:50% !important;
  color:#000;

  img{
    border-radius:50%;
    box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
  }
`;

export const OtherInfo = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-evenly;

  background:#fff;
  border-radius:15px;
  box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
  height:70%;
  margin-top:20px;
  font-size:0.8em;

  span{
    text-align:left;
  }

  ${Button}{
    background:#ff1616;
    height:45px;
    width:90px;

    color:#fff;
    opacity:1;

    :hover{
      opacity:0.76;
    }
  }
`;

export const UserContent = styled.div`
  height:100%;

  padding:25px 10%;

  font-size:1.3em;
  background:#e5e5e5;

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

