import React from "react"
import { Box, Text, Flex } from "rebass"
import JSON from "react-json-view"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { NextLink } from "../components/NextLink"

export const Authors = props => {
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

      <Flex mt={3} flexDirection="column">
        <Flex>
          <Input placeholder="First Name" />
          <Button>Search</Button>
        </Flex>
        <JSON
          src={{ foo: "bar", bar: "bar", baz: "baz", bam: ["a", "b", "c"] }}
        />
        <Flex>
          <Input placeholder="Last Name" />
          <Button>Search</Button>
        </Flex>
        <JSON
          src={{ foo: "bar", bar: "bar", baz: "baz", bam: ["a", "b", "c"] }}
        />
      </Flex>

      <Flex my={3}>
        <NextLink to="/users">
          <strong>Next: </strong>Creating a schema from an internal API
        </NextLink>
      </Flex>
    </Box>
  )
}
