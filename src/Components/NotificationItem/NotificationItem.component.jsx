import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CustomButton from '../CustomComponent/Button';

import { ItemContainer } from './NotificationItem.styles';
import api from '../../services/Api';
import { removeNotification } from '../../redux/User/User.actions';
import { toast } from 'react-toastify';
import { reloadContacts } from '../../redux/SideEffects/SideEffects.actions';

const NotificationItem = ({ read, isEmpty, idNotification, idMenssage, content, type, from, id: userId, ...rest }) => {
  const dispatch = useDispatch();

  const onClick = async () => {
    const data = {
      userId,
      mention: from
    }
    const resp = await api.post("contact/add", data)
      .then(res => {
        console.log(res.data);
        dispatch(reloadContacts());
        return res.data
      })
      .catch(error => {
        console.log(error.response);
      });

    if (resp) {
      api.delete(`/message/notification/${idNotification}/${idMenssage}`)
        .then(res => {
          dispatch(removeNotification(idMenssage))
        })
        .catch((error) => {
          console.log(error.response)
          toast.error("Não foi possivel deletar a notificação no momento!")
        })
    }
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
