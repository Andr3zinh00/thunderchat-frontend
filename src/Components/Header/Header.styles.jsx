import styled from 'styled-components';

export const HeaderTop = styled.header`
  height:10vh;
  min-height:70px;

  width:100%;

  display:flex;
  align-items:center;
  flex-direction:row;
  justify-content:space-between;
  padding: 0 5%;
  background:#ff1616;

  h1{
    text-shadow: 3px 3px 2px rgba(150, 150, 150, 1);
    font-size:1.7em;
    color:#fff;
  }

  img{
    height:3em;
    width:3em;
  }

  div:first-child{
    display:flex;
    flex-direction:row;
    align-items:center;
  } 
`;

export const DropDown = styled.div`
  cursor:pointer;
  position:relative;
`;

export const HiddenElements = styled.div`
  
  display:${props => props.dropDown ? "flex" : "none"};
  flex-direction:column;
  align-items:center;

  position:absolute;
  top:35px;
  right:0;

  width:50px;

  background:#fff;
  border:1px solid #ff1616;

  z-index:555;

`;

export const Nav = styled.div`
 
 svg{
    height: 35px;
    width: 35px;
  }

  .hide{
   display: none
  } 

  @media screen and (min-width:767px){
    ${DropDown}{
      display:none;
    }

    .hide{
      display:unset;
    }
  }
`;

