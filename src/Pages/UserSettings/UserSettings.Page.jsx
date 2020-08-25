import React, { useState } from 'react';

import { UserSettingsContent, Switch, ThemeSettings, ColorBox } from './UserSettings.styles';
import { Container, Wrapper } from '../../Global.styles';
import { IoIosSettings, IoMdLogOut, IoIosTrash } from 'react-icons/io';
import { useSelector } from 'react-redux';

const color1 = {
  "background-color": "rgb(255,22,22)",
  background: "linear-gradient(45deg, rgba(255,22,22,1) 54%, rgba(255,255,255,1) 54%)"
}

const color2 = {
  "background-color": "rgb(28,0,103)",
  background: "linear-gradient(45deg, rgba(28,0,103,1) 54%, #000 54%)"
}

const UserSettings = () => {

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    console.log(toggle);
    setToggle(!toggle);
  }

  const display = useSelector(state=>state.sideEffectReducer.displayHeaderFooter);


  return (
    <Container display={display?1:0}>
      <UserSettingsContent>
        <header>
          <IoIosSettings size={70} color="#ff1616" />
          <h2>Configurações</h2>
        </header>
        <Wrapper className="wrapper-all">
          <Wrapper className="img-wrapper">
            <img
              alt="Settings"
              src={require('../../assets/undraw_preferences_uuo2.svg')}
            />
          </Wrapper>
          <Wrapper className="settings-wrapper">
            <ThemeSettings labelBackground={!toggle ? "#ff1616" : "rgb(28,0,103)"}>
              <h3>Temas: </h3>
              <div>
                <ColorBox color={color1} />
                <Switch
                  id="toggle-switch"
                  type="checkbox"
                  onChange={handleToggle}
                  checked={toggle}
                />
                <label
                  className="switch-label"
                  htmlFor={`toggle-switch`}
                >
                  <span className="switch-button" />
                </label>
                <ColorBox color={color2} />
              </div>
            </ThemeSettings>
            <Wrapper>
              <Wrapper className="icon-wrapper">
                <IoMdLogOut color="#ff1616" size={40} />
                <h3> Sair. </h3>
              </Wrapper>
              <Wrapper className="icon-wrapper">
                <IoIosTrash color="#ff1616" size={40} />
                <h3> Deletar Conta.</h3>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </UserSettingsContent>
    </Container>
  )
}

export default UserSettings;
