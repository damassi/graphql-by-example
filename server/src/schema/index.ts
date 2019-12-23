import { GraphQLSchema, GraphQLObjectType } from "graphql"
import { user } from "./user"

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: {
      user,
    },
  }),
})
