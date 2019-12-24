import React from "react"
import { Box, Flex } from "rebass"
import { Link, LinkProps } from "@reach/router"

const NavItem: React.FC<{ to: string }> = ({ children, ...props }) => {
  return (
    <Box pr={2}>
      <Link {...props}>{children}</Link>
    </Box>
  )
}

export const Navigation = props => {
  return (
    <Flex py={2}>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/books">Books</NavItem>
      <NavItem to="/works">Works</NavItem>
      <NavItem to="/users">Users</NavItem>
    </Flex>
  )
}
