import { createGlobalStyle } from "styled-components"
import styledNormalize from "styled-normalize"

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize};

  body {
    width: 100%;
    font-family: sans-serif;
    line-height: 1.3;
  }

  button:focus, textarea:focus, input:focus {
    outline: none;
  }

  a:visted {
    color: inherit;
  }
`
