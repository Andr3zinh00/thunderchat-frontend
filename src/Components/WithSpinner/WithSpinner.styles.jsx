import styled from 'styled-components';


export const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  height: 100%;
  position: relative; 
`;


export const RotationRing = styled.div`

`;
export const ContainerLoading = styled.div`
display:flex;
align-items:center;
justify-content:center;
height: 100%;
`;

export const ThunderLoading = styled.div`
  
  width: 19px;
  height: 30px;
  background: ${props => props.theme.colors.primary};
  transform: skew(-25deg);
  opacity: 0;
  animation: thunder 0.79s 0s linear infinite;

:before{
  content: '';
  position: absolute;
  top: 11px;
  left: 0px;
  width: 32px;
  height: 21px;
  background: ${props => props.theme.colors.primary};
}

:after{
  content: '';
  position: absolute;
  width: 0; 
  height: 0;
  top: 30px;
  right: -14px;
  border-left: 10px solid transparent;
  border-right: 4px solid transparent;
  border-top: 30px solid ${props => props.theme.colors.primary};
  transform: skew(5deg);
}


@keyframes thunder{
  0%{
    opacity: 0;
    bottom: 110px;
    left: 65px;
  }
  64%{
    opacity: 1;
    bottom: 60px;
    left: 60px;
  }
  65%{
    opacity: 1;
    bottom: 65px;
    left: 61px;
  }
  72%{
    opacity: 1;
    bottom: 65px;
    left: 61px;
  }
  73%{
    opacity: 0;
  }
  100%{
    opacity: 0;
    bottom: 65px;
  }
}   

`;