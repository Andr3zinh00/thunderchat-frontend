import React, { useState, useRef, useEffect, useMemo } from 'react';

import { HeaderTop, Nav, LogoContainer } from './Header.styles';
import { TiCogOutline, TiUser } from 'react-icons/ti';

import { useOnClickOutside, useDisplayHeaderFooter } from '../../Hooks';

import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import DropDown from '../DropDown/DropDown.component';

// import { stompClient } from ';'
import api from '../../services/Api';
import { onNotification, signOut } from '../../redux/User/User.actions';

import NotificationToDropdown from './Notification.ToDropdown';
import MobileToDropdown from './Mobile.ToDropdown';
import IconToDropdown from './Icon.ToDropdown';
import { getAuth } from '../../utils/utils';
import { sendSubscribeNotifi, connection } from '../../services/Socket';


const Header = () => {

  const dispatch = useDispatch();
  const { _id } = useSelector(state => state.userReducer);
  const color = useSelector(state => state.sideEffectReducer);
  const [countNotification, setCountNotification] = useState(0);

  useEffect(() => {
    if (_id) {
      sendSubscribeNotifi((eventMessage) => {
        const message = JSON.parse(eventMessage.body);
        dispatch(onNotification([{
          ...message,
          isLive: true
        }]));
        console.log(message);
      });
    }
  }, [connection.client]);

  useEffect(() => {
    //só fazer a busca por notificações quando o user estiver logado
    if (_id) {
      api.get(`/notifications/${_id}`)
        .then(res => {
          console.log(res.data)
          const { notificationContent, _id } = res.data;
          console.log(res);
          console.log(notificationContent);
          if (notificationContent.length !== 0) {
            dispatch(onNotification(notificationContent, _id));
            setCountNotification(
              notificationContent.filter(notif => !notif.read).length
            );
            console.log(notificationContent.filter(notif => !notif.read).length);
          }
        })
        .catch((erro) => {
          console.log(erro)
          if (erro.response.status === 401) {
            dispatch(signOut());
            window.open("/", "_self");
          }
          console.log(erro.response);
        });
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


  const NotificationDropDown = DropDown(IconToDropdown, NotificationToDropdown);
  const MobileDropDown = DropDown(IconToDropdown, MobileToDropdown);

  return display ? null : (
    <HeaderTop>
      <LogoContainer onClick={() => history.push('/home')} style={{ cursor: 'pointer' }}>
        <img src={require('../../assets/icon.png')} alt="logo" />
        <h1>ThunderChat</h1>
      </LogoContainer>
      <Nav color={color.theme}>
        <NotificationDropDown
          nodo={notificationRef}
          dropDown={notificationDropDown}
          isNotification
          countNotification={countNotification}
          setCountNotification={setCountNotification}
          handleClick={handleClick}
        />
        <TiUser className="hide" onClick={() => history.push('/user')} color="#fff" />
        <TiCogOutline onClick={() => history.push('/settings')} className="hide" color="#fff" />
        <MobileDropDown
          nodo={ref}
          dropDown={dropDown}
          isMobile
          countNotification={countNotification}
          setCountNotification={setCountNotification}
          handleClick={handleClick}
        />
      </Nav>
    </HeaderTop>
  )
}

export default Header;