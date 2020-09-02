import React from 'react';
import { DropDownContainer, HiddenElements } from './DropDown.styles';

const DropDown = (WrappedIcon, WrappedComponent) => {
  return ({ dropDown, nodo, isMobile, ...rest }) => {
    return (
      <DropDownContainer ref={nodo}>
        <WrappedIcon {...rest} isMobile={isMobile} />
        <HiddenElements isMobile={isMobile} dropDown={dropDown}>
          <WrappedComponent {...rest} />
        </HiddenElements>
      </DropDownContainer>
    )
  }
}

export default DropDown;
