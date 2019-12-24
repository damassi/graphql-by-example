import React from "react"
import { Text, Box } from "rebass"
import { Header } from "./components/Header"
import { Navigation } from "./components/Navigation"

import { Router, Link } from "@reach/router"
import { Home } from "./routes/Home"
import { Books } from "./routes/Books"
import { Works } from "./routes/Works"
import { Users } from "./routes/Users"

export const App: React.FC = () => {
  return (
    <Box p={2} m={2} width="50%" margin="auto">
      <Header />

      <Navigation />

      <Box py={3}>
        <Router>
          <Home path="/" />
          <Books path="books" />
          <Works path="works" />
          <Users path="users" />
        </Router>
      </Box>
    </Box>
  )
}
