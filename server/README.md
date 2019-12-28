## Server-side GraphQL Example App

This folder covers the server-side portion of the GraphQL demonstration, built with [Apollo Server](https://www.apollographql.com/docs/apollo-server/) and compiled via [Backpack](https://github.com/jaredpalmer/backpack), a zero-config server-side build pipeline.

### Development

```sh
yarn install
yarn start
```

This starts a server at `http://localhost:4000`. Open `http://localhost:4000/graphql` to view GraphQL Playground.

<img width="824" alt="Screen Shot 2019-12-27 at 8 43 45 PM" src="https://user-images.githubusercontent.com/236943/71538993-c5d84f00-28e9-11ea-8c0f-b1ec51da5812.png">

Changes to source-code are automatically hot-reloaded via Webpack, so restarts aren't required.

> Note that [TypeScript](https://www.typescriptlang.org/) support has been added by adding a custom `.babelrc` file and updating `backpack.config.js`'s Webpack setup to support `.ts` files via `babel-loader`.
