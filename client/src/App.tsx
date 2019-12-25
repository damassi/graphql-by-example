import React from "react"
import { Box, Text } from "rebass"
import { Header } from "./components/Header"
import { Router } from "@reach/router"
// import { Navigation } from "./components/Navigation"

import { Home } from "./routes/Home"
import { Authors } from "./routes/Authors"
import { Works } from "./routes/Works"
import { Users } from "./routes/Users"
import { FurtherReading } from "./routes/FurtherReading"
import { Footer } from "./components/Footer"
import { Spacer } from "./components/Spacer"

export const App: React.FC = () => {
  return (
    <Box p={2} m={2} width="50%" margin="auto">
      <Header />

      <Box mt={3} mb={3}>
        <Router>
          <Home path="/" />
          <Authors path="authors" />
          <Works path="works" />
          <Users path="users" />
          <FurtherReading path="further-reading" />
        </Router>
      </Box>

      <Footer />

      {/* <Navigation /> */}
    </Box>
  )
}
