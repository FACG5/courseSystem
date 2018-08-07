const db_Connection = require("../db_connection")
const getSudents = (cb) => {


    db_Connection.query('SELECT * FROM students',(err,res)=>{

        if(err){
            cb(err)

        }
        else{
            cb(null,res.rows)
        }
    })

}

module.exports=getSudents;