import styled from 'styled-components'

const TextInput = styled.textarea`
  border: 1px solid #CCC;
  border-radius: 1px;
  width: 100%;
  height: 100px;
  margin: 0;
  padding:0;
  resize: none;
  &:focus {
    border: 1px solid #2196F3;
  }
  background-color: #FCFCFC;
`;

export default TextInput