import styled from 'styled-components';
import { Wrapper } from '../../Global.styles';
import { Input, Button } from '../../Components/CustomComponent/Custom.styles';
import { ModalContent } from '../../Components/Modal/Modal.styles';

export const HomeContent = styled.div`
 height:100%;
 display:flex;
 position:relative;
 background-color:${props => props.theme.colors.textTertiary};

 .modal-wrap{
    display:flex;
    position:relative;

    .close-io{
      position:absolute;
      top:10px;
      right:20px;
      
      height:30px;
      width:30px;
      
      cursor:pointer;
      color:${props=>props.theme.colors.primary};

      :active{
        color:${props=>props.theme.colors.primary}
      }
    }

    padding:0 10px;

    ${Wrapper}{
      flex:unset;
    }

    ${Button}{
      width:50%;
      height:35px;

      margin-top:10px;
      
      border-radius:15px;
      
      color:${props => props.theme.colors.textTertiary};
      background:${props => props.theme.colors.primary};
      
      opacity:1;
      
      :hover{
        background:${props => props.theme.colors.primary};
      }

      :active{
        transform: translateY(-4px);
      }

      transition: .7s;
    }

    ${Wrapper}:first-child{
      display:flex;
      align-items:center;
      justify-content:space-evenly;
      flex-direction:column;
      
      height:250px;
      width:100%;
      color:${props => props.theme.colors.primary};
      background:${props => props.theme.colors.textTertiary};

      border-radius:24px;

      box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.75);

      ${Wrapper}{
        display:flex;
        flex-direction:row;
        justify-content:center;
        font-family:Lato;


        width:100%;
        padding:0 1%;
        
        ${Input}{
          font-size:.9em;
          font-weight:700;
          padding-left:10px;

          height:35px;
          width:70%;
          border-top-right-radius:15px;
          border-bottom-right-radius:15px;
          border-color:${p => p.theme.colors.primary};

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
          background:${props => props.theme.colors.primary};
        }

        span svg{
          width:35px;
          height:35px;
          color:${props => props.theme.colors.secondary}
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
    top:70px;
    left:10px;
   }
 }

`;

// export const 