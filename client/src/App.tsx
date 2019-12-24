import React from "react"
import { Box, Text } from "rebass"
import { Header } from "./components/Header"
// import { Navigation } from "./components/Navigation"

import { Router } from "@reach/router"
import { Home } from "./routes/Home"
import { Authors } from "./routes/Authors"
import { Works } from "./routes/Works"
import { Users } from "./routes/Users"

export const App: React.FC = () => {
  return (
    <Box p={2} m={2} width="50%" margin="auto">
      <Header />

      <Box py={3}>
        <Router>
          <Home path="/" />
          <Authors path="authors" />
          <Works path="works" />
          <Users path="users" />
        </Router>
      </Box>

      <Box>
        <Text fontSize={1}>
          Check out the <a href="#">source on GitHub</a>.
        </Text>
      </Box>

      {/* <Navigation /> */}
    </Box>
  )
}
