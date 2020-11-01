import React from 'react';
import { NotSelectedContact } from './ContactMessage.styles'

const NotSelected = () => {
  return (
    <NotSelectedContact>
      <img
        src={require("../../assets/msg-empty.svg")}
        alt="Menina segurando um notebook"
      />
      <div >
      <p>Não seja tímidx, chame alguém pra conversar</p>
      </div>
    </NotSelectedContact >
  )
}

export default NotSelected
