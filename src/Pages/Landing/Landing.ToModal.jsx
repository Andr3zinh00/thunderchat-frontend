import React from 'react';
import { useSelector } from 'react-redux';

import { LandingToModalContent } from './Landing.styles';
import CustomButton from '../../Components/CustomComponent/Button';

const LandingToModal = ({ text, customStyles, closeModal }) => {

  const colors = useSelector(state => state.sideEffectReducer);
  return (
    <LandingToModalContent colors={colors.theme} customStyles={customStyles}>
      <h3>{text}</h3>
      <CustomButton text={'OK'} onClick={() => closeModal()} />
    </LandingToModalContent>
  )
}

export default LandingToModal;
