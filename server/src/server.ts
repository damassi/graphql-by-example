import express from "express"
import cors from "cors"
import { ApolloServer } from "apollo-server-express"
import { typeDefs, resolvers } from "./schema"
import { router as userRoutes } from "./resources/User"

const { PORT } = process.env
const app = express()

// Mount middleware
app.use(express.json())
app.use(cors())

// Mount RESTful routes
app.use(userRoutes)

// Mount GraphQL server
// See: https://www.apollographql.com/docs/apollo-server/api/apollo-server/
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.applyMiddleware({ app })

export function start() {
  app.listen(PORT, () => {
    console.log(
      `[graphql-server] Booted at http://localhost:${PORT}${server.graphqlPath}`
    )
  })
}
