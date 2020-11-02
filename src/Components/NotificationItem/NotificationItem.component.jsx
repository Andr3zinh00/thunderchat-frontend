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
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const NotificationItem = ({ read, isEmpty, idNotification, idMenssage, content, type, from, id: userId }) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const clickAdd = async () => {
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
    if (resp) onClick();
  }
  const onClick = () => {
    console.log(idNotification, idMenssage, "Message")
    setIsLoading(true);
    api.delete(`/message/notification/${idNotification}/${idMenssage}`)
      .then(res => {
        setIsLoading(false);
        dispatch(removeNotification(idMenssage));
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error.response)
        toast.error("Não foi possivel deletar a notificação no momento!");
      });
  }
  const {colors} = useContext(ThemeContext);
  return isLoading ?
    <ContainerLoading>
      <ThunderLoading />
    </ContainerLoading>
    :
    isEmpty ?
      <ItemContainer colors={colors.primary}>
        <h3 style={{ textAlign: 'center' }}>Você não possui nenhuma notificação :(</h3>
      </ItemContainer>
      :
      (
        <ItemContainer read={read} colors={colors.primary} >
          <div className="msg">
            <h4>{content}</h4>
            {
              type !== "INVITE" &&
              (<TiDeleteOutline
                onClick={onClick}
                size={50}
                style={{ cursor: 'pointer', marginLeft: '3px' }}
              />)
            }
          </div>
          { type === "INVITE" &&
            (<div className="btn-container">
              <CustomButton text={"Aceitar"} onClick={clickAdd} />
              <CustomButton text={"Recusar"} onClick={onClick} />
            </div>)
          }
        </ItemContainer>
      )
}

export default React.memo(NotificationItem);
