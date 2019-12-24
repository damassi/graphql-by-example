import React from "react"
import { Box, Text, Flex } from "rebass"
import { Button } from "../components/Button"
import { Input } from "../components/Input"

export const Books = props => {
  return (
    <Box>
      <Box>
        <Text fontSize={3}>
          This route demonstrates how we can use GraphQL to quickly scaffold
          remote REST APIs, such as{" "}
          <a href="http://www.penguinrandomhouse.biz/webservices/rest/">
            Penguin Books
          </a>
          .
        </Text>
      </Box>
      <Flex mt={3}>
        <Input placeholder="foo" />
        <Button>Search users</Button>
      </Flex>
    </Box>
  )
}
