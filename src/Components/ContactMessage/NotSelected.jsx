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
      <p>Não seja tímido(a), chame alguém pra conversar <br></br> Garanto que não vai se arrepender</p>
      </div>
    </NotSelectedContact >
  )
}

export default NotSelected
