import React from 'react'
import { Wrapper } from '../../Global.styles';
import { default as Button } from '../../Components/CustomComponent/Custom.component';


const SignUpToModal = ({ text, closeModal }) => {
  return (
    <Wrapper>
      <h3>{text}</h3>
      <Button text="OK" onClick={closeModal} />
    </Wrapper>
  )
}

export default SignUpToModal;
