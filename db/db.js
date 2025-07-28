const mysql=require('mysql2');

const conn=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'pracproj'
})

module.exports=conn.promise();