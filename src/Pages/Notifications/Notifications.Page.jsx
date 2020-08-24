import React from 'react';

import { Container, Wrapper } from '../../Global.styles';
import { MessagesContent } from './Notifications.styles';
import NotificationItem from '../../Components/NotificationItem/NotificationItem.component';

const Notifications = () => {

  return (
    <Container>
      <MessagesContent>
        <Wrapper>
          <h2 className="title-wrap">Notificações</h2>
        </Wrapper>
        <Wrapper>
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
        </Wrapper>
      </MessagesContent>
    </Container>
  )
}

export default Notifications;
