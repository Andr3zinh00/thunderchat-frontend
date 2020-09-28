import React, { useState } from 'react';

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
import { onChange } from '../../utils/utils';

import stompClient from '../../services/Socket';
import { useSelector } from 'react-redux';

const ContactMessageWithSpinner = ({ onToggle, toggle, selectedUser, messages, setMessages }) => {
  const user = useSelector(state => state.userReducer)
  const { name, mention } = selectedUser.user;
  console.log(selectedUser, "selectedddd")

  console.log(user);

  const initial_state = {
    content: "",
    from: user.mention,
    to: mention,
    type: "CHAT",
    time: null,
  }

  const [messageValue, setMessageValue] = useState(initial_state);

  //boa sorte pra refazer essa tralheira que eu fiz, joão aiusdhjuiqwhduihquiwduhqwduiuiqdwduiqwdhuiqwdi
  const onClick = () => {
    if (messageValue.content.trim().length !== 0) {
      function stompCallback() {
        const data = {
          ...initial_state,
          content: messageValue.content,
          time: new Date(),
        }
        stompClient.send("/app/send-message", {}, JSON.stringify(data));
        setMessageValue(initial_state);
      }

      if (stompClient.active) {
        stompCallback();
        return;
      }

      stompClient.connect({}, () => stompCallback());
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
          <h3>{name}</h3>
          <img
            style={{ borderRadius: "50%" }}
            alt="Profile pic"
            src={require('../../assets/default.png')}
            height={45}
            width={50}
          />
        </HeaderProfileInfo>
      </ContactHeader>
      <ContactMessageMain>
        {
          messages.reverse().map((mes, index) => (
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
