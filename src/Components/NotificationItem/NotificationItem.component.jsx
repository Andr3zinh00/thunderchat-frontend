import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CustomButton from '../CustomComponent/Button';

import { ItemContainer } from './NotificationItem.styles';
import api from '../../services/Api';
import { getAuth } from '../../utils/utils';
import { removeNotification } from '../../redux/User/User.actions';
import { toast } from 'react-toastify';

const NotificationItem = ({ read, isEmpty, idNotification, idMenssage, content, type, from, id: userId, ...rest }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    const data = {
      userId,
      mention: from
    }
    api.post("contact/add", data, {
      ...getAuth()
    })
      .then(res => {
        console.log(res.data)
      })
      .catch(error => {
        console.log(error.response);
      });
    api.delete(`/message/notification/${idNotification}/${idMenssage}`)
      .then(res => {
        dispatch(removeNotification(idMenssage))
      })
      .catch((error)=>{
        alert(error)
        toast.error("Andre é gay")
      })
  }
  const colors = useSelector(state => state.sideEffectReducer);
  return isEmpty ?
    <ItemContainer colors={colors}>
      <h2>Você não possui nenhuma notificação :(</h2>
    </ItemContainer>
    :
    (
      <ItemContainer read={read} colors={colors} >
        <div className="msg">
          <h3>{content}</h3>
        </div>
        { type === "INVITE" ?
          (<div className="btn-container">
            <CustomButton text={"Aceitar"} onClick={onClick} />
            <CustomButton text={"Recusar"} />
          </div>)
          :
          null
        }
      </ItemContainer>
    )
}

export default NotificationItem;
