require("dotenv").config()

const { bootstrap } = require("./db")
const { start } = require("./server")

bootstrap().then(start)
