import { injectGlobal } from 'styled-components';

export default () => injectGlobal`
  html {
    box-sizing: border-box;
    min-height: 100%;
    height: 100%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
    background: #f1f5f7;
  }
`;
