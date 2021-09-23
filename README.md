# GraphQL by Example

This repo showcases how to build a full-stack server/client GraphQL app via Apollo, React, and TypeScript, and accompanies a [presentation that can be viewed here](https://github.com/damassi/presentations/raw/master/graphql-presentation.pdf). 

Examples include building a GraphQL schema around a local REST server pointed at a database, as well as integrating external service endpoints in an API-gateway-like fashion.

> The source within is meant to help those curious about GraphQL get started quickly through clear and simple examples, but note that the patterns are not exhaustive; GraphQL is a large and evolving topic, and as such many details have been intentionally left blank. Check out Apollo's excellent [documentation](https://www.apollographql.com/) to learn more.

## Setup

First, clone the repo locally and run:

```sh
$ yarn setup  # or npm run setup
```

This will install all of the necessary dependencies for the server and client portions of the app. Once that's complete, run:

```sh
$ yarn start # or npm start
```

This will

- Boot the web-app at `http://localhost:3000`
- Launch a backend server at `http://localhost:4000`
- Open up a GraphQL Playground interface at `http://localhost:4000/graphql`

## App Structure

The app is composed of two sub-apps: a [server](/server) and a [client](/client).

### [Server](/server)

The server is built with [Apollo Server](https://www.apollographql.com/docs/apollo-server/) and compiled via [Backpack](https://github.com/jaredpalmer/backpack), a create-react-app-like zero-config server-side build pipeline.

<img width="824" alt="Screen Shot 2019-12-27 at 8 43 45 PM" src="https://user-images.githubusercontent.com/236943/71538993-c5d84f00-28e9-11ea-8c0f-b1ec51da5812.png">

Changes to source-code are automatically hot-reloaded via Webpack, so restarts aren't required.

> Note that [TypeScript](https://www.typescriptlang.org/) support has been added by adding a custom `.babelrc` file and updating [`backpack.config.js`](https://github.com/damassi/graphql-by-example/blob/master/server/backpack.config.js#L30-L38)'s Webpack setup to support `.ts` files via `babel-loader`.

### [Client](/client)

The client is built with [Apollo Client](https://www.apollographql.com/docs/react/) and compiled via [Create React App](https://create-react-app.dev/).

The UI is split across a few different routes. It shows how we can easily incorporate calls to external service endpoints -- in this case Penguin's public REST API -- into our schema. And in the below, we're using GraphQL to communicate with our [local server](/server)'s database and using mutations to add new records which we can then retrieve via a query:

<img width="712" alt="Screen Shot 2019-12-27 at 8 59 53 PM" src="https://user-images.githubusercontent.com/236943/71539556-c32e2780-28f2-11ea-8071-535cd9da5b39.png">

Additionally, this app demos some common UI / dev patterns, such as

- [TypeScript](https://www.typescriptlang.org/)
- Design System via [Rebass](https://rebassjs.org/) and [Styled System](https://styled-system.com/)
- Routing via [Reach Router](https://reach.tech/router)
- CSS-in-JS via [Styled-Components](styled-components.com)
