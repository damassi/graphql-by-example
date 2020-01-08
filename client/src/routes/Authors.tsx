import React from "react"
import { Box, Text, Flex } from "rebass"
import JSON from "react-json-view"
import { useLazyQuery } from "@apollo/react-hooks"
import { gql } from "apollo-boost"

import { NextLink } from "../components/NextLink"
import { SearchField } from "../components/SearchField"

const AuthorInfoFragment = gql`
  fragment AuthorInfo on Author {
    authorid
    authorfirst
    authorlast
    spotlight
    fullName

    titles {
      author
      isbn
      titleweb
    }
  }
`

const AuthorsQuery = gql`
  query AuthorsQuery($firstName: String, $lastName: String) {
    authors(firstName: $firstName, lastName: $lastName) {
      ...AuthorInfo
    }
  }
  ${AuthorInfoFragment}
`

const AuthorQuery = gql`
  query AuthorQuery($id: Int!) {
    author(id: $id) {
      ...AuthorInfo
    }
  }
  ${AuthorInfoFragment}
`

export const Authors = props => {
  const [getAuthors, { data: authorsListData }] = useLazyQuery(AuthorsQuery)
  const [getAuthorById, { data: authorData }] = useLazyQuery(AuthorQuery)

  return (
    <Box>
      <Box>
        <Text fontSize={3}>
          This route demonstrates how we can use GraphQL to quickly scaffold
          remote REST APIs, such as{" "}
          <a
            href="http://www.penguinrandomhouse.biz/webservices/rest/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Penguin Books
          </a>
          .
        </Text>
      </Box>

      <Flex mt={3} flexDirection="column">
        <Box>
          <SearchField
            buttonText="Search Authors"
            inputPlaceholder="First Name"
            onSearch={value => {
              getAuthors({
                variables: {
                  firstName: value,
                },
              })
            }}
          />

          {authorsListData && (
            <Box>
              <JSON src={authorsListData} />
            </Box>
          )}
        </Box>
        <Box>
          <SearchField
            buttonText="Search by AuthorID"
            inputPlaceholder="AuthorID"
            onSearch={value => {
              getAuthorById({
                variables: {
                  id: Number(value),
                },
              })
            }}
          />
          {authorData && (
            <Box>
              <Text
                mb={3}
                fontSize={2}
                color="#666"
                dangerouslySetInnerHTML={{
                  __html: authorData.author.spotlight,
                }}
              />
              <JSON src={authorData} />
            </Box>
          )}
        </Box>
      </Flex>

      <NextLink to="/users">
        <strong>Next: </strong>Creating a schema from an internal API
      </NextLink>
    </Box>
  )
}
