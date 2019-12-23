/**
 * Schema scaffold around the Penguin RandomHouse books public API.
 * See: http://www.penguinrandomhouse.biz/webservices/rest/
 */

import gql from "graphql-tag"
import axios from "axios"
import { User } from "../models/User"

/**
 * Set config defaults when creating the instance
 */
const fetch = axios.create({
  baseURL: "https://reststop.randomhouse.com/resources/",
  auth: {
    username: "testuser",
    password: "testpassword",
  },
  responseType: "json",
})

/**
 * Construct a schema, using GraphQL schema language
 */
export const typeDefs = gql`
  # The author of a work
  type Author {
    authorfirst: String
    authorlast: String
    authorid: Int
    description: String
    fullName: String
  }

  # A literary work
  type Work {
    series: String
    workid: Int
    titleweb: String
    authorweb: String
  }

  # Application user
  type User {
    username: String
  }

  type Query {
    author(id: Int!): Author
    authors(firstName: String = "", lastName: String = ""): [Author]
    work(id: Int!): Work
    works(keyword: String!): [Work]
    users: [User]
  }
`

/**
 * Provide resolver functions for your schema fields
 */
export const resolvers = {
  Query: {
    author: async (_parent, args, _context, _info) => {
      const response = await fetch.get(`/authors/${args.id}`)
      return response.data
    },

    authors: async (_parent, args) => {
      if (!(args.firstName || args.lastName)) {
        throw new Error(
          "When querying all authors a `firstName` or a `lastName` argument is " +
            "required in order to narrow the results."
        )
      }

      const response = await fetch.get(`/authors`, {
        params: {
          firstName: args.firstName,
          lastName: args.lastName,
        },
      })

      return response.data.author
    },

    work: async (_parent, args) => {
      const response = await fetch.get(`/works/${args.id}`)
      return response.data
    },

    works: async (_parent, args) => {
      const response = await fetch.get(`/works`, {
        params: {
          search: args.keyword,
        },
      })

      return response.data.work
    },

    users: async () => {
      const users = await User.findAll()
      return users
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
