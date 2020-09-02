import React from 'react';

import IconToDropdown from './Icon.ToDropdown';
import { useHistory } from 'react-router';
import { TiCogOutline,  TiUser } from 'react-icons/ti';


const MobileToDropdown = ({ ...rest }) => {
  const history = useHistory();
  return (
    <>
      <IconToDropdown
        {...rest}
        onClick={() => history.push('/notifications')}
        isMobile
        isNotification
      />
      <TiUser onClick={() => history.push('/user')} color="#ff1616" />
      <TiCogOutline onClick={() => history.push('/settings')} color="#ff1616" />
    </>)
};

export default MobileToDropdown;
