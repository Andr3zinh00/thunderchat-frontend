import styled from 'styled-components';

export const DropDownContainer = styled.div`
  cursor:pointer;
  position:relative;

  .dont-hide{
    display:unset !important;
    color:#ff1616 !important;
  }

`;

export const HiddenElements = styled.div`

  display:${props => props.dropDown ? "flex" : "none"};
  flex-direction:column;
  align-items:center;

  position:absolute;
  top:40px;
  right:0;

  width:${props=>props.isMobile?'50px':'300px'};

  border-radius:${props=>props.isMobile?'unset':'15px'};

  background:#fff;
  border:1px solid #ff1616;

  z-index:555;

`;