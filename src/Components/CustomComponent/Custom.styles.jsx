import styled from 'styled-components';


export const Button = styled.button`
  ${props => ({ ...props.customStyles })};
  
  opacity: 1;
  
  outline:none;
  cursor: pointer;
  
  font-size:1em;
  font-family:Lato;
  border-radius:5px;
  border: none;
  transition: opacity 0.3s ease-in-out;

  :hover {
    opacity: 0.8;
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
