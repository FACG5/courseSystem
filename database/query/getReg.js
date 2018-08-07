const db_Connection = require("../db_connection")
const getReg = (cb) => {


    db_Connection.query('SELECT * FROM register',(err,res)=>{

        if(err){
            cb(err)

        }
        else{
            cb(null,res.rows)
        }
    })

}

module.exports=getReg;