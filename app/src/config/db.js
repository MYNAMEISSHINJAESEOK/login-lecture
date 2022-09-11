const mysql = require("mysql");

const db = mysql.createConnection (
    {
    host : "login-lect.c8qwtzqfg1mb.ap-southeast-2.rds.amazonaws.com",
    user : "admin",
    password : "Dlzkfntm12$",
    database: "login_lecture",
    }
);

db.connect();

module.exports = db;