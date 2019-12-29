import gql from "graphql-tag"
import merge from "lodash.merge"

import * as author from "./Author"
import * as user from "./User"
import * as title from "./Title"

// An initial `Query` type is required, which will be extend by subtypes. If
// there's a type that doesn't logically fit inside of its own file, it can be
// added here.
const Query = gql`
  type Query {
    """
    Noop to support extending Query type
    """
    _: String
  }
`

export const typeDefs = [Query, author.typeDefs, user.typeDefs, title.typeDefs]

export const resolvers = merge(
  author.resolvers,
  user.resolvers,
  title.resolvers
)
