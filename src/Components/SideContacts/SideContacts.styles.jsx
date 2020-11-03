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
  box-shadow: 0px 1px 10px 0px rgba(0,0,0,0.3);

  border-right: 1px solid ${props => props.theme.colors.primary};

  display:flex;
  flex-direction:column;

  background: ${props => props.theme.colors.backgroundPrimary};

  overflow-y:auto;
  overflow-x: hidden;


  @media (min-width:767px){
    position:unset;
    

    min-width:315px;
    max-width:25%;

    transform: translateX(0);

    .sidebar-toggle{
      display:none !important;
    }
  }

`;


export const HeaderContainer = styled.header`
margin: 10px;  
display: flex;
  justify-content: space-between;

  background:${props => props.theme.colors.primary};
  border-radius: 10px;

  box-shadow: 0 5px 15px 0px rgba(0,0,0,0.1);

  height:60px;
  :hover{
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.3);
  }

  @media screen and (min-width:767px){
    justify-content:center;
  }

`;

export const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  
  cursor:pointer;

  background-color: ${props => props.theme.colors.backgroundPrimary};
  
  display: flex;
  align-self: center;
  justify-content:center;
  
  margin-right: 5px;
  
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
  
  @media screen and (min-width:767px){
    display: none;
  }
`;

export const Span = styled.span`
  position: absolute;

  bottom: -15px;
  right: 0;

  width: 100%;

  border-bottom: 1px solid ${props => props.theme.colors.primary};
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
  align-items:center;

  min-height:100px;
  max-height:110px;
  width:100%;

  cursor:pointer;

  :hover{
    opacity:0.8;
    background-color: ${props => props.theme.colors.hoverPrimary};
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
  border:1px solid ${props => props.theme.colors.primary};
  margin: 0 10px 0 15px ;
  height:65px;
  width:65px;
  display:flex;
  align-items:center;
`;

