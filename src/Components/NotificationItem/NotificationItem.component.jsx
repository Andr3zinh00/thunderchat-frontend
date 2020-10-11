import React from 'react';
import { useSelector } from 'react-redux';

import CustomButton from '../CustomComponent/Button';

import { ItemContainer } from './NotificationItem.styles';
import api from '../../services/Api';
import { getAuth } from '../../utils/utils';

const NotificationItem = ({ isEmpty, content, type, from, id: userId ,...rest }) => {

  const onClick = () => {
    const data = {
      userId,
      mention: from
    }
    api.post("contact/add", data,{
      ...getAuth()
    })
      .then(res => console.log(res.data, "asdlkaskldjlaks"))
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
          <h3>{content}</h3>
        </div>
        {type === "INVITE" ?
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
