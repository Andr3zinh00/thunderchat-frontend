import React, { useState, useRef, useEffect } from 'react';

import { HeaderTop, Nav, LogoContainer, NotificationWrap } from './Header.styles';
import { TiThMenu, TiCogOutline, TiBell, TiUser } from 'react-icons/ti';
import { GiRingingBell } from "react-icons/gi";

import { useOnClickOutside, useDisplayHeaderFooter } from '../../Hooks';

import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import DropDown from '../DropDown/DropDown.component';
import Notifications from '../../Pages/Notifications/Notifications.Page';

import socketio from '../../services/Socket';
import api from '../../services/Api';
import { onNotification } from '../../redux/User/User.actions';


const Header = () => {

  const dispatch = useDispatch();
  const { notifications, id } = useSelector(state => state.userReducer);
  const [countNotification, setCountNotification] = useState(0);

  useEffect(() => {
    console.log(notifications);
    socketio.on('request-sent', (eventRes) => {
      console.log(notifications, "NOTIFICATIONS")
      console.log(eventRes, 'EVENTRES');
      dispatch(onNotification({
        messages: eventRes.data.message,
        isLive: true
      }));
      setCountNotification(pastState => pastState + 1);
    });

    //só fazer a busca por notificações quando algum user estiver logado
    if (id) {

      api.get('/notification/get-notification', {
        params: {
          id: id
        }
      })
        .then(res => {
          const { messages } = res.data.notifications;
          console.log(messages)
          if (messages.length !== 0) {
            dispatch(onNotification(messages));
            setCountNotification(
              messages.filter(notif => !notif?.isChecked).length
            );
          }
        })
        .catch(error => console.log(error.response));
    }

    // eslint-disable-next-line
  }, []);

  const [dropDown, setDropDown] = useState(false);
  const [notificationDropDown, setNotificationDropDown] = useState(false);

  const ref = useRef();
  const notificationRef = useRef();

  useOnClickOutside(ref, () => !dropDown ? null : setDropDown(false));
  useOnClickOutside(notificationRef, () => !notificationDropDown ? null : setNotificationDropDown(false));

  const history = useHistory();
  const display = useDisplayHeaderFooter();

  const handleClick = (isNotification, event) => {
    event.preventDefault();
    if (isNotification) {
      setNotificationDropDown(!notificationDropDown);
      return;
    }
    setDropDown(!dropDown);
  };

  const NotificationIconToHoc = ({ isMobile, onClick }) => {
    const click = (event) => {
      //ja viu as notificações, volta o contador pra zero
      setCountNotification(0);
      if (onClick) {
        onClick();
        return;
      }
      handleClick(true, event);
    }
    return countNotification > 0 ? (
      <GiRingingBell
        className={isMobile ? "dont-hide" : "hide"}
        onClick={(event) => click(event)}
        color="#fff" />

    ) : (
        <TiBell
          className={isMobile ? "dont-hide" : "hide"}
          onClick={(event) => click(event)}
          color="#fff" />
      );
  }

  const MobileIconToHoc = () => {
    return (
      <TiThMenu onClick={(event) => handleClick(false, event)} color={"#fff"} />
    );

  }

  const NotificationToHoc = () => (<NotificationWrap><Notifications /></NotificationWrap>);

  const MobileToHoc = () => {
    return (
      <>
        <NotificationIconToHoc onClick={() => history.push('/notifications')} isMobile={true} />
        <TiUser onClick={() => history.push('/home')} color="#ff1616" />
        <TiCogOutline onClick={() => history.push('/settings')} color="#ff1616" />
      </>)
  };

  const NotificationDropDown = DropDown(NotificationIconToHoc, NotificationToHoc);
  const MobileDropDown = DropDown(MobileIconToHoc, MobileToHoc);

  return display ? null : (
    <HeaderTop>
      <LogoContainer onClick={() => history.push('/home')} style={{ cursor: 'pointer' }}>
        <img src={require('../../assets/icon.png')} alt="logo" />
        <h1>ThunderChat</h1>
      </LogoContainer>
      <Nav>
        <NotificationDropDown
          nodo={notificationRef}
          dropDown={notificationDropDown}
          isMobile={false}
        />
        <TiUser className="hide" onClick={() => history.push('/home')} color="#fff" />
        <TiCogOutline onClick={() => history.push('/settings')} className="hide" color="#fff" />
        <MobileDropDown
          nodo={ref}
          dropDown={dropDown}
          isMobile={true}
        />
      </Nav>
    </HeaderTop>
  )
}

export default Header;
