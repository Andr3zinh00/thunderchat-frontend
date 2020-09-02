import React, { useState } from 'react';

import { UserContent, UserProfileImgContainer, OtherInfo } from './User.styles';
import { Container } from '../../Global.styles';

import CustomButton from '../../Components/CustomComponent/Button';

const User = () => {

  const [buttonBol, setButtonBol] = useState(true);

  const onClick = () => {
    setButtonBol(!buttonBol);
  }

  return (
    <Container display={1}>
      <UserContent>
        <UserProfileImgContainer>
          <img
            height={150}
            width={150}
            alt="FOTO DO USUARIO"
            src={require('../../assets/default.png')}
          />
        </UserProfileImgContainer>
        <OtherInfo>
          <span><strong>Nome de exibição:</strong> André Luiz<br /></span>
          <span><strong>Idade:</strong> 20</span>
          <span><strong>Sua @: </strong>@andr3zinh00</span>
          <span><strong>ID: </strong>000000001</span>
          <span><strong>Email:</strong> andrelp1015@gmail.com</span>
          <span><strong>Conta criada em: </strong> 05/08/2020</span>
          <span><strong>Contatos bloqueados: </strong>0</span>
          <div>
            <CustomButton
              onClick={onClick}
              text={buttonBol ? "Editar" : "Salvar"}
            />
          </div>
        </OtherInfo>
      </UserContent>
    </Container>
  )
}

export default User;
