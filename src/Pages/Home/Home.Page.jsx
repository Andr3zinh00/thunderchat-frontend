import React, { useState } from 'react';

import { Container } from '../../Global.styles';
import { HomeContent } from './Home.styles';
import ContactMessage from '../../Components/ContactMessage/ContactMessage.component';
import SideContacts from '../../Components/SideContacts/SideContacts.component';
import { useSelector } from 'react-redux';


const Home = () => {

  const [toggle, setToggle] = useState(false);
  const onToggle = () => setToggle(!toggle);

  const colors = useSelector(state => state.sideEffectReducer);

  return (
    <Container display={1}>
      <HomeContent colors={colors.theme}>
        <SideContacts onToggle={onToggle} toggle={toggle} />
        <ContactMessage toggle={toggle} onToggle={onToggle}/>
      </HomeContent>
    </Container>
  )
}

export default Home;
