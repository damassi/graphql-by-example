import { createGlobalStyle } from "styled-components"
import styledNormalize from "styled-normalize"

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize};

  body {
    width: 100%;
    font-family: sans-serif;
    line-height: 1.5;
    color: #333;
  }

  button:focus, textarea:focus, input:focus {
    outline: none;
  }

  a {
    color: purple;
  }

  a:active, a:hover {
    color: #e10098;
  }

  a:visted {
    color: #333;
  }
`
