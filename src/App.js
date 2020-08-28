import React, { useEffect } from 'react';
import Routes from './Routes/Routes';
import socketio from './services/Socket';


const App = () => {

  useEffect(() => {

    if (socketio.connected) {
      socketio.emit('chat', {HELLO:'HELOOO'})
    }

    // eslint-ignore-next-line
  }, [])

  return <Routes />;
}

export default App;
