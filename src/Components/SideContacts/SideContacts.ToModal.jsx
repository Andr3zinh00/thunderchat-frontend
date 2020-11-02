import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import CustomButton from '../CustomComponent/Button';
import CustomInput from '../CustomComponent/Input';
import { Wrapper } from '../../Global.styles';
import { IoMdSearch, IoMdClose } from 'react-icons/io';
import { sendRequestChat } from '../../services/Socket';

const SideContactsToModal = ({ text, closeModal, user, contacts }) => {

  const [value, setValue] = useState("");
  useEffect((() => {
    if (!value) {
      return
    }
    if (value[0] !== "@") {
      setValue('@' + value)
    }
  }), [value])
  const onRequestSent = (value) => {
    if (value[0] !== "@") {
      setValue('@' + value);
    }
    console.log(contacts, value)
    //caso o exxxpertinho do usuario tente mandar uma mensagem pra ele mesmo
    if (user.mention === value) {
      toast.error("Você está tentando mandar um pedido para si mesmo?");
      return;
    }
    if(contacts.find(ct => ct.contact.mention === value)){
      toast.error("Você está tentanto madar um pedido para alguem que já é seu contato!");
    }

    sendRequestChat(user, value);

  }

  const handleSubmit = () => {
    onRequestSent(value);
  }

  return (
    <Wrapper className="modal-wrap">
      <Wrapper>
        <IoMdClose onClick={closeModal} className="close-io" />
        <h3>{text}</h3>
        <Wrapper>
          <span><IoMdSearch /></span>
          <CustomInput
            value={value}
            onChange={(event) => {
              setValue(event.target.value)
            }}
            placeholder={"Ex.: @FernandoBeiramar123"}
          />
        </Wrapper>
        <CustomButton text={'Enviar solicitação'} onClick={() => handleSubmit()} />
      </Wrapper>
    </Wrapper>
  )
}

export default SideContactsToModal;