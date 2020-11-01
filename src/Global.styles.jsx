import styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export const Container = styled.div`
  height:${props=>props.display?"90vh":"100vh"};
  min-height:600px;
 
`;

export const Wrapper = styled.div`
  flex:1;
`;

