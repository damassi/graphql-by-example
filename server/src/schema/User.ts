import gql from "graphql-tag"

export const typeDefs = gql`
  type User {
    username: String
    id: Int
  }

  extend type Query {
    users: [User]
    user(id: Int!): User
  }

  type Mutation {
    createUser(username: String): User
  }
`

export const resolvers = {
  Query: {
    users: async (_parent, _args, { dataSources }) => {
      const users = await dataSources.appAPI.get("/users")
      users.reverse()
      return users
    },

    user: (_parent, args, { dataSources }) => {
      return dataSources.appAPI.get(`/users/${args.id}`)
    },
  },

  Mutation: {
    createUser: (_parent, args, { dataSources }) => {
      return dataSources.appAPI.post(`/users`, {
        username: args.username,
      })
    },
  },
}
