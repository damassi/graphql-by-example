import React from "react"
import { Box, Text, Flex, Button } from "rebass"

export const Header: React.FC = () => {
  return (
    <Box py={3}>
      <Flex justifyContent="space-between">
        <Text fontSize={[5]} fontWeight="bold">
          GraphQL Demo
        </Text>
      </Flex>
    </Box>
  )
}
