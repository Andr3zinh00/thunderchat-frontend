import React, { useState, useRef, useEffect } from 'react';

import { HeaderTop, Nav, LogoContainer } from './Header.styles';
import { TiCogOutline, TiUser } from 'react-icons/ti';

import { useOnClickOutside, useDisplayHeaderFooter } from '../../Hooks';

import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import DropDown from '../DropDown/DropDown.component';

import api from '../../services/Api';
import { onNotification, signOut } from '../../redux/User/User.actions';

import NotificationToDropdown from './Notification.ToDropdown';
import MobileToDropdown from './Mobile.ToDropdown';
import IconToDropdown from './Icon.ToDropdown';
import { sendSubscribeNotifi } from '../../services/Socket';
import { reloadContacts } from '../../redux/SideEffects/SideEffects.actions';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const Header = () => {
  const { colors, title } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const { _id, notifications } = useSelector(state => state.userReducer);
  const color = useSelector(state => state.sideEffectReducer);
  const [countNotification, setCountNotification] = useState(0);
  const connected = useSelector(state => state.sideEffectReducer.connected);

  const subscribeCallback = (eventMessage) => {
    const message = JSON.parse(eventMessage.body);
    if (message.type === "INVITE_ACCEPTED")
      dispatch(reloadContacts());

    dispatch(onNotification([{
      ...message,
      isLive: true
    }]));

    setCountNotification(past => past + 1);
  };
  useEffect(() => {
  }, [notifications]);


  useEffect(() => {
    if (connected) {
      sendSubscribeNotifi(subscribeCallback);
    }
  }, [connected]);

  useEffect(() => {
    //só fazer a busca por notificações quando o user estiver logado
    if (_id) {
      api.get(`/notifications/${_id}`)
        .then(res => {

          const { notificationContent, _id } = res.data;
          dispatch(onNotification(notificationContent, _id));
          if (notificationContent.length !== 0) {
            setCountNotification(
              notificationContent.filter(notif => !notif.read).length
            );
          }
        })
        .catch((erro) => {
          if (erro.response.status === 401) {
            dispatch(signOut());
            window.open("/", "_self");
          }
        });
    }

    // eslint-disable-next-line
  }, [_id]);

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
        <img src={require(`../../assets/icon${title}.png`)} alt="logo" />
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
        <TiUser className="hide" onClick={() => history.push('/user')} color={colors.textTertiary} />
        <TiCogOutline onClick={() => history.push('/settings')} className="hide" color={colors.textTertiary} />
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