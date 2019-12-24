import React from "react"
import { Box, Text } from "rebass"
import { NextLink } from "../components/NextLink"

export const Home = props => {
  return (
    <Box>
      <Text fontSize={3}>
        Demo app showing how GraphQL can be used in a variety of ways, from
        connecting to remote Rest API's to internal databases.
        <Box py={4}>
          <NextLink to="/authors">
            <strong>Next: </strong>Creating a schema from RandomHouse's Books
            API
          </NextLink>
        </Box>
      </Text>
    </Box>
  )
}
