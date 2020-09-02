import React from 'react';
import { useSelector } from 'react-redux';

import CustomButton from '../CustomComponent/Button';

import { ItemContainer } from './NotificationItem.styles';
import api from '../../services/Api';

const NotificationItem = ({ isEmpty, message, genre, sender, id: userId ,...rest }) => {

  const onClick = () => {
    const data = {
      userId,
      contact_id: sender
    }
    api.post("/contacts/add-contact", data)
      .then(res => console.log(res.data))
      .catch(error => {
        console.log(error.response);
      });
  }
  const colors = useSelector(state => state.sideEffectReducer);
  return isEmpty ?
    <ItemContainer colors={colors}>
      <h2>Você não possui nenhuma notificação :(</h2>
    </ItemContainer>
    :
    (
      <ItemContainer colors={colors} >
        <div className="msg">
          <h3>{message}</h3>
        </div>
        {genre === "contact" ?
          <div className="btn-container">
            <CustomButton text={"Aceitar"} onClick={onClick} />
            <CustomButton text={"Recusar"} />
          </div>
          :
          null
        }
      </ItemContainer>
    )
}

export default NotificationItem;
