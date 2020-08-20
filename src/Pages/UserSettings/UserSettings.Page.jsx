import React, { useState } from 'react';

import { UserSettingsContent, Switch, ThemeSettings, ColorBox } from './UserSettings.styles';
import { Container } from '../../Global.styles';
import {IoIosSettings} from 'react-icons/io';

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

  return (
    <Container>
      <UserSettingsContent>
        <div>
          <IoIosSettings size={70} />
          <h2>Configurações</h2>
        </div>
        <ThemeSettings labelBackground={!toggle?"#ff1616" : "rgb(28,0,103)"}>
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
            <ColorBox color={color2}/>
          </div>
        </ThemeSettings>
        <div>ahhahaha</div>
      </UserSettingsContent>
    </Container>
  )
}

export default UserSettings;
