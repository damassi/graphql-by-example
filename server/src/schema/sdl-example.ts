import { gql } from "apollo-server-express"

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
  type User {
    firstName: String
    lastName: String
  }
  type Query {
    user: User
  }
`

// Provide resolver functions for your schema fields
export const resolvers = {
  Query: {
    user: () => ({
      firstName: "hey",
      lastName: "foo",
    }),
  },
}
