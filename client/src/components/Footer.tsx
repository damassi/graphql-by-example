import React from "react"
import { Box, Text } from "rebass"

export const Footer = props => {
  return (
    <Box>
      <Text fontSize={1}>
        Check out the{" "}
        <a
          href="https://github.com/damassi/graphql-presentation"
          target="_blank"
          rel="noopener noreferrer"
        >
          source on GitHub
        </a>
        .
      </Text>
    </Box>
  )
}
