import styled from 'styled-components';
import { Wrapper } from '../../Global.styles';
import { Input, Button } from '../../Components/CustomComponent/Custom.styles';
import { ModalContent } from '../../Components/Modal/Modal.styles';

export const HomeContent = styled.div`
 height:100%;
 display:flex;
 position:relative;
 background-color:#fff;

 .modal-wrap{
    display:flex;
    
    padding:0 10px;

    ${Wrapper}{
      flex:unset;
    }

    ${Button}{

    }

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
        display:flex;
        flex-direction:row;
        justify-content:center;

        width:100%;
        padding:0 1%;
        
        ${Input}{
          font-size:0.9em;
          height:35px;
          width:70%;
          border-top-right-radius:15px;
          border-bottom-right-radius:15px;
          border-color:${p => p.colors.primaryColor};

          :focus{
            box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
          }
          transition:1s ease-in-out;

        }
        
        span{
          border-top-left-radius:15px;
          border-bottom-left-radius:15px;
          height:35px;
          width:35px;
          background:${props => props.colors.primaryColor};
        }

        span svg{
          width:35px;
          height:35px;
          color:${props => props.colors.secondaryColor}
        }
      }
    }

    h3{
      padding:0 90px;
      font-size:1.2em;
      text-align:center;
    }

  }


 @media screen and (min-width:767px){
   flex-direction:row;
   overflow:auto;

   ${ModalContent}{
    position:absolute;
    top:40px;
    left:40px;
   }
 }

`;

// export const 