import React from "react"
import JSON from "react-json-view"
import { Box, Text, Flex } from "rebass"
import { NextLink } from "../components/NextLink"
import { Button } from "../components/Button"
import { SearchField } from "../components/SearchField"
import { gql } from "apollo-boost"
import { useMutation, useLazyQuery } from "@apollo/react-hooks"

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($username: String!) {
    createUser(username: $username) {
      id
      username
    }
  }
`

const LIST_USERS_QUERY = gql`
  query ListUsers {
    users {
      id
      username
    }
  }
`

export const Users = props => {
  const [createUser, { data: newUserData }] = useMutation(CREATE_USER_MUTATION)
  const [listUsers, { data: listUsersData }] = useLazyQuery(LIST_USERS_QUERY, {
    fetchPolicy: "cache-and-network",
  })

  return (
    <Box>
      <Text fontSize={3}>
        This shows how we can create a GraphQL schema around our own server, as
        well as how we can change data via GraphQL mutations.
      </Text>

      <Flex mt={3} flexDirection="row">
        <Box>
          <SearchField
            buttonText="Create new User"
            inputPlaceholder="Username"
            onSearch={value => {
              createUser({
                variables: {
                  username: value,
                },
              })
            }}
          />

          {newUserData && (
            <Box>
              <JSON src={newUserData} displayDataTypes={false} />
            </Box>
          )}
        </Box>

        <Box ml={2}>
          <Flex>
            <Button onClick={() => listUsers()}>List Users</Button>
          </Flex>

          {listUsersData && (
            <Box>
              <JSON src={listUsersData} displayDataTypes={false} />
            </Box>
          )}
        </Box>
      </Flex>

      <Flex>
        <NextLink to="/further-reading">
          <strong>Next: </strong> Links to further reading
        </NextLink>
      </Flex>
    </Box>
  )
}
