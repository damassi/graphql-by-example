import { ApolloProvider } from "@apollo/react-hooks"
import { ThemeProvider } from "styled-components"
import ApolloClient from "apollo-boost"
import React from "react"
import ReactDOM from "react-dom"
import theme from "@rebass/preset"

import { GlobalStyle } from "./components/GlobalStyle"
import { App } from "./App"

const client = new ApolloClient({
  uri: `http://localhost:4000/graphql`,
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById("root")
)
