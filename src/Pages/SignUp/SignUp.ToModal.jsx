import React from 'react'
import { Wrapper } from '../../Global.styles';
import CustomButton from '../../Components/CustomComponent/Button';


const SignUpToModal = ({ text, closeModal }) => {
  return (
    <Wrapper>
      <h3>{text}</h3>
      <CustomButton text="OK" onClick={closeModal} />
    </Wrapper>
  )
}

export default SignUpToModal;
