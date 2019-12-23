import { gql } from "apollo-server-express"

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
  type Author {
    firstName: String
    lastName: String
  }
  type Query {
    author(id: Int!): Author
  }
`

// Provide resolver functions for your schema fields
export const resolvers = {
  Query: {
    author: () => ({
      firstName: "hey",
      lastName: "foo",
    }),
  },
}
