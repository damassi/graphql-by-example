import express from "express"
import { ApolloServer } from "apollo-server-express"
import { typeDefs, resolvers } from "./schema"
import { router as userRoutes } from "./models/User"
import { AppAPI } from "./datasources/AppAPI"
import { BookAPI } from "./datasources/BookAPI"

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

  /**
   * DataSources are used to communicate with REST endpoints and handle things
   * like N+1 waterfalls, caching, etc
   *
   * See: https://www.apollographql.com/docs/apollo-server/data/data-sources/#rest-data-source
   */
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
