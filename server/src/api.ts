import fetch from "axios"

export const api = {
  /**
   * Create fetch instance for communicating with internal REST routes
   */
  app: fetch.create({
    baseURL: `http://localhost:${process.env.PORT}`,
  }),

  /**
   * Create fetch instance for communicating with public RandomHouse books REST API
   */
  book: fetch.create({
    baseURL: "https://reststop.randomhouse.com/resources/",
    auth: {
      username: "testuser",
      password: "testpassword",
    },
    responseType: "json",
  }),
}
