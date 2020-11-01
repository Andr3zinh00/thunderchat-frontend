import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CustomButton from '../CustomComponent/Button';

import { ItemContainer } from './NotificationItem.styles';
import api from '../../services/Api';
import { removeNotification } from '../../redux/User/User.actions';
import { toast } from 'react-toastify';
import { reloadContacts } from '../../redux/SideEffects/SideEffects.actions';
import { TiDeleteOutline } from 'react-icons/ti'
import { ContainerLoading, ThunderLoading } from '../WithSpinner/WithSpinner.styles';

const NotificationItem = ({ read, isEmpty, idNotification, idMenssage, content, type, from, id: userId, ...rest }) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const onClick = async (justDelete) => {
    const data = {
      userId,
      mention: from
    }
    let resp
    console.log(justDelete, "justdelete")
    if (!justDelete) {
      console.log("passei")
      resp = await api.post("contact/add", data)
        .then(res => {
          console.log(res.data);
          dispatch(reloadContacts());
          return res.data
        })
        .catch(error => {
          console.log(error.response);
        });
    }
    if (resp || justDelete) {
      console.log("passei 2")
      setIsLoading(true);
      api.delete(`/message/notification/${idNotification}/${idMenssage}`)
        .then(res => {
          console.log('removendo', resp, justDelete);
          dispatch(removeNotification(idMenssage));
        })
        .catch((error) => {
          console.log(error.response)
          toast.error("Não foi possivel deletar a notificação no momento!");
        })
        .finally(() => {
          setIsLoading(false);
        })
    }
  }
  const colors = useSelector(state => state.sideEffectReducer);
  return isLoading ?
    <ContainerLoading>
      <ThunderLoading />
    </ContainerLoading>
    :
    isEmpty ?
      <ItemContainer colors={colors}>
        <h3 style={{ textAlign: 'center' }}>Você não possui nenhuma notificação :(</h3>
      </ItemContainer>
      :
      (
        <ItemContainer read={read} colors={colors} >
          <div className="msg">
            <h4>{content}</h4>
            {
              type !== "INVITE" &&
              (<TiDeleteOutline
                onClick={() => onClick(true)}
                size={50}
                style={{ cursor: 'pointer', marginLeft: '3px' }}
              />)
            }
          </div>
          { type === "INVITE" &&
            (<div className="btn-container">
              <CustomButton text={"Aceitar"} onClick={() => onClick()} />
              <CustomButton text={"Recusar"} onClick={() => onClick(true)} />
            </div>)
          }
        </ItemContainer>
      )
}

export default React.memo(NotificationItem);
