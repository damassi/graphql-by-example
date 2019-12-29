import { RESTDataSource } from "apollo-datasource-rest"

/**
 * Create an instance for communicating with internal REST routes.
 *
 * The RESTDataSource handles response caching so as to avoid the N+1 problem.
 * See: https://www.apollographql.com/docs/apollo-server/data/data-sources/#rest-data-source
 *
 * See DataLoader for related material: https://github.com/graphql/dataloader
 */
export class AppAPI extends RESTDataSource {
  baseURL = `http://localhost:${process.env.PORT}`
}
