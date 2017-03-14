const {adapter} = require("spirit").node
const route = require("spirit-router")
const http = require("http")

const hello = () => "Hello World!"

const greet = (name) => "Hello, " + name

const app = route.define([
  route.get("/", hello),
  route.get("/:name", ["name"], greet),
])

http.createServer(adapter(app)).listen(3000)
