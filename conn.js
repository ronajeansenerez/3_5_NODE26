
const mysql = require('mysql');

// creating a connection to database
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ui_3_5_26"
});

module.exports = conn;
