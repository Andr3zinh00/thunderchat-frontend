import React, { useState, useRef } from 'react'

import { HeaderTop, Nav, LogoContainer, NotificationWrap } from './Header.styles';
import { TiThMenu, TiCogOutline, TiBell, TiUser } from 'react-icons/ti';
import { useOnClickOutside } from '../../Hooks';
import { useHistory } from 'react-router-dom';
import DropDown from '../DropDown/DropDown.component';
import Notifications from '../../Pages/Notifications/Notifications.Page';
import { useSelector } from 'react-redux';

const Header = () => {

  const [dropDown, setDropDown] = useState(false);
  const [notificationDropDown, setNotificationDropDown] = useState(false);

  const display = useSelector(state => state.sideEffectReducer.displayHeaderFooter);

  const ref = useRef();
  const notificationRef = useRef();

  useOnClickOutside(ref, () => !dropDown ? null : setDropDown(false));
  useOnClickOutside(notificationRef, () => !notificationDropDown ? null : setNotificationDropDown(false));

  const history = useHistory();

  const handleClick = (isNotification, event) => {
    event.preventDefault();
    if (isNotification) {
      setNotificationDropDown(!notificationDropDown);
      return;
    }
    setDropDown(!dropDown);
  };

  const NotificationIconToHoc = ({ isMobile, onClick }) => {
    return (
      <TiBell
        className={isMobile ? "dont-hide" : "hide"}
        onClick={(event) => onClick ?
          onClick()
          :
          handleClick(true, event)}
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

  return display ? (
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
  ) : null
}

export default Header;
