import { GraphQLObjectType, GraphQLString } from "graphql"

export const user = {
  description: "A user.",
  type: new GraphQLObjectType({
    name: "User",
    fields: {
      firstName: {
        type: GraphQLString,
        resolve: () => "chris",
      },
      lastName: {
        type: GraphQLString,
        resolve: () => "p",
      },
    },
  }),
  resolve: () => ({}),
}
