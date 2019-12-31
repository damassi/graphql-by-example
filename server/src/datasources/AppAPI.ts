import { RESTDataSource } from "apollo-datasource-rest"

/**
 * Create a DataSource for communicating with internal REST routes.
 *
 * DataSources manage REST requests so as to avoid things like the N+1 problem.
 * See: https://www.apollographql.com/docs/apollo-server/data/data-sources/#rest-data-source
 *
 * Related: https://github.com/graphql/dataloader
 */
export class AppAPI extends RESTDataSource {
  baseURL = `http://localhost:${process.env.PORT}`
}
