import React from 'react';

import { Container, Wrapper } from '../../Global.styles';
import { MessagesContent } from './Notifications.styles';
import NotificationItem from '../../Components/NotificationItem/NotificationItem.component';

import { useSelector, useDispatch } from 'react-redux';

const Notifications = () => {


  const notifications = useSelector(state => state.userReducer.notifications);
  const id = useSelector(state => state.userReducer.id);
  const dispatch = useDispatch();

  return (
    <Container>
      <MessagesContent>
        <Wrapper>
          <h2 className="title-wrap">Notificações</h2>
        </Wrapper>
        <Wrapper>
          {notifications.length > 0 ?
            notifications.map((notification, index) =>
              <NotificationItem
                id={id}
                key={String(notification._id || notification.sender + index)}
                {...notification}
              />
            )
            :
            <NotificationItem isEmpty />
          }
        </Wrapper>
      </MessagesContent>
    </Container>
  )
}

export default Notifications;
