import React from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import CustomButton from '../../Components/CustomComponent/Button';
import { Container } from '../../Global.styles';
import { NotFoundContainer } from './NotFound.styles';

const NotFound = () => {
  const history = useHistory();
  const {title} = useContext(ThemeContext);
  return (
    <Container
      style={{
        overflow: "hidden"
      }}>
      <NotFoundContainer>
        <img src={require(`../../assets/404 Error Page not Found with people connecting a plug-rafiki${title}.svg`)} />
        <CustomButton
          type="button"
          onClick={()=>history.push("/")}
          text="Voltar para home"
        />
      </NotFoundContainer>
    </Container>
  )
}

export default NotFound;
