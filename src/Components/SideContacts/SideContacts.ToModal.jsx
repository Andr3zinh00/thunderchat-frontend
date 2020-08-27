import React from 'react';

import Custom from '../CustomComponent/Custom.component';
import { Wrapper } from '../../Global.styles';
import {IoMdSearch} from 'react-icons/io';


const SideContactsToModal = ({ text, closeModal }) => {

  return (
    <Wrapper className="modal-wrap">
      <Wrapper>
        <h3>{text}</h3>
        <Wrapper>
          <span><IoMdSearch /></span>
          <Custom placeholder={"Ex.: @FernandoBeiramar123"}/>
        </Wrapper>
        <Custom text={'OK'} onClick={() => closeModal()} />
      </Wrapper>
    </Wrapper>
  )
}

export default SideContactsToModal;