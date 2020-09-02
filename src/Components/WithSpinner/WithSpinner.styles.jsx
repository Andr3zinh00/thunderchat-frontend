import styled from 'styled-components';

export const ThunderLoading = styled.div`

  position: absolute;
  bottom: 100px;
  left: 65px;
  width: 12px;
  height: 12px;
  background: #f9db62;
  transform: skew(-25deg);
  opacity: 0;
  animation: thunder 10s 0s linear infinite;

:before{
  content: '';
  position: absolute;
  top: 11px;
  left: 0px;
  width: 25px;
  height: 8px;
  background: #f9db62;
}

:after{
  content: '';
  position: absolute;
  width: 0; 
  height: 0;
  top: 18px;
  right: -14px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  
  border-top: 20px solid #f9db62;
  transform: skew(5deg);
}


@keyframes thunder{
  0%{
    opacity: 0;
    bottom: 100px;
    left: 65px;
  }
  62%{
    opacity: 0;
    bottom: 100px;
    left: 65px;
  }
  64%{
    opacity: 1;
    bottom: 50px;
    left: 60px;
  }
  65%{
    opacity: 1;
    bottom: 55px;
    left: 61px;
  }
  72%{
    opacity: 1;
    bottom: 55px;
    left: 61px;
  }
  73%{
    opacity: 0;
  }
  100%{
    opacity: 0;
    bottom: 55px;
  }
}   

`;