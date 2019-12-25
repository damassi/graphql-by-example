import React, { useState, useEffect, useRef } from "react"
import { Box, Text, Flex } from "rebass"
import JSON from "react-json-view"
import { useLazyQuery } from "@apollo/react-hooks"
import { gql } from "apollo-boost"

import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { NextLink } from "../components/NextLink"

const AuthorsListQuery = gql`
  query AuthorsQuery($firstName: String = "", $lastName: String = "") {
    authors(firstName: $firstName, lastName: $lastName) {
      authorid
      authorfirst
      authorlast
      spotlight
      fullName
    }
  }
`

const AuthorQuery = gql`
  query AuthorQuery($id: Int!) {
    author(id: $id) {
      authorid
      authorfirst
      authorlast
      spotlight
      fullName
    }
  }
`

export const Authors = props => {
  const listInputRef = useRef<HTMLInputElement>(null)
  const authorInputRef = useRef<HTMLInputElement>(null)
  const [getAuthors, { data: authorsListData }] = useLazyQuery(AuthorsListQuery)
  const [getAuthorById, { data: authorData }] = useLazyQuery(AuthorQuery)

  function searchList() {
    getAuthors({
      variables: {
        firstName: listInputRef?.current?.value,
      },
    })
  }

  function searchById() {
    getAuthorById({
      variables: {
        id: Number(authorInputRef?.current?.value),
      },
    })
  }

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
        <Box>
          <Flex>
            <Input
              ref={listInputRef}
              placeholder="Last Name"
              onKeyDown={event => {
                if (event.keyCode === 13) {
                  searchList()
                }
              }}
            />
            <Button onClick={() => searchList()}>Search Authors</Button>
          </Flex>

          {authorsListData && (
            <Box>
              <JSON src={authorsListData} />
            </Box>
          )}
        </Box>
        <Box>
          <Flex>
            <Input
              ref={authorInputRef}
              placeholder="AuthorID"
              onKeyDown={event => {
                if (event.keyCode === 13) {
                  searchById()
                }
              }}
            />
            <Button onClick={() => searchById()}>Search by AuthorID</Button>
          </Flex>

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

      <Flex my={3}>
        <NextLink to="/users">
          <strong>Next: </strong>Creating a schema from an internal API
        </NextLink>
      </Flex>
    </Box>
  )
}
