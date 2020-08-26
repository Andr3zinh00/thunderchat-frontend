import React, { useRef } from 'react';

import { ModalContainer, ModalContent } from './Modal.styles';

const Modal = (WrappedComponent) => {
  return ({ shouldBlurBackground, nodo, customStyles, ...rest }) => {

    return (
      <ModalContainer shouldBlurBackground={shouldBlurBackground}>
        <ModalContent ref={nodo} style={customStyles}>
          <WrappedComponent {...rest} />
        </ModalContent>
      </ModalContainer>
    )
  }
}

export default Modal;
