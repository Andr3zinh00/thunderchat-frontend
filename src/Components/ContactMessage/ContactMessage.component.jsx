import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { sendSubscribe } from '../../services/Socket';

import { ContactMessageContent } from './ContactMessage.styles';
import NotSelected from './NotSelected';
import PreLoadMessages from './PreLoadMessages';


const ContactMessage = ({ setSelectedUser, selectedUser, toggle, ...rest }) => {

  const user = useSelector(state => state.userReducer)
  const [messageLoad, setMessageLoad] = useState([]);
  const [hasSubscribed, setHasSubscribed] = useState(false);
  // useEffect(() => {
  //   console.log("aslçdkjasidjiasjidojasiodjioasjdiojasiodjoiasjdioajsoidjioasjdoiasnjd")
  //   sendSubscribe(setMessageLoad);
  // }, [connection.client]);
  const getFreshSelectedUser = () => selectedUser;
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
        selectedUser={selectedUser}
        messageLoad={messageLoad}
        setMessageLoad={setMessageLoad}
        {...rest}
      />

    </ContactMessageContent>
  )
}

export default ContactMessage;
