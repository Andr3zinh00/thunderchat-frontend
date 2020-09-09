import React, { useState, useRef, useEffect } from 'react';

import { HeaderTop, Nav, LogoContainer } from './Header.styles';
import { TiCogOutline, TiUser } from 'react-icons/ti';

import { useOnClickOutside, useDisplayHeaderFooter } from '../../Hooks';

import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import DropDown from '../DropDown/DropDown.component';

import stompClient from '../../services/Socket';
import api from '../../services/Api';
import { onNotification } from '../../redux/User/User.actions';

import NotificationToDropdown from './Notification.ToDropdown';
import MobileToDropdown from './Mobile.ToDropdown';
import IconToDropdown from './Icon.ToDropdown';
import { getAuth } from '../../utils/utils';


const Header = () => {

  const dispatch = useDispatch();
  const { notifications, _id } = useSelector(state => state.userReducer);
  const color = useSelector(state => state.sideEffectReducer);
  const [countNotification, setCountNotification] = useState(0);


  useEffect(() => {
    if (_id) {

      function stompCallback() {
        stompClient.subscribe("/user/queue/sendback", (eventRes) => {
          console.log(eventRes)
          console.log("asoidjaiosjdioajsdiojaiosdjioasjdiojasiodjaklsmlkamsxklmaklsdmklamsdkl")
          dispatch(onNotification([{
            ...eventRes,
            isLive: true
          }]));
          setCountNotification(pastCount => pastCount + 1);
        });
      }

      if (stompClient.active) {
        stompCallback();
      } else {
        stompClient.connect({}, () => stompCallback());
      }


      // socketConnect(null, "user/queue/sendback", null, (eventRes) => {
      //   console.log(eventRes)
      //   dispatch(onNotification([{
      //     ...eventRes,
      //     isLive: true
      //   }]));
      //   setCountNotification(pastCount => pastCount + 1);
      // },null);
    }
    // eslint-disable-next-line 
  }, []);

  useEffect(() => {
    //só fazer a busca por notificações quando algum user estiver logado
    //por enquanto desabilitado
    if (false) {
      api.get('/notification/get-notification', {
        params: {
          id: _id
        },
        ...getAuth()
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