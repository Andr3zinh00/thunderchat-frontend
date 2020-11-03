import React from 'react';
import { useContext } from 'react';
import { TiMessage } from 'react-icons/ti';
import { ThemeContext } from 'styled-components';
import { useHomeContext } from '../../Contexts/HomeContext';
import { NotSelectedContact, OpenSide } from './ContactMessage.styles'

const NotSelected = () => {
  const { toggle, setToggle } = useHomeContext();
  const { title, colors } = useContext(ThemeContext);
  const onToggle = () => setToggle(!toggle);
  return (<>
    <OpenSide onClick={onToggle}>
      <TiMessage
        color={colors.textTertiary}
        size={30}
      />
    </OpenSide>
    <NotSelectedContact>
      <img
        src={require(`../../assets/msg-empty${title}.svg`)}
        alt="Menina segurando um notebook"
      />
      <div>
        <p>Não seja tímidx, chame alguém pra conversar</p>
      </div>
    </NotSelectedContact >
  </>
  )
}

export default NotSelected
