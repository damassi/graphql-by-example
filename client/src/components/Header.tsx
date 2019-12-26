import React from "react"
import { Box, Flex } from "rebass"
import { ReactComponent as GraphQLLogo } from "./graphql.svg"
import { Link } from "@reach/router"

export const Header: React.FC = () => {
  return (
    <Box mt={4}>
      <Flex justifyContent="space-between">
        <Link to="/">
          <GraphQLLogo style={{ height: 100 }} />
        </Link>
      </Flex>
    </Box>
  )
}
