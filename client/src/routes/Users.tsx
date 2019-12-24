import React from "react"
import { Box, Text, Flex } from "rebass"
import { NextLink } from "../components/NextLink"

export const Users = props => {
  return (
    <Box>
      <Text fontSize={3}>
        This shows how we can create a GraphQL schema around our own server, as
        well as how we can change data via GraphQL mutations.
      </Text>

      <Flex my={3}>
        <NextLink to="/users">
          <strong>Next: </strong> Links to further reading
        </NextLink>
      </Flex>
    </Box>
  )
}
