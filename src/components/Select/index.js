import styled from 'styled-components'

const Select = styled.select`
  border: 1px solid #000000;
  margin: 0;
  padding:0;
  width: 100%;
  resize: none;
  &:focus {
    border: 1px solid #2196F3;
  }
  & option.hidden {
    display: none;
  }
`;

export default Select