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

  div{
    display:flex;
    flex-direction:row;
    align-items:center;
  } 
`;