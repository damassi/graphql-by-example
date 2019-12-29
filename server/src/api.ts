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

/**
 * Create fetch instance for communicating with public RandomHouse books REST API
 */
export class BookAPI extends RESTDataSource {
  baseURL = "https://reststop.randomhouse.com/resources/"

  willSendRequest(request) {
    request.headers.set("Accept", "application/json")
  }

  async getTitles(authorid) {
    const response = await this.get("/titles", {
      authorid,
    })
    if (Array.isArray(response?.title)) {
      return response.title
    } else {
      return []
    }
  }
}
