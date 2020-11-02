import styled from 'styled-components';

export const FooterDown = styled.footer`
  height:10vh;
  min-height:70px;
  color: ${props => props.theme.colors.textTertiary};
  font-size:0.8em;

  background:${props => props.theme.colors.primary};
  
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`;
