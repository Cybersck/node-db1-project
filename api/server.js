const express = require("express");

const db = require("../data/dbConfig.js");
const accountRouter = require('../routes/accountRouter');
const server = express();

server.use(express.json());
server.use('/accounts', accountRouter);
module.exports = server;
