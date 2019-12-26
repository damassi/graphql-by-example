import React from "react"
import { Link } from "@reach/router"
import { Button } from "../components/Button"

export const NextLink = ({ to, children }) => {
  return (
    <Button>
      <Link to={to} style={{ textDecoration: "none" }}>
        {children}
      </Link>
    </Button>
  )
}
