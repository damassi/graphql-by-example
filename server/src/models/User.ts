import { Model, DataTypes } from "sequelize"

export class User extends Model {}

export function initUser(sequelize) {
  User.init(
    {
      username: DataTypes.STRING,
    },
    { sequelize, modelName: "user" }
  )
}
