import express from "express"
import { ApolloServer } from "apollo-server-express"

const { PORT } = process.env
const app = express()

export function bootServer(mode: "sdl" | "gql") {
  let server: ApolloServer

  /**
   * For experimentation with GraphQL's SDL language. SDL, which stands for
   * Schema Definition Language, is the native language that GraphQL "speaks".
   * It's a simple, human-readable document that outlines the relationship
   * between domain types.
   *
   * See: https://www.apollographql.com/docs/apollo-server/schema/schema/#the-schema-definition-language
   */
  if (mode === "sdl") {
    const { typeDefs, resolvers } = require("./schema/sdl")

    server = new ApolloServer({
      typeDefs,
      resolvers,
    })

    /**
     * Via the `graphql` package, it's possible to build out the schema using
     * code, which then generates an SDL document.
     *
     * While more verbose than SDL, this scales well due to types and resolvers
     * all being one unit while also integrating nicely with TypeScript. Many
     * underlying ecosystem tools use this package as the bottom-most layer and
     * build abstractions around it.
     *
     * See: https://github.com/graphql/graphql-js
     */
  } else {
    const { schema } = require("./schema")
    server = new ApolloServer({ schema })
  }

  server.applyMiddleware({ app })

  app.listen(PORT, () => {
    console.log(
      `[graphql-server] Booted at http://localhost:${PORT}${server.graphqlPath}`
    )
  })
}
