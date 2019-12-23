/**
 * Via the `graphql` package, it's possible to build out the schema using code,
 * which then generates an SDL document.
 *
 * While more verbose than SDL, this scales better and integrates nicely with
 * TypeScript. Many underlying ecosystem tools use this package as the bottom-most
 * layer and build abstractions around it.
 *
 * See: https://github.com/graphql/graphql-js
 */

import express from "express"
import { ApolloServer } from "apollo-server-express"
import { schema } from "./schema"

const { PORT } = process.env
const app = express()

const server = new ApolloServer({
  schema,
})

server.applyMiddleware({
  app,
})

app.listen(PORT, () => {
  console.log(
    `[graphql-server] Booted at http://localhost:${PORT}${server.graphqlPath}`
  )
})
