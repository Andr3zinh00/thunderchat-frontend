import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { UserContent, UserProfileImgContainer, OtherInfo, Input } from './User.styles';
import { Container } from '../../Global.styles';
import CustomButton from '../../Components/CustomComponent/Button';


import { calculateAge, onChange } from '../../utils/utils';
import api from '../../services/Api';
import { toast } from 'react-toastify';

const User = () => {
  const [buttonBol, setButtonBol] = useState(true);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [mention, setMention] = useState('');
  const [birth_date, setBirth_date] = useState('');

  const user = useSelector(state => state.userReducer);

  const onClick = () => {
    if (!buttonBol) {

      const age = calculateAge(birth_date);

      if (age <= 0) {
        toast.error("Por favor, insira uma data de nascimento valida")
        return;
      }

      const data = { email, name, birth_date, mention };
      console.log(data);
      api.put(`user/${user._id}`, data)
        .then(res => {
          toast(res.data.message);
        })
        .catch(error => {
          console.log(error.response.data.message)
          toast.error(error.response.data.message);
        });
    }

    setButtonBol(!buttonBol);
  }
  const onChangeDate = (value) => {

    setBirth_date(value);
  };

  useEffect(() => {
    setName(user.name);
    setMention(user.mention);
    setEmail(user.email);

    var a = new Date(user.birth_date).toLocaleString('en-US', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    }).replace(/\//g, '-');

    console.log(a);
    var dArr = a.split("-");

    a = dArr[2] + "-" + dArr[0] + "-" + dArr[1];
    setBirth_date(a);
  }, [user]);

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

          <span><strong>Nome de exibição</strong></span>
          <Input
            disabled={buttonBol}
            type="text"
            value={name}
            onChange={(event) => onChange(event.target.value, setName)}
          />

          <span><strong>Idade</strong></span>
          <Input
            type="numero"
            value={calculateAge(birth_date)}
            disabled={buttonBol}
          />
          <span><strong>Usuário</strong></span>
          <Input
            type="text"
            value={mention}
            disabled={buttonBol}
            onChange={(event) => onChange(event.target.value, setMention)}
          />
          <span><strong>Email</strong></span>
          <Input
            type="text"
            value={email}
            disabled={buttonBol}
            onChange={(event) => onChange(event.target.value, setEmail)}
          />
          <span><strong>Data de nascimento</strong></span>
          <Input
            onChange={(event) => onChangeDate(event.target.value, setBirth_date)}
            placeholder={"Data de nascimento"}
            type="date"
            value={birth_date}
            disabled={buttonBol}
          />
          <span><strong>Contatos bloqueados</strong></span>
          <Input
            type="text"
            value={0}
            disabled={true}
            onChange={null}
          />
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
