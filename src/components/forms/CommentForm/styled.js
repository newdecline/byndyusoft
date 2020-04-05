import styled from 'styled-components';

export const StyledCommentForm = styled('div')`
  position: relative;
  padding: 20px;
  margin: 40px 0;
  border: 1px solid #000;
  box-sizing: border-box;
  .title-block {
    position: absolute;
    top: -8px;
    left: 20px;
    display: block;
    margin: 0;
    background-color: #fff;
    font-size: 14px;
    line-height: 120%;
  }
  .submit { 
    padding: 7px 14px;
    margin-left: 200px;
    font-size: 14px;
    line-height: 120%;
    color: #fff;
    background-color: #1a66aa;
    border: none;
    box-sizing: border-box;
  }
`;