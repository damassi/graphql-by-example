import express from "express"
import { ApolloServer } from "apollo-server-express"
import { typeDefs, resolvers } from "./schema"
import { router as userRoutes } from "./resources/User"
import { AppAPI, BookAPI } from "./api"

const { PORT } = process.env
const app = express()

/**
 * Mount middleware
 */
app.use(express.json())

/**
 * Mount RESTFul routes
 */
app.use(userRoutes)

/**
 * Mount GraphQL server
 * See: https://www.apollographql.com/docs/apollo-server/api/apollo-server/
 */
const server = new ApolloServer({
  typeDefs,
  resolvers,

  // See: https://www.apollographql.com/docs/apollo-server/data/data-sources/#rest-data-source
  dataSources: () => {
    return {
      appAPI: new AppAPI(),
      bookAPI: new BookAPI(),
    }
  },
})

server.applyMiddleware({ app })

export function start() {
  app.listen(PORT, () => {
    console.log(
      `[graphql-server] Booted at http://localhost:${PORT}${server.graphqlPath}`
    )
  })
}
