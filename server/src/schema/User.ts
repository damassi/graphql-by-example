import gql from "graphql-tag"
import { api } from "../api"

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
    users: async () => {
      try {
        const users = await api.app.get("/users")
        return users.data
      } catch (error) {
        throw new Error(error)
      }
    },

    user: async (_parent, args) => {
      try {
        const user = await api.app.get(`/users/${args.id}`)
        return user.data
      } catch (error) {
        throw new Error(error)
      }
    },
  },

  Mutation: {
    createUser: async (_parent, args) => {
      const user = await api.app.post(`/users`, {
        data: {
          username: args.username,
        },
      })
      return user.data
    },
  },
}
