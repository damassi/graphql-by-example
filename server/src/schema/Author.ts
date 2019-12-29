import gql from "graphql-tag"

export const typeDefs = gql`
  type Author {
    authorfirst: String
    authorlast: String
    authorid: Int
    spotlight: String
    fullName: String
    titles: [Title]
  }

  extend type Query {
    author(id: Int!): Author
    authors(firstName: String = "", lastName: String = ""): [Author]
  }
`

export const resolvers = {
  Query: {
    author: async (_parent, args, { dataSources }) => {
      return dataSources.bookAPI.get(`/authors/${args.id}`)
    },

    authors: async (_parent, args, { dataSources }) => {
      if (!(args.firstName || args.lastName)) {
        throw new Error(
          "When querying all authors a `firstName` or a `lastName` argument is " +
            "required in order to narrow the results."
        )
      }

      const response = await dataSources.bookAPI.get(`/authors`, {
        firstName: args.firstName,
        lastName: args.lastName,
      })

      return response.author
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

    titles: async (author, _args, { dataSources }) => {
      return await dataSources.bookAPI.getTitles(author.authorid)
    },
  },
}
