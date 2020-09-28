import React from 'react';
import { NotSelectedContact } from './ContactMessage.styles'

const NotSelected = () => {
  return (
    <NotSelectedContact>
      <img
        src={require("../../assets/msg-empty.svg")}
        alt="Menina segurando um notebook"
      />
      <div>
        <p>Não seja tímido(a), chame alguém pra conversar</p>
        <p>Garanto que não vai se arrepender :D</p>
      </div>
    </NotSelectedContact>
  )
}

export default NotSelected
