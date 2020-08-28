import React, { useState, useEffect } from 'react';

import { Container } from '../../Global.styles';
import { HomeContent } from './Home.styles';
import ContactMessage from '../../Components/ContactMessage/ContactMessage.component';
import SideContacts from '../../Components/SideContacts/SideContacts.component';
import { useSelector } from 'react-redux';
import socketio from '../../services/Socket';


const Home = () => {

  const { sideEffectReducer: { theme }, userReducer } = useSelector(state => state);

  useEffect(() => {
    console.log(userReducer)
    socketio.emit('connected', { mention: userReducer.mention });
  }, []);

  const [toggle, setToggle] = useState(false);
  const onToggle = () => setToggle(!toggle);


  return (
    <Container display={1}>
      <HomeContent colors={theme}>
        <SideContacts onToggle={onToggle} toggle={toggle} />
        <ContactMessage toggle={toggle} onToggle={onToggle} />
      </HomeContent>
    </Container>
  )
}

export default Home;
