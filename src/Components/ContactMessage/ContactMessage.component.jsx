import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHomeContext } from '../../Contexts/HomeContext';
import { sendSubscribe, unsub } from '../../services/Socket';

import { ContactMessageContent } from './ContactMessage.styles';
import NotSelected from './NotSelected';
import PreLoadMessages from './PreLoadMessages';


const ContactMessage = () => {
  const { selectedUser, toggle } = useHomeContext();
  const user = useSelector(state => state.userReducer)
  const [messageLoad, setMessageLoad] = useState([]);
  const [hasSubscribed, setHasSubscribed] = useState(false);
  // useEffect(() => {
  //   console.log("aslçdkjasidjiasjidojasiodjioasjdiojasiodjoiasjdioajsoidjioasjdoiasnjd")
  //   sendSubscribe(setMessageLoad);
  // }, [connection.client]);
  useEffect(() => {
    if (selectedUser.user && !hasSubscribed) {
      sendSubscribe((eventRes) => {
        const message = JSON.parse(eventRes.body);
        console.log(message);
        setMessageLoad(past => [message, ...past]);
      });
      setHasSubscribed(true);
    }
  }, [selectedUser]);

  return (
    <ContactMessageContent toggle={toggle}>
      <PreLoadMessages
        messageLoad={messageLoad}
        setMessageLoad={setMessageLoad}
      />

    </ContactMessageContent>
  )
}

export default ContactMessage;
