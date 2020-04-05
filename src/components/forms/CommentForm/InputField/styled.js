import styled from 'styled-components';

export const StyledInputField = styled('div')`
  display: flex;
  align-items: flex-start;
  .label {
    padding-top: 5px;
    font-size: 14px;
    line-height: 120%;
    width: 200px;
  }
  .field {
    width: 200px;
    margin-bottom: 10px;
  }
  .textarea {
    width: 500px;
    height: 100px;
    resize: none;
  }
  .error {
    background-color: rgba(255, 0, 0, 0.1);
  }
`;