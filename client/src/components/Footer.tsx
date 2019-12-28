import React from "react"
import { Flex, Text, Box } from "rebass"
import { Link } from "@reach/router"

export const Footer = props => {
  return (
    <Flex mb={4}>
      <Text fontSize={1}>
        Check out the{" "}
        <a
          href="https://github.com/damassi/graphql-by-example"
          target="_blank"
          rel="noopener noreferrer"
        >
          source on GitHub
        </a>
      </Text>

      <Box mx={2}>|</Box>

      <Text fontSize={1}>
        <Link to="/further-reading">Further Reading</Link>
      </Text>
    </Flex>
  )
}
