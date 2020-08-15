import React, { useState } from 'react';

import {
  ContactMessageContent,
  ContactHeader,
  ContactMessageMain,
  FooterTextContainer,
  TextMessage,
  HeaderProfileInfo,
  Message
} from './ContactMessage.styles';
import { TiGroupOutline } from 'react-icons/ti';
import { IoIosSend } from 'react-icons/io';



const ContactMessage = ({ toggle, onToggle }) => {

  const [messages, setMessages] = useState([]);
  const [textValue, setTextValue] = useState('');

  const handleChange = (value) => {
    setTextValue(value);
  }

  const onClick = () => {
    if (textValue.trim().length !== 0) {
      setMessages([textValue, ...messages]);
      setTextValue('');
    }
  };

  return (
    <ContactMessageContent toggle={toggle}>
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
          <h3>André Luiz</h3>
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
          messages.reverse().map(mes => (
            <div>
              <Message className='sent'>
                {mes}
              </Message>
            </div>
          ))
        }
        <div>
          <Message className='received'>
            blz?
          </Message>
        </div>
        <div>
          <Message className='received'>
            Eae meu bom
          </Message>
        </div>
      </ContactMessageMain>
      <FooterTextContainer>
        {/* Tem q ter limite sim! */}
        <TextMessage
          placeholder="Insira sua mensagem"
          value={textValue}
          maxLength={200}
          onSubmit={onClick}
          onChange={event => handleChange(event.target.value)}
        />
        <IoIosSend onClick={onClick} size={50} />
      </FooterTextContainer>
    </ContactMessageContent>
  )
}

export default ContactMessage;
