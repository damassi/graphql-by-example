import gql from "graphql-tag"
import merge from "lodash.merge"

import * as author from "./Author"
import * as user from "./User"
import * as title from "./Title"

import { version } from "../../package.json"

/**
 * An initial `Query` type is required, which will be extend by subtypes. If
 * there's a type that doesn't logically fit inside of its own file, it can be
 * added here.
 */
const RootQuery = gql`
  type Query {
    """
    Application version
    """
    version: String
  }
`

const rootResolvers = {
  Query: {
    version: () => version,
  },
}

export const typeDefs = [
  RootQuery,
  author.typeDefs,
  user.typeDefs,
  title.typeDefs,
]

export const resolvers = merge(
  rootResolvers,
  author.resolvers,
  user.resolvers,
  title.resolvers
)
