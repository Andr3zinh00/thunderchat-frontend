import React, { useState, useEffect } from 'react';

import { Container } from '../../Global.styles';
import { HomeContent } from './Home.styles';
import ContactMessage from '../../Components/ContactMessage/ContactMessage.component';
import SideContacts from '../../Components/SideContacts/SideContacts.component';
import { useSelector } from 'react-redux';

import stompClient from '../../services/Socket';


const Home = () => {

  const { sideEffectReducer: { theme } } = useSelector(state => state);

  const [toggle, setToggle] = useState(false);
  const onToggle = () => setToggle(!toggle);
  const [selectedUser, setSelectedUser] = useState({ user: null });
  const [messages, setMessages] = useState([]);

  useEffect(() => {

    function stompCallback() {
      stompClient.subscribe("/user/queue/get-msg", (eventRes) => {
        console.log(eventRes.body, "kikikkikikikik")
        const message = JSON.parse(eventRes.body);
        setMessages(past => [message, ...past]);
      });
    }
    //usar o stompClient.connected ao inves do .active
    console.log("isac", stompClient.connected)
    if (stompClient.connected) {
      stompCallback();
    } else {
      stompClient.connect({}, () => stompCallback());
    }

    // eslint-disable-next-line
  }, []);

  return (
    <Container display={1}>
      <HomeContent colors={theme}>
        <SideContacts
          setSelectedUser={setSelectedUser}
          selectedUser={selectedUser}
          onToggle={onToggle}
          toggle={toggle}
        />
        <ContactMessage
          selectedUser={selectedUser}
          toggle={toggle}
          onToggle={onToggle}
          messages={messages}
          setMessages={setMessages}
        />
      </HomeContent>
    </Container>
  )
}

export default Home;
