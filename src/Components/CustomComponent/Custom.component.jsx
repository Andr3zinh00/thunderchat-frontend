import React from 'react';
import { Button, Input } from './Custom.styles';

const Custom = ({ text, type, placeholder, ...rest }) => {
  return !placeholder ?
    <Button {...rest}>
      {text}
    </Button>
    :
    <>
      <Input minLength={type === 'password' ? 6 : undefined} type={type} maxLength={35} required placeholder={placeholder} {...rest} />
    </>
}

export default Custom;
