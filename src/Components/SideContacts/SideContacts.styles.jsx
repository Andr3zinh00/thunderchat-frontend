import styled from 'styled-components';

export const Aside = styled.aside`
  height:100%;
  width:70%;

  position:absolute;
  top:0;
  left:0;

  transform: ${({ toggle }) => {
    return toggle ? 'translateX(0)' : 'translateX(-200%)'
  }};
  transition: transform 0.3s ease-in-out;

  box-shadow: 2px 0px 5px 0px rgba(0,0,0,0.54);

  display:flex;
  flex-direction:column;

  background:#fff;

  overflow-y:auto;
  overflow-x: hidden;
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  padding-bottom: 9px;
  
  background:#ff1616;
  
  min-height:90px;
  max-height:90px;

  box-shadow: 2px 0px 5px 0px rgba(0,0,0,1);

`;

export const IconContainer = styled.div`
  width: 50px;
  height:45px;
  border-radius: 50%;
  
  cursor:pointer;

  background-color: #fff;
  
  display: flex;
  align-self: center;
  justify-content:center;
  
  margin-right: 5px;
  margin-top: 5px;
  
  box-shadow: 2px 0px 5px 0px rgba(0,0,0,1);
`;

export const Span = styled.span`
  position: absolute;

  bottom: -15px;
  right: 0;

  width: 100%;

  border-bottom: 1px solid #ff1616;
`;

export const ContactInfoContainer = styled.div`
  position:relative;

  display:flex;
  justify-content:flex-end;
  flex-direction:column;

  width:50%;

  p{
    margin-top:10px;
  }

`;

export const UserContacts = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;

  min-height:100px;
  max-height:110px;
  width:100%;

  cursor:pointer;

  :hover{
    opacity:0.8;
    background-color:#e5e5e5;
  }

  :hover span{
    visibility:hidden;
  }

  :last-child span{
    visibility:hidden;
  }
`;

export const ImgContainer = styled.div`
  border-radius:50%;
  border:1px solid #ff1616;
  
  height:65%;
  width:20%;
  display:flex;
  align-items:center;
`;

