import styled from 'styled-components';
import { Button } from '../../Components/CustomComponent/Custom.styles';

export const LandingContent = styled.div`
  height:100%;
  display:flex;
  align-items:center;
  flex-direction:column;
  min-height:400px;
  @media (min-width:768px) {
    flex-direction:row;
  }
`;

export const LandingToModalContent = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  justify-content:space-evenly;

  padding:0 10px;

  text-align:center;
  height:100%;
  color:${props=>props.colors.primaryColor};
  font-size:1.1em;

  ${Button}{
    color:${props=>props.colors.secondaryColor};
    background:${props=>props.colors.primaryColor};
  
    height:45px;
    width:120px;
  
    font-size:0.7em;
  }
`;

export const FirstSide = styled.div`
  flex:1;
  width:100%;
  height:100%;
  min-height:350px;
  background: #ff1616;
  background: linear-gradient(133deg, #000000,#ff1616);
  background-size: 400% 400%;

  -webkit-box-shadow: inset 0px 0px 203px 78px rgba(0,0,0,0.14);
  -moz-box-shadow: inset 0px 0px 203px 78px rgba(0,0,0,0.14);
  box-shadow: inset 0px 0px 203px 78px rgba(0,0,0,0.14);
  
  -webkit-animation: moving 15s ease infinite;
  -moz-animation: moving 15s ease infinite;
  animation: moving 15s ease infinite; 

  @-webkit-keyframes moving {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@-moz-keyframes moving {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@-o-keyframes moving {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@keyframes moving {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}

@media (min-width:768px) {
  min-height:400px   
}

`;

export const CenterFirst = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  height:100%;
  opacity:1;
`;

export const SecondSide = styled.div`
  flex:1.5;
  background:#ffff;
  width:100%;
  height:100%; 
/*height:100%  apenas para media queries*/
`;

export const FormContainer = styled.form`
  height:100%;
  min-height:400px;
  width:100%;
  
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
  padding:0 50px 0 50px;

  ${Button}{
    height: 46px;
    width: 150px;
    border-radius: 15px;
    background: #ff1616;
    color: #fff;
    font-size: 20px;
  }
`;

export const InputContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;

  height:30%;
  width:100%;

  @media (min-width:768px){
    width:70%;
  }

`;

