import styled from 'styled-components';


export const ModalContainer = styled.div`
  height:100vh;
  width:100%;

  position:fixed;
  z-index:9999;

  display:flex;
  justify-content:center;
  align-items:center;

  background: ${props=>props.shouldBlurBackground?"rgba(0,0,0,0.5)":"transparent"};
`;

export const ModalContent = styled.div`
  z-index:9999;

  max-width:100%;
  max-height:100%;

  border-radius:15px;
  overflow:hidden;

  @media screen and (min-width:767px){
    width:400px !important;
  }
`;
