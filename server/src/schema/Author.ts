import gql from "graphql-tag"
import { api } from "../api"

export const typeDefs = gql`
  type Author {
    authorfirst: String
    authorlast: String
    authorid: Int
    spotlight: String
    fullName: String
  }

  extend type Query {
    author(id: Int!): Author
    authors(firstName: String = "", lastName: String = ""): [Author]
  }
`

export const resolvers = {
  Query: {
    author: async (_parent, args, _context, _info) => {
      try {
        const response = await api.book.get(`/authors/${args.id}`)
        return response.data
      } catch (error) {
        throw new Error(error)
      }
    },

    authors: async (_parent, args) => {
      if (!(args.firstName || args.lastName)) {
        throw new Error(
          "When querying all authors a `firstName` or a `lastName` argument is " +
            "required in order to narrow the results."
        )
      }

      try {
        const response = await api.book.get(`/authors`, {
          params: {
            firstName: args.firstName,
            lastName: args.lastName,
          },
        })

        return response.data.author
      } catch (error) {
        throw new Error(error)
      }
    },
  },

  /**
   * Note how additional types can be passed here. Results returned from `Query`
   * up above are then funnelled down into subfields by Type where additional
   * operations can take place.
   */
  Author: {
    fullName: author => {
      return author.authorfirst + " " + author.authorlast
    },
  },
}
