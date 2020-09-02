import React from 'react';
import { Button } from './Custom.styles';

const CustomButton = ({ text, ...rest }) => (
  <Button {...rest}>
    {text}
  </Button>
)

export default CustomButton;