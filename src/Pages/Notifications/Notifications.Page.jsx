import React from 'react';

import { Container, Wrapper } from '../../Global.styles';
import { MessagesContent } from './Notifications.styles';
import NotificationItem from '../../Components/NotificationItem/NotificationItem.component';

import { useSelector, useDispatch } from 'react-redux';

const Notifications = () => {


  const notifications = useSelector(state => state.userReducer.notifications);
  const _id = useSelector(state => state.userReducer._id);
  const dispatch = useDispatch();

  return (
    <Container>
      <MessagesContent>
        <Wrapper>
          <h2 className="title-wrap">Notificações</h2>
        </Wrapper>
        <Wrapper>
          {notifications ?
            notifications.map((notification, index) =>
              <NotificationItem
                id={notification.type === "INVITE" ? _id : null}
                key={String(index)}
                idMenssage={"5f9889a1012e3713cbfa2f1c"}
                idNotification={_id}
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
