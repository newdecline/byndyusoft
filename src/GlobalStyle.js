import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
  .container {
    padding: 0 15px;
  }
  .comment-form-transition, .comment-form-transition1 {
    &-enter {
      opacity: 0;
    }
    &-enter-active {
      opacity: 1;
      transition: all 1s;
    }
    &-exit {
      opacity: 1;
    }
    &-exit-active {
      opacity: 0;
      transition: all 1s;
    }
    &-exit-done {
      position: absolute;
      display: none;
    }
  }
`;