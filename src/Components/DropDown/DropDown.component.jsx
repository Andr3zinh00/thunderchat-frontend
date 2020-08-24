import React from 'react';
import { DropDownContainer, HiddenElements } from './DropDown.styles';

const DropDown = (WrappedIcon, WrappedComponent) => {
  return ({ dropDown, nodo, isMobile }) => {
    return (
      <DropDownContainer ref={nodo}>
        <WrappedIcon isMobile={isMobile} />
        <HiddenElements isMobile={isMobile} dropDown={dropDown}>
          <WrappedComponent />
        </HiddenElements>
      </DropDownContainer>
    )
  }
}

export default DropDown;
