import styled from 'styled-components';
import { Button } from '../../Components/CustomComponent/Custom.styles';

export const NotFoundContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-evenly;
  flex-direction:column;

  height:100%;

  img{
    height:80%;
    width:50%;
  }

  ${Button}{
    border-radius:15px;
    width:200px;
    height:50px;
    background-color:${props => props.theme.colors.primary};
    color:${props => props.theme.colors.textTertiary};
    box-shadow:0px 0px 3px 0px rgba(50, 50, 50, 0.75);
  }
`;