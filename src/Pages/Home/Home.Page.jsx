import React, { useState } from 'react';

import { Container } from '../../Global.styles';
import { HomeContent } from './Home.styles';
import ContactMessage from '../../Components/ContactMessage/ContactMessage.component';
import SideContacts from '../../Components/SideContacts/SideContacts.component';


const Home = () => {

  const [toggle, setToggle] = useState(false);
  const onToggle = () => setToggle(!toggle);

  return (
    <Container>
      <HomeContent>
        <SideContacts onToggle={onToggle} toggle={toggle} />
        <ContactMessage toggle={toggle} onToggle={onToggle}/>
      </HomeContent>
    </Container>
  )
}

export default Home;
