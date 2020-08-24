import styled from 'styled-components';


export const Button = styled.button`
  ${props => ({ ...props.customStyles })};
  
  opacity: 0.80;
  box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
  
  outline:none;
  cursor: pointer;
  
  font-size:1em;
  font-family:Lato;
  border-radius:5px;
  border: none;
  transition: opacity 1s ease-in-out;

  :hover {
    opacity: 1;
  }

`;

export const Input = styled.input`
  ${props => ({ ...props.customStyle })};
  padding:6px 0 6px 6px;
  font-family:Lato;
  font-size:1.5em;

  :focus{
    border-bottom-color:#000;
    transition:1s;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: grey;
  }
  
  :-ms-input-placeholder {
    color: grey;
  }
`;
