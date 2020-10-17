import React, { useState, useRef, useEffect } from 'react';

import { HeaderTop, Nav, LogoContainer } from './Header.styles';
import { TiCogOutline, TiUser } from 'react-icons/ti';

import { useOnClickOutside, useDisplayHeaderFooter } from '../../Hooks';

import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import DropDown from '../DropDown/DropDown.component';

// import { stompClient } from ';'
import api from '../../services/Api';
import { onNotification } from '../../redux/User/User.actions';

import NotificationToDropdown from './Notification.ToDropdown';
import MobileToDropdown from './Mobile.ToDropdown';
import IconToDropdown from './Icon.ToDropdown';
import { getAuth } from '../../utils/utils';


const Header = () => {

  const dispatch = useDispatch();
  const { _id } = useSelector(state => state.userReducer);
  const { connection } = useSelector(state => state.socketReducer);
  const color = useSelector(state => state.sideEffectReducer);
  const [countNotification, setCountNotification] = useState(0);


  useEffect(() => {
    console.log("entrei", connection)
    if (_id && connection) {
      console.log("ontrei", connection)
      connection.onConnect(() => {
        console.log("MERDAAAAAAAAAAAAAAAAA")
        connection.subscribe("/user/queue/sendback", (eventRes) => {
          const message = JSON.parse(eventRes.body);
          dispatch(onNotification([{
            ...message,
            isLive: true
          }]));
          setCountNotification(pastCount => pastCount + 1);
        });
      })

      // if (stompClient.active) {
      //   stompCallback();
      // } else {
      //   stompClient.connect({}, () => stompCallback());
      // }

    }
    // eslint-disable-next-line
  }, [connection, _id]);

  useEffect(() => {
    //só fazer a busca por notificações quando algum user estiver logado
    //por enquanto desabilitado
    if (_id) {
      api.get(`/notifications/${_id}`, {
        ...getAuth()
      })
        .then(res => {
          const { notifications } = res.data;
          if (notifications.length !== 0) {
            dispatch(onNotification(notifications));
            setCountNotification(
              notifications.filter(notif => !notif?.isChecked).length
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