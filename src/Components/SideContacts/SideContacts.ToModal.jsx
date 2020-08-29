import React, { useState } from 'react';

import Custom from '../CustomComponent/Custom.component';
import { Wrapper } from '../../Global.styles';
import { IoMdSearch, IoMdClose } from 'react-icons/io';


const SideContactsToModal = ({ text, closeModal, onRequestSent }) => {

  const [value, setValue] = useState("");

  return (
    <Wrapper className="modal-wrap">
      <Wrapper>
        <IoMdClose onClick={closeModal} className="close-io" />
        <h3>{text}</h3>
        <Wrapper>
          <span><IoMdSearch /></span>
          <Custom
            value={value}
            onChange={(event) => {
              console.log("ahhhh")
              setValue(event.target.value)}}
            placeholder={"Ex.: @FernandoBeiramar123"}
          />
        </Wrapper>
        <Custom text={'Enviar solicitação'} onClick={() => onRequestSent(value)} />
      </Wrapper>
    </Wrapper>
  )
}

export default SideContactsToModal;