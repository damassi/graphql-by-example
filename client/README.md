## Client-side GraphQL Example App

This folder covers the client-side portion of the GraphQL demonstration, built with [Apollo Client](https://www.apollographql.com/docs/react/) and compiled via [Create React App](https://create-react-app.dev/).

### Setup

```sh
yarn install
yarn start
```

The UI is split across a few different routes. In the below, we're using GraphQL to communicate with our [local server](../server)'s database, and using mutations to add new records which we can then retrieve via a query:

<img width="712" alt="Screen Shot 2019-12-27 at 8 59 53 PM" src="https://user-images.githubusercontent.com/236943/71539556-c32e2780-28f2-11ea-8071-535cd9da5b39.png">

And this route shows how we can easily incorporate calls to external service endpoints -- in this case Penguin's public REST API -- into our schema:

<img width="723" alt="Screen Shot 2019-12-27 at 9 02 24 PM" src="https://user-images.githubusercontent.com/236943/71539557-c32e2780-28f2-11ea-9a6a-dec4a295e1c9.png">

Additionally, this application demos some common UI / dev patterns, such as

- TypeScript
- Design System via [Rebass](https://rebassjs.org/) and [Styled System](https://styled-system.com/)
- Routing via [Reach Router](https://reach.tech/router)
- CSS-in-JS via [Styled-Components](styled-components.com)
