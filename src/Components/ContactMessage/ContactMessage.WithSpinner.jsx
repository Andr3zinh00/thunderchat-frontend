import React, { useState } from 'react';
import { TiUserDelete } from 'react-icons/ti';

import {
  ContactHeader,
  ContactMessageMain,
  FooterTextContainer,
  TextMessage,
  HeaderProfileInfo,
  Message
} from './ContactMessage.styles';

import { TiGroupOutline } from 'react-icons/ti';
import { IoIosSend } from 'react-icons/io';
// import stompClient from '../../services/Socket';
import { useSelector } from 'react-redux';
import { sendMessageChat, sendSubscribe, sendSubscribeNotifi } from '../../services/Socket';
import { useEffect } from 'react';
import api from '../../services/Api';
import { toast } from 'react-toastify';

const ContactMessageWithSpinner = ({ onToggle, toggle, setSelectedUser, selectedUser, messageLoad,}) => {
  const user = useSelector(state => state.userReducer)
  const { _id, name, mention } = selectedUser.user;

  const initial_state = {
    content: "",
    from: user.mention,
    to: mention,
    type: "CHAT",
    time: null,
  }

  const { connection } = useSelector(state => state.socketReducer);

  const [messageValue, setMessageValue] = useState(initial_state);

  const [messageSend, setMessageSend] = useState([]);

  useEffect(() => {
    api.get(`chat/${user._id}/${_id}`).then(res => {
      const arr = res.data.messages.reverse();
    }
    ).catch(error => {
      console.log(error)
      toast.error("Erro ao carregar conversa");
    })
  }, []);


  useEffect(() => {
    setMessageValue(initial_state);
  }, [messageSend])



  useEffect(() => {
    setMessageValue(initial_state);
  }, [messageSend])

  const handleDeleteUser = () => {
    
    console.log(setSelectedUser);
    //api.delete(`/contact/${user._id}/${_id}`)
    //.then((res)=>{
    // toast.success("Amizade e conversa excluida!")
    //}).catch((error)=>{
    // console.log(error)
    //  toast.error("Erro ao tentar excluir amizade!")
    // })
  }


  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onClick();
    }
  }

  const onClick = () => {
    const data = {
      ...initial_state,
      content: messageValue.content,
      time: new Date(),
    }
    if (messageValue.content.trim().length !== 0) {
      sendMessageChat(data);
      setMessageValue(initial_state);
      setMessageSend(!messageSend);
    }
  };
  return (
    <>
      <ContactHeader>
        <TiGroupOutline
          onClick={onToggle}
          size={45}
          className="sidebar-toggle"
          style={{
            padding: '2px',
            color: '#ff1616',
            borderRadius: "50%",
            border: "1px solid #ff1616",
            visibility: toggle ? 'hidden' : 'unset',
            cursor: 'pointer'
          }}
        />
        <HeaderProfileInfo>
          <img
            style={{ borderRadius: "50%" }}
            alt="Profile pic"
            src={require('../../assets/default.png')}
            height={45}
            width={50}
          />
          <h3>{name}</h3>
        </HeaderProfileInfo>
        <TiUserDelete size={40} color="#ff1616" onClick={handleDeleteUser} />
      </ContactHeader>
      <ContactMessageMain>
        {
          messageLoad.map((mes, index) => (
            <div key={String(index)}>
              <Message className={mes.from === user.mention ? 'sent' : 'received'}>
                {mes.content}
              </Message>
            </div>
          ))
        }
      </ContactMessageMain>
      <FooterTextContainer>
        {/* Tem q ter limite sim! */}
        <TextMessage
          placeholder="Insira sua mensagem"
          value={messageValue.content}
          maxLength={200}
          onKeyDown={handleKeyDown}
          onSubmit={onClick}
          onChange={event =>
            setMessageValue({ ...initial_state, content: event.target.value })
          }
        />
        <div>
          <IoIosSend style={{ cursor: 'pointer' }} onClick={onClick} size={50} />
        </div>
      </FooterTextContainer>
    </>
  )
}

export default ContactMessageWithSpinner
