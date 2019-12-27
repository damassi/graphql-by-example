import React from "react"
import { Link } from "@reach/router"
import { Button } from "../components/Button"
import { Box } from "rebass"

export const NextLink = ({ to, children }) => {
  return (
    <Box mt={3}>
      <Button>
        <Link to={to} style={{ textDecoration: "none" }}>
          {children}
        </Link>
      </Button>
    </Box>
  )
}
