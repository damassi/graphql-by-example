import React from "react"
import { Box } from "rebass"
import { Router } from "@reach/router"

import { Authors } from "./routes/Authors"
import { Footer } from "./components/Footer"
import { FurtherReading } from "./routes/FurtherReading"
import { Header } from "./components/Header"
import { Home } from "./routes/Home"
import { Users } from "./routes/Users"

export const App: React.FC = () => {
  return (
    <Box m={2} width="50%" margin="auto">
      <Header />

      <Box my={3}>
        <Router primary={false}>
          <Home path="/" />
          <Authors path="authors" />
          <Users path="users" />
          <FurtherReading path="further-reading" />
        </Router>
      </Box>

      <Footer />
    </Box>
  )
}
