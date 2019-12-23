import { Sequelize } from "sequelize"
import { User, initUser } from "./User"

/**
 * Export SQL orm to be used throughout app
 */
export const sequelize = new Sequelize("sqlite::memory:")

/**
 * Load bootstrap data
 */
export async function bootstrapDatabase() {
  return new Promise((resolve, reject) => {
    initUser(sequelize)

    sequelize
      .sync()
      .then(() =>
        User.create({
          username: "janedoe",
        })
      )
      .then(jane => {
        resolve(jane.toJSON())
      })
      .catch(error => {
        reject(error)
      })
  })
}
