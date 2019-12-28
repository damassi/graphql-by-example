import React from "react"
import { Box, Flex, Text } from "rebass"
import { Link } from "@reach/router"

const NavItem: React.FC<{ to: string }> = ({ children, ...props }) => {
  return (
    <Box pr={2}>
      <Text fontSize={1}>
        <Link {...props}>{children}</Link>
      </Text>
    </Box>
  )
}

export const Navigation = props => {
  return (
    <Flex py={2}>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/authors">Authors</NavItem>
      <NavItem to="/users">Users</NavItem>
      <Text fontSize={1}>
        | Check out the{" "}
        <a
          href="https://github.com/damassi/graphql-by-example"
          target="_blank"
          rel="noopener noreferrer"
        >
          source on GitHub
        </a>
        .
      </Text>
    </Flex>
  )
}
