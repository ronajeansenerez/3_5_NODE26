const mysql = require('mysql');

// creating a connection to database
const conn = mysql.createConncetion((req,res) => {

    host: "localhost";
    username: "root";
    password: "";
    database: "ui_3_5_26"
});
