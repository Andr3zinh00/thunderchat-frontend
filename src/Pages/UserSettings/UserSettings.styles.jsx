import styled from 'styled-components';
// import { Wrapper } from '../../Global.styles';

export const Switch = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  display:none;
`;

export const ColorBox = styled.div`
  ${props => props.color}
  width:25px;
  height:20px;
  box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
  border-radius:45%;
`;

export const ThemeSettings = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  flex:3;

  label{
    background: ${props => props.labelBackground} !important;
  }

  div{
    display:flex;
    flex-direction:row;
    align-items:center;

    ${ColorBox}:first-child{
      margin-left:15px;
    }
  }
`;

export const UserSettingsContent = styled.div`
  height:100%;
  padding:5% 10%;

  display:flex;
  flex-direction:column;

  .wrapper-all{
    flex:3;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;
  }

  .img-wrapper{
    display:none;
  }

  .settings-wrapper{
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;

    height:100%;
    border-radius:20px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  }

  .icon-wrapper{
    display:flex;
    flex-direction:row;
    align-items:center;

    cursor:pointer;

    svg{
      margin-right:5px;
    }
  }

  header{
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    flex:1;
    margin-bottom:15px;

    h2{
      margin-left:10px;
    }
  }

  ${Switch}:checked + .switch-label .switch-button{
    left: calc(100% - 2px);
    transform: translateX(-100%);
   }

  .switch-label{
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 5px;

    cursor: pointer;
    width: 80px;
    height: 30px;
    background: grey;
    border-radius: 100px;
    position: relative;
    transition: background-color .2s;
  }

  .switch-label .switch-button{
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 30px;
    height: 26px;
    border-radius: 45px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  }

  .switch-label:active .switch-button {
    width: 60px;
  }

  @media screen and (min-width:767px){
    padding:3% 2%;

    .img-wrapper{
      display:unset;
      width:50%;
      height:100%;
      margin-right:10px;
    }

    .img-wrapper img{
      height:100%;
      width:100%;
    }

    .settings-wrapper{
      width:50%;
    }

    .wrapper-all{
      flex:5;
    }

  }
`;

