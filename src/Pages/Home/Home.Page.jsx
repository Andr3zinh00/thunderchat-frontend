import React, { useState, useEffect } from 'react';

import { Container } from '../../Global.styles';
import { HomeContent } from './Home.styles';
import ContactMessage from '../../Components/ContactMessage/ContactMessage.component';
import SideContacts from '../../Components/SideContacts/SideContacts.component';
import { useSelector } from 'react-redux';
import { sendSubscribe } from '../../services/Socket';
import { useHomeContext } from '../../Contexts/HomeContext';

// import stompClient from '../../services/Socket';


const Home = () => {
  const { setMessageLoad } = useHomeContext();
  const { sideEffectReducer: { theme, connected } } = useSelector(state => state);
  useEffect(() => {
    if (connected) {
      sendSubscribe((eventRes) => {
        const message = JSON.parse(eventRes.body);
        console.log(message);
        setMessageLoad(past => {
          if (window.location.pathname.includes('home')) {
            return [message, ...past];
          }
          return past;
        });
      });
    }
  }, [connected]);

  return (
    <Container display={1}>
      <HomeContent colors={theme}>
        <SideContacts />
        <ContactMessage />
      </HomeContent>
    </Container>
  )
}

export default Home;
