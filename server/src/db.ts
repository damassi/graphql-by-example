import { Sequelize } from "sequelize"
import { User, makeUser } from "./resources/User"

const SQL_MODE = "sqlite::memory:"

/**
 * Export sql ORM to be used throughout app
 */
export const sequelize = new Sequelize(SQL_MODE)

/**
 * Initialize models
 */
export const models = [makeUser].map(init => {
  const model = init(sequelize)
  return model
})

/**
 * Load in-memory bootstrap data
 */
export async function bootstrap() {
  return new Promise((resolve, reject) => {
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
