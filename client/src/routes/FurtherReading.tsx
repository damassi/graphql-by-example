import React from "react"
import { Box, Text, Flex } from "rebass"
import { Spacer } from "../components/Spacer"

export const FurtherReading = props => {
  return (
    <Box>
      <Text fontSize={3}>
        The source code for this demo app covers a few different areas, from
        GraphQL, to React to design systems as well as lays out some common
        patterns for use.
      </Text>

      <Spacer my={4} />

      <Text fontSize={2}>
        To learn more, check out the source-code for the{" "}
        <a
          href="https://github.com/damassi/graphql-presentation/tree/master/server"
          target="_blank"
          rel="noopener noreferrer"
        >
          server-side
        </a>{" "}
        as well as{" "}
        <a
          href="https://github.com/damassi/graphql-presentation/tree/master/client"
          target="_blank"
          rel="noopener noreferrer"
        >
          client
        </a>
        , and see the documentation links below:
      </Text>

      <Spacer my={4} />

      <Flex flexWrap="wrap" ml={-2} mr={-2}>
        {links.map(link => {
          return <TextBlock {...link} />
        })}
      </Flex>
    </Box>
  )
}

const links = [
  {
    tech: "GraphQL",
    link: "https://graphql.org/",
    description: `GraphQL is a query language for APIs and a runtime for fulfilling
      those queries with your existing data. GraphQL provides a complete
      and understandable description of the data in your API, gives
      clients the power to ask for exactly what they need and nothing
      more, makes it easier to evolve APIs over time, and enables
      powerful developer tools.`,
  },
  {
    tech: "Apollo Server",
    link: "https://www.apollographql.com/docs/apollo-server/",
    description: `Apollo Server is the best way to quickly build a production-ready,
      self-documenting API for GraphQL clients, using data from any
      source. It's open-source and works great as a stand-alone server,
      an addon to an existing Node.js HTTP server, or in "serverless"
      environments.`,
  },
  {
    tech: "Apollo Client",
    link: "https://www.apollographql.com/docs/react/",
    description: `Apollo Client is a complete state management library for
      JavaScript apps. Simply write a GraphQL query, and Apollo Client
      will take care of requesting and caching your data, as well as
      updating your UI. Fetching data with Apollo Client guides you to
      structure your code in a predictable, declarative way consistent
      with modern React best practices. With Apollo, you can build
      high-quality features faster without the hassle of writing data
      plumbing boilerplate.`,
  },
  {
    tech: "React.js",
    link: "https://reactjs.org/",
    description: `React makes it painless to create interactive UIs. Design simple
      views for each state in your application, and React will
      efficiently update and render just the right components when your
      data changes. Declarative views make your code more predictable
      and easier to debug.`,
  },
  {
    tech: "Backpack",
    link: "https://github.com/jaredpalmer/backpack",
    description: `Backpack is minimalistic build system for server-side Node.js
      apps. Inspired by Facebook's create-react-app, Zeit's Next.js, and
      Remy's Nodemon, Backpack lets you create modern Node.js apps and
      services with zero configuration. Backpack handles all the
      file-watching, live-reloading, transpiling, and bundling, so you
      don't have to. It comes with a few conventions defaults (like
      support for the latest JavaScript awesomeness (i.e. async/await,
      object rest spread, and class properties)), but everything can be
      customized to fit your project's needs.`,
  },
  {
    tech: "Create React App",
    link: "https://create-react-app.dev/",
    description: `Create React App is an officially supported way to create
      single-page React applications. It offers a modern build setup
      with no configuration.`,
  },
  {
    tech: "Reach Router",
    link: "https://reach.tech/router",
    description: `Yet another React-based router implementation from the chaos
      makers behind React Router. (Note that yet again the community has
      been forked because Reach Router and React Router decided to
      resolve their differences and reunite. Sigh.`,
  },
  {
    tech: "Rebass",
    link: "https://rebassjs.org/",
    description: (
      <span>
        React primitive UI components built with{" "}
        <a
          href="https://styled-system.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Styled System
        </a>
      </span>
    ),
  },
]

const TextBlock: React.FC<{
  link: string
  tech: string
  description: string | JSX.Element
}> = ({ link, tech, description }) => {
  return (
    <Box width="50%" p={2}>
      <Box>
        <Text fontSize={2} fontWeight="bold">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {tech}
          </a>
        </Text>
      </Box>
      <Box>
        <Text fontSize={1}>{description}</Text>
      </Box>
    </Box>
  )
}
