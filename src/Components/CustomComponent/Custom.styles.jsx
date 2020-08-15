import styled from 'styled-components';


export const Button = styled.button`
  ${props => ({ ...props.customStyles })};
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
