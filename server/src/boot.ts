import express from "express"
import { ApolloServer } from "apollo-server-express"
import * as sdl from "./schema/fullSDLSchema"

const { PORT } = process.env

const app = express()

const server = new ApolloServer({
  typeDefs: sdl.typeDefs,
  resolvers: sdl.resolvers,
})

server.applyMiddleware({
  app,
})

app.listen(PORT, () => {
  console.log(
    `[graphql-server] Booted at http://localhost:${PORT}${server.graphqlPath}`
  )
})
