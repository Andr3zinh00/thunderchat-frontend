import React from 'react';

import { TiThMenu,  TiBell} from 'react-icons/ti';


const IconToDropdown = (
  {
    isNotification,
    countNotification,
    setCountNotification,
    isMobile,
    handleClick,
    onClick
  }) => {
  const click = (event) => {
    //ja viu as notificações, volta o contador pra zero
    setCountNotification(0);
    if (onClick) {
      onClick();
      return;
    }
    handleClick(true, event);
  }
  return !isNotification ? (
    <TiThMenu onClick={(event) => handleClick(false, event)} color={"#fff"} />
  ) :
    (
      countNotification > 0 ? (
        <div
          className={`abs ${isMobile ? "dont-hide" : "hide"}`}
          onClick={(event) => click(event)}
        >
          <TiBell />
          <div>
            <h4>{countNotification}</h4>
          </div>
        </div>
      ) :
        (
          <TiBell
            className={isMobile ? "dont-hide" : "hide"}
            onClick={(event) => click(event)}
          />
        )
    )
}

export default IconToDropdown;
