/**
 * For experimentation with GraphQL's SDL language. SDL, which stands for Schema
 * Definition Language, is the native language that GraphQL "speaks". It's a
 * simple, human-readable document that outlines the relationship between domain
 * types. This has benefits for prototyping, but it gets messy at scale.
 *
 * See: https://www.apollographql.com/docs/apollo-server/schema/schema/#the-schema-definition-language
 */

import express from "express"
import { ApolloServer } from "apollo-server-express"
import { typeDefs, resolvers } from "./schema/sdl-example"

const { PORT } = process.env
const app = express()

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.applyMiddleware({
  app,
})

app.listen(PORT, () => {
  console.log(
    `[graphql-server] Booted at http://localhost:${PORT}${server.graphqlPath}`
  )
})
