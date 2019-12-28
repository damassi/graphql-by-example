const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const OpenBrowserPlugin = require("open-browser-webpack-plugin")

module.exports = {
  webpack: (config, _options, _webpack) => {
    config.resolve = {
      extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    }

    /**
     * Add type-checking into Webpack pipeline
     */
    config.plugins.push(
      new ForkTsCheckerWebpackPlugin({
        formatter: "codeframe",
        formatterOptions: "highlightCode",
        tslint: false,
        checkSyntacticErrors: true,
        watch: ["./src"],
      }),
      new OpenBrowserPlugin({
        url: `http://localhost:4000/graphql`,
        delay: 3000,
      })
    )

    /**
     * Enable TypeScript support via babel
     */
    config.module.rules.push({
      test: /\.(j|t)sx?$/,
      include: [/src/],
      use: [
        {
          loader: "babel-loader",
        },
      ],
    })

    return config
  },
}
