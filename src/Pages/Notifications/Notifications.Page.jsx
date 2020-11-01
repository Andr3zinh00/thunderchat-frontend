import React from 'react';

import { Container, Wrapper } from '../../Global.styles';
import { MessagesContent } from './Notifications.styles';
import NotificationItem from '../../Components/NotificationItem/NotificationItem.component';

import { useSelector, useDispatch } from 'react-redux';

const Notifications = () => {

  const notifications = useSelector(state => state.userReducer.notifications) || [];
  console.log(notifications);
  const idNotification = useSelector(state => state.userReducer.idNotification);
  const _id = useSelector(state => state.userReducer._id);
  const dispatch = useDispatch();
  console.log(notifications, idNotification, "AAAA")
  return (
    <Container>
      <MessagesContent>
        <Wrapper>
          <h2 className="title-wrap">Notificações</h2>
        </Wrapper>
        <Wrapper>
          {notifications[0] ?
            notifications.map((notification, index) =>
              <NotificationItem
                id={notification.type === "INVITE" ? _id : null}
                key={String(index)}
                idMenssage={notification._id}
                idNotification={idNotification}
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
