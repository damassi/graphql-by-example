import React from "react"
import { Box, Text, Flex } from "rebass"
import { Spacer } from "../components/Spacer"

export const FurtherReading = props => {
  return (
    <Box>
      <Text fontSize={3}>
        The source code for this demo app covers a few different areas, from
        GraphQL to React to design systems and lays out some common patterns for
        use.
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
        , and see the links to documentation below:
      </Text>

      <Spacer my={4} />

      <Flex flexWrap="wrap" ml={-2} mr={-2}>
        {links.map(link => {
          return <TextBlock {...link} />
        })}
      </Flex>

      <Text my={3} fontSize={1} color="#666">
        <i>(Description blurbs taken from links above.)</i>
      </Text>
    </Box>
  )
}

const links = [
  {
    tech: "GraphQL",
    link: "https://graphql.org/",
    description: `GraphQL provides a complete
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
      updating your UI.`,
  },
  {
    tech: "Backpack",
    link: "https://github.com/jaredpalmer/backpack",
    description: `Backpack is zero-config minimalistic build system for server-side Node.js
      apps. Inspired by Facebook's create-react-app, Zeit's Next.js, and
      Remy's Nodemon, Backpack lets you create modern Node.js apps and
      services with with a single command.`,
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
    tech: "Create React App",
    link: "https://create-react-app.dev/",
    description: `Create React App offers an officially-supported, zero-config
      build setup for React Applications.`,
  },
  {
    tech: "Styled Components",
    link: "https://github.com/styled-components/styled-components",
    description: `Visual primitives for the component age. Use the best bits of
      ES6 and CSS to style your apps without stress. styled-components allows you
      to write actual CSS code to style your components. It also removes the
      mapping between components and styles – using components as a low-level
      styling construct could not be easier! `,
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
    tech: "Prettier",
    link: "https://prettier.io/",
    description: `Prettier is an opinionated zero-config code formatter that
      removes all original styling and ensures that all outputted code conforms
      to a consistent style.`,
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
        <Text fontSize={1} color="#666">
          {description}
        </Text>
      </Box>
    </Box>
  )
}
