const mysql = require('mysql2');
require('dotenv').config();
const conn = mysql.createPool({
    host: process.env.DB_HOST || 'sql12.freesqldatabase.com',
    user: process.env.DB_USER || 'sql12792315',
    password: process.env.DB_PASSWORD || 'xJUXRy3mFa',
    database: process.env.DB_NAME || 'sql12792315'
});

module.exports = conn.promise();
