import React from 'react';
import { useSelector } from 'react-redux';

import { LandingToModalContent } from './Landing.styles';

const LandingToModal = ({ text, customStyles }) => {

  const colors = useSelector(state => state.sideEffectReducer);

  return (
    <LandingToModalContent colors={colors.theme} customStyles={customStyles}>
      <h3>{text}</h3>
    </LandingToModalContent>
  )
}

export default LandingToModal
