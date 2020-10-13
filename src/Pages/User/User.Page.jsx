import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { UserContent, UserProfileImgContainer, OtherInfo } from './User.styles';
import { Container } from '../../Global.styles';
import CustomButton from '../../Components/CustomComponent/Button';

import {calcAge} from '../../utils/utils';

const User = () => {
  const [buttonBol, setButtonBol] = useState(true);

  const onClick = () => {
    setButtonBol(!buttonBol);
  }
  const user = useSelector(state => state.userReducer);
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
          <span><strong>Nome de exibição: </strong>{user.name}<br /></span>
          <span><strong>Idade:</strong> {calcAge(user.birth_date)}</span>
          <span><strong>Usuário: </strong>{user.mention}</span>
          <span><strong>Email:</strong> {user.email}</span>
          <span><strong>Data de nascimento: </strong> {user.birth_date}</span>
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
