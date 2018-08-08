const dbConnection = require("../db_connection")

const addStudent=(newStd,cb)=>{

  let sql = {

    text : "INSERT INTO students (first_name,surname,gender) VALUES ($1,$2,$3) returning *",
    values:[newStd.name,newStd.surname,newStd.gender]
  } 
  
  dbConnection.query(sql,(err,res)=>{
      if(err){
          cb(err)
      }
      else{
        cb(null, res)

      }
  })
}

module.exports=addStudent
