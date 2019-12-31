import { RESTDataSource } from "apollo-datasource-rest"

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
