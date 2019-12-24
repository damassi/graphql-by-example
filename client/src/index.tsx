import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { App } from "./App"
import theme from "@rebass/preset"
import styledNormalize from "styled-normalize"

const GlobalStyle = createGlobalStyle`
  ${styledNormalize};

  body {
    width: 100%;
    font-family: sans-serif;
  }

  button:focus, textarea:focus, input:focus {
    outline: none;
  }
`

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <App />
    </>
  </ThemeProvider>,
  document.getElementById("root")
)
