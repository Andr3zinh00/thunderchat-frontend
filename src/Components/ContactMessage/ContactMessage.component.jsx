import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { sendSubscribe, connection } from '../../services/Socket';
import WithSpinner from '../WithSpinner/WithSpinner.component';

import { ContactMessageContent } from './ContactMessage.styles';
import ContactMessageWithSpinner from './ContactMessage.WithSpinner';
import NotSelected from './NotSelected';


const ContactMessage = ({ selectedUser, toggle, ...rest }) => {
  const MessagesWithSpinner = WithSpinner(
    ContactMessageWithSpinner,
    selectedUser.user ? null : NotSelected);

  const user = useSelector(state => state.userReducer)

  console.log(selectedUser)
  const [messageLoad, setMessageLoad] = useState([]);
  // useEffect(() => {
  //   console.log("aslçdkjasidjiasjidojasiodjioasjdiojasiodjoiasjdioajsoidjioasjdoiasnjd")
  //   sendSubscribe(setMessageLoad);
  // }, [connection.client]);

  return (
    <ContactMessageContent toggle={toggle}>
      <MessagesWithSpinner
        isLoading={!selectedUser.user}
        toggle={toggle}
        selectedUser={selectedUser}
        setMessageLoad={setMessageLoad}
        messageLoad={messageLoad}
        {...rest}
      />
    </ContactMessageContent>
  )
}

export default ContactMessage;
