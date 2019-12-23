require("dotenv").config()

const { bootServer } = require("./boot")

/**
 * Demonstrates two different ways to build a Schema in GraphQL:
 *  1) via SDL (Schema Definition Language); and
 *  2) via code, which then generates an SDL document
 */
bootServer("sdl")
