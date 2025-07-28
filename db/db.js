const mysql = require('mysql2');
require('dotenv').config();
const conn = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'pracproj'
});

module.exports = conn.promise();
