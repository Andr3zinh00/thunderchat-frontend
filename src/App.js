import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Routes from './Routes/Routes';


const App = () => {

  useEffect(() => {

    // eslint-ignore-next-line
  }, [])

  return (<>
    <Routes />
    <ToastContainer autoClose={4000} style={{marginTop:'50px'}} />
  </>);
}

export default App;
