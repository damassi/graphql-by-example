import { Model, DataTypes } from "sequelize"
import express from "express"

/**
 * Create data-model
 */
export class User extends Model {}

export function makeUser(sequelize) {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: DataTypes.STRING,
    },
    { sequelize, modelName: "user" }
  )

  return User
}

/**
 * Create RESTful routes
 */
export const router = express()

router.get("/users", async (_req, res, next) => {
  try {
    const users = await User.findAll()
    res.json(users)
  } catch (error) {
    next(error)
  }
})

router.get("/users/:id", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
    })

    return res.json(user)
  } catch (error) {
    next(error)
  }
})
