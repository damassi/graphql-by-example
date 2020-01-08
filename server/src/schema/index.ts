import gql from "graphql-tag"
import merge from "lodash.merge"

import * as author from "./Author"
import * as user from "./User"
import * as title from "./Title"

import { version as appVersion } from "../../package.json"

/**
 * An initial `Query` type is required, which will be extend by subtypes. If
 * there's a type that doesn't logically fit inside of its own file, it can be
 * added here.
 */
const rootTypeDefs = gql`
  type Query {
    """
    Application version
    """
    appVersion: String
  }
`

const rootResolvers = {
  Query: {
    appVersion: () => appVersion,
  },
}

export const typeDefs = [
  rootTypeDefs,
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
