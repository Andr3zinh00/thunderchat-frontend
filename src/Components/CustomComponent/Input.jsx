import React from 'react';
import {Input } from './Custom.styles';

const CustomInput = ({ type, placeholder, ...rest }) => (
  <>
    <Input
      {...rest}
      minLength={type === 'password' ? 6 : undefined}
      type={type} 
      maxLength={35} //mudar isto aqui depois
      placeholder={placeholder}
      required
    />
  </>
)

export default CustomInput;