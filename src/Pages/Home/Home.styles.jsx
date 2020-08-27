import styled from 'styled-components';
import { Wrapper } from '../../Global.styles';
import { Input } from '../../Components/CustomComponent/Custom.styles';

export const HomeContent = styled.div`
 height:100%;
 display:flex;
 position:relative;
 background-color:#fff;

 .modal-wrap{
    display:flex;
    
    padding:0 10px;

    ${Wrapper}:first-child{
      display:flex;
      align-items:center;
      justify-content:space-evenly;
      flex-direction:column;
      
      height:250px;
      width:100%;
      color:${props => props.colors.primaryColor};
      background:${props => props.colors.secondaryColor};

      border-radius:24px;

      box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.75);

      ${Wrapper}{
       
        span, ${Input}, svg{
          height:35px;
        }
        
        span{
          border-top-left-radius:15px;
          border-bottom-left-radius:15px;
          background:${props => props.colors.primaryColor};
        }

        span svg{
          width:35px;
          color:${props=>props.colors.secondaryColor}
        }
      }
    }

    h3{
      padding:0 100px;
      font-size:1em;
      text-align:center;
    }

  }


 @media screen and (min-width:767px){
   flex-direction:row;
   overflow:auto;
 }

`;

// export const 