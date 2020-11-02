import React from 'react';
import { ToastContainer } from 'react-toastify';
import ToggleThemeProvider from './Contexts/ToggleThemeContext';
import Routes from './Routes/Routes';


const App = () => {


  return (<>
    <ToggleThemeProvider>
      <Routes />
      <ToastContainer autoClose={4000} style={{ marginTop: '50px' }} />
    </ToggleThemeProvider>
  </>);
}

export default App;
