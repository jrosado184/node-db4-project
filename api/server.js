const express = require("express");
const helmet = require("helmet");
const recipeRouter = require("./recipeRouter");

const server = express();

server.use(express.json());
server.use(helmet());
server.use("/api/recipes", recipeRouter);

module.exports = server;
