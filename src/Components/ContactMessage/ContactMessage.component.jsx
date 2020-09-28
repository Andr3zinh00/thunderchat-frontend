import React from 'react';
import WithSpinner from '../WithSpinner/WithSpinner.component';

import { ContactMessageContent } from './ContactMessage.styles';
import ContactMessageWithSpinner from './ContactMessage.WithSpinner';
import NotSelected from './NotSelected';


const ContactMessage = ({ selectedUser, toggle,...rest }) => {
  const MessagesWithSpinner = WithSpinner(
    ContactMessageWithSpinner,
    selectedUser.user ? null : NotSelected);

    console.log(selectedUser)

  return (
    <ContactMessageContent toggle={toggle}>
      <MessagesWithSpinner
        isLoading={!selectedUser.user}
        toggle={toggle}
        selectedUser={selectedUser}
        {...rest}
      />
    </ContactMessageContent>
  )
}

export default ContactMessage;
