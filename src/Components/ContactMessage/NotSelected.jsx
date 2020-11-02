import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { NotSelectedContact } from './ContactMessage.styles'

const NotSelected = () => {
  const {title} = useContext(ThemeContext);
  return (
    <NotSelectedContact>
      <img
        src={require(`../../assets/msg-empty${title}.svg`)}
        alt="Menina segurando um notebook"
      />
      <div>
      <p>Não seja tímidx, chame alguém pra conversar</p>
      </div>
    </NotSelectedContact >
  )
}

export default NotSelected
