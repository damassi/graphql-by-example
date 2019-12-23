// require("dotenv").config()

// Configuration for the vscode-apollo extension and other Apollo tooling.
module.exports = {
  client: {
    service: {
      name: "graphql-example",
      url: "http://localhost:3000", //process.env.GRAPHQL_ENDPOINT,
      // headers: {
      //   "X-APP-TOKEN": process.env.X_APP_TOKEN,
      // },
    },
    includes: ["src/**/*.ts"],
    tagName: "gql",
  },
}
