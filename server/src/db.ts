import { Sequelize } from "sequelize"
import { User, makeUser } from "./models/User"

const SQL_MODE = "sqlite::memory:"

/**
 * Export ORM to be used throughout app
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
export function bootstrap() {
  return new Promise(async (resolve, reject) => {
    try {
      await sequelize.sync()
      User.create({
        username: "asa",
      })
      resolve()
    } catch (error) {
      reject(error)
    }
  })
}
