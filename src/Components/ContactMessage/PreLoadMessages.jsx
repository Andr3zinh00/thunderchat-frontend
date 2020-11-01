import React, { useState } from 'react';
import { TiUserDelete } from 'react-icons/ti';


import { useSelector } from 'react-redux';
import { connection, sendMessageChat, sendSubscribe, sendSubscribeNotifi } from '../../services/Socket';
import { useEffect } from 'react';
import api from '../../services/Api';
import { toast } from 'react-toastify';
import WithSpinner from '../WithSpinner/WithSpinner.component';
import ContactMessageWithSpinner from './ContactMessage.WithSpinner';
import { useHomeContext } from '../../Contexts/HomeContext';

const MessagesWithThunder = WithSpinner(ContactMessageWithSpinner);
const PreLoadMessages = () => {
  const { selectedUser, setMessageLoad } = useHomeContext();
  const { _id } = useSelector(state => state.userReducer)

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(selectedUser)
    if (selectedUser.user) {
      setIsLoading(true);
      api.get(`chat/${_id}/${selectedUser.user._id}`)
        .then(res => {
          const arr = res.data.messages.reverse();
          setMessageLoad(arr);
        })
        .catch(error => {
          console.log(error)
          toast.error("Erro ao carregar conversa");
        })
        .finally(() => setIsLoading(false));
    }
  }, [selectedUser]);

  return (
    <MessagesWithThunder
      isLoading={isLoading}
    />
  )
}

export default PreLoadMessages;
