const fs = require('fs');
const db_connection = require('./db_connection');


const sql = fs.readFileSync(__dirname + "/db_build.sql").toString();


db_connection.query(sql,(err,res)=>{
    if(err) 
    throw err;
    console.log('database was created successfully');
})