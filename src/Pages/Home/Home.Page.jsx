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

  const { sideEffectReducer: { theme } } = useSelector(state => state);

  return (
    <Container display={1}>
      <HomeContent colors={theme}>
        <SideContacts />
        <ContactMessage/>
      </HomeContent>
    </Container>
  )
}

export default Home;
