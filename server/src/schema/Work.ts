import gql from "graphql-tag"
import { api } from "../api"

export const typeDefs = gql`
  type Work {
    series: String
    workid: Int
    titleweb: String
    authorweb: String
  }

  extend type Query {
    work(id: Int!): Work
    works(keyword: String!): [Work]
  }
`

export const resolvers = {
  Query: {
    work: async (_parent, args) => {
      const response = await api.book.get(`/works/${args.id}`)
      return response.data
    },

    works: async (_parent, args) => {
      const response = await api.book.get(`/works`, {
        params: {
          search: args.keyword,
        },
      })

      return response.data.work
    },
  },
}
