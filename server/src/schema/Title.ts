import gql from "graphql-tag"

export const typeDefs = gql`
  type Title {
    isbn: Float
    author: String
    excerpt: String
    jacketquotes: String
    pages: Int
    titleweb: String
  }

  extend type Query {
    title(isbn: Float!): Title
    titles(authorid: Int!): [Title]
  }
`

export const resolvers = {
  Query: {
    title: async (_parent, args, { dataSources }) => {
      return dataSources.bookAPI.get(`/title/${args.isbn}`)
    },

    titles: async (_parent, args, { dataSources }) => {
      const response = await dataSources.bookAPI.get(`/titles`, {
        authorid: args.authorid,
      })
      return response.title
    },
  },
}
