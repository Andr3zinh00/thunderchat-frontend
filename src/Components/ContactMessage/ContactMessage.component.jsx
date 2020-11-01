import React from 'react';
import { useHomeContext } from '../../Contexts/HomeContext';

import { ContactMessageContent } from './ContactMessage.styles';
import PreLoadMessages from './PreLoadMessages';


const ContactMessage = () => {
  const { toggle } = useHomeContext();

  return (
    <ContactMessageContent toggle={toggle}>
      <PreLoadMessages />
    </ContactMessageContent>
  )
}

export default React.memo(ContactMessage);
