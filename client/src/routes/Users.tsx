import React from "react"
import { Box, Text, Flex } from "rebass"
import { NextLink } from "../components/NextLink"
import { Input } from "../components/Input"
import { Button } from "../components/Button"

export const Users = props => {
  return (
    <Box>
      <Text fontSize={3}>
        This shows how we can create a GraphQL schema around our own server, as
        well as how we can change data via GraphQL mutations.
      </Text>

      <Flex mt={3} flexDirection="row">
        <Flex>
          <Input placeholder="Create new User" />
          <Button>Create</Button>
        </Flex>
        <Flex ml={2}>
          <Button>List Users</Button>
        </Flex>
      </Flex>

      <Flex my={3}>
        <NextLink to="/further-reading">
          <strong>Next: </strong> Links to further reading
        </NextLink>
      </Flex>
    </Box>
  )
}
