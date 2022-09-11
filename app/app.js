const express = require('express');
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv");
const fs = require("fs");

dotenv.config();


const accessLogStream = require("./src/config/log");
const home = require("./src/routes/home");
const logger = require("./src/config/logger");

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(morgan("dev", { stream : accessLogStream}));
app.use("/", home);

module.exports = app;