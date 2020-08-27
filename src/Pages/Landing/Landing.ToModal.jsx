import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { LandingToModalContent } from './Landing.styles';
import { default as Button } from '../../Components/CustomComponent/Custom.component';

const LandingToModal = ({ text, customStyles, error, closeModal }) => {

  const colors = useSelector(state => state.sideEffectReducer);
  const history = useHistory();
  return (
    <LandingToModalContent colors={colors.theme} customStyles={customStyles}>
      <h3>{text}</h3>
      <Button text={'OK'} onClick={() => error ? closeModal() : history.push('/home')} />
    </LandingToModalContent>
  )
}

export default LandingToModal;
