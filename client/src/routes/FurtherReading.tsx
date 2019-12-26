import React from "react"
import { Box, Text, Flex } from "rebass"
import { Spacer } from "../components/Spacer"

export const FurtherReading = props => {
  return (
    <Box>
      <Text fontSize={3}>
        The source code for this demo app covers a few different areas, from
        GraphQL, to React to design systems as well as lays out some common
        patterns for use.
      </Text>

      <Spacer my={4} />

      <Text fontSize={2}>
        To learn more, check out the source-code for the{" "}
        <a
          href="https://github.com/damassi/graphql-presentation/tree/master/server"
          target="_blank"
          rel="noopener noreferrer"
        >
          server-side
        </a>{" "}
        as well as{" "}
        <a
          href="https://github.com/damassi/graphql-presentation/tree/master/client"
          target="_blank"
          rel="noopener noreferrer"
        >
          client
        </a>
        , and see the documentation links below:
      </Text>

      <Spacer my={4} />

      <Flex flexWrap="wrap" ml={-2} mr={-2}>
        <Box width="33%" p={2}>
          <Box>
            <Text fontSize={2} fontWeight="bold">
              GraphQL
            </Text>
          </Box>
          <Box>
            <Text fontSize={1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </Text>
          </Box>
        </Box>
        <Box width="33%" p={2}>
          <Box>
            <Text fontSize={2} fontWeight="bold">
              Apollo Server
            </Text>
          </Box>
          <Box>
            <Text fontSize={1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </Text>
          </Box>
        </Box>
        <Box width="33%" p={2}>
          <Box>
            <Text fontSize={2} fontWeight="bold">
              Apollo Client
            </Text>
          </Box>
          <Box>
            <Text fontSize={1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </Text>
          </Box>
        </Box>
        <Box width="33%" p={2}>
          <Box>
            <Text fontSize={2} fontWeight="bold">
              React
            </Text>
          </Box>
          <Box>
            <Text fontSize={1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </Text>
          </Box>
        </Box>
        <Box width="33%" p={2}>
          <Box>
            <Text fontSize={2} fontWeight="bold">
              Reach Router
            </Text>
          </Box>
          <Box>
            <Text fontSize={1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </Text>
          </Box>
        </Box>
        <Box width="33%" p={2}>
          <Box>
            <Text fontSize={2} fontWeight="bold">
              Rebass
            </Text>
          </Box>
          <Box>
            <Text fontSize={1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </Text>
          </Box>
        </Box>
        <Box width="33%" p={2}>
          <Box>
            <Text fontSize={2} fontWeight="bold">
              Backpack
            </Text>
          </Box>
          <Box>
            <Text fontSize={1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </Text>
          </Box>
        </Box>
        <Box width="33%" p={2}>
          <Box>
            <Text fontSize={2} fontWeight="bold">
              Create React App
            </Text>
          </Box>
          <Box>
            <Text fontSize={1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </Text>
          </Box>
        </Box>
      </Flex>
      {/* <li>Apollo Server</li>
        <li>Apollo Client</li>
        <li>React</li>
        <li>React Router</li>
        <li>Rebass</li>
        <li>Backpack</li>
        <li>Create React App</li>
      </ul> */}
    </Box>
  )
}
