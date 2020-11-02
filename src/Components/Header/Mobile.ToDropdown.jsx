import React from 'react';

import IconToDropdown from './Icon.ToDropdown';
import { useHistory } from 'react-router';
import { TiCogOutline,  TiUser } from 'react-icons/ti';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';


const MobileToDropdown = ({ ...rest }) => {
  const history = useHistory();
  const {colors} = useContext(ThemeContext);
  return (
    <>
      <IconToDropdown
        {...rest}
        onClick={() => history.push('/notifications')}
        isMobile
        isNotification
      />
      <TiUser onClick={() => history.push('/user')} color={colors.primary} />
      <TiCogOutline onClick={() => history.push('/settings')} color={colors.primary} />
    </>)
};

export default MobileToDropdown;
