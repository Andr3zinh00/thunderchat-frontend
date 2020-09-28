import styled from 'styled-components';

export const ContactMessageContent = styled.div`
  flex:1; 
  display:flex;
  flex-direction:column;

`;

export const ContactHeader = styled.header`
  background:#fff;
  
  box-shadow: 0px 5px 7px 0px rgba(0,0,0,0.45);

  width:100%;
  height:15%;

  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  
  padding:0 10%;

  h3{
    color:#ff1616;
  }
  @media screen and (min-width:767px){
    .sidebar-toggle{
      display:none
    }
  }
`;


export const Message = styled.div`
  background: #ff1616;

  border-radius: 5px 0px 5px 5px;

  max-width:300px;

  word-wrap:break-word;
  white-space:pre-wrap;

  font-family:Lato;
  font-size:1em;
  color:#fff;

  padding:10px;

  &.sent{
    float:right;
  }

  &.received{
    float:left;
    border-radius: 0 5px 5px 5px;
    background:#990d0d;
  }

  :last-child{
    margin-top:5px;
  }
`;

export const ContactMessageMain = styled.main`
  overflow-y:auto;

  flex:1;
  display:flex;
  flex-direction:column-reverse;

  min-height:350px;

  padding:0  5% 2% 5%;

 .received, .sent{
    margin-bottom:5px;
  }


  @media screen and (min-width:767px){
    padding:0  25% 2% 15%;
  }
`;

export const TextMessage = styled.textarea`
  resize:none;
  outline:none;

  white-space: pre-wrap;

  :focus{
    border:1px solid #ff1616;
  }

  flex:4;
  
  height:60%;
  padding:10px;

  ::-webkit-scrollbar {
    width: 0px;  /* Remove a scrollbar */
  }

  font-family:Lato;
  font-size:1em;

  border-radius:20px;
  overflow-y:auto;

`;

export const FooterTextContainer = styled.footer`
  flex:3;

  display:flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;

  min-height:50px;
  max-height:110px;

  padding: 0 3% ; 

  svg{
   color:#ff1616;
   background:transparent;

   border-radius:30%;
   margin-left:5px;
   
  }

  div{
    flex:1;
    display:flex;
    justify-content:center;
    
    width:25%;
  }

  svg:active{
    background:#ff1616;
    color:#fff;
    margin-bottom:4px;
    transition:0.1s ease-in;
  }

`;

export const HeaderProfileInfo = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;

  width:60%;

  @media screen and (min-width:767px){
    width:100%;
  }
`;

export const NotSelectedContact = styled.div`
  height:100%;
  padding:10% 3%;

  display:flex;
  align-items:center;
  justify-content:space-evenly;
  flex-direction:column;

  img{
    flex:2;
    width:100%;
  }

  div{
    flex:0.72;
  }

  p{
    font-size:1.5em;
    font-weight:700;
    text-align:center;
  }

  p:first-child{
    margin:1em 0 2em;
  }


  @media screen and (min-width:767px){
    padding:3%;
    img{
      min-width:300px;
    }
  }

`;


