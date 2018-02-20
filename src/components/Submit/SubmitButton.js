import styled from 'styled-components'

const Submit = styled.button`
  background-color: #e8f4ff;
  cursor:pointer;
  padding: 8px 15px;
  border: 1px solid #ccc;
  border-radius: 2px;
  &:hover {
    background-color: #d4e7f9;
  }
  &:disabled {
    opacity: 0.5;
  }
`;

export default Submit