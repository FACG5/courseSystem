const dbConnection = require("../db_connection")

const addStudent=(newStd,cb)=>{

  let sql = {

    text : "INSERT INTO students (first_name,surname,gender) VALUES ($1,$2,$3)",
    values:[newStd.name,newStd.surname,newStd.gender]
  } 
  
  dbConnection.query(sql,(err,res)=>{
      if(err){
          cb(err)
      }
      else{
<<<<<<< HEAD
cb(null,res.rowCount)
=======
console.log((res));

>>>>>>> d6161b26ccc44496c2fec5d2eed7ab4448fc9e1d
      }
  })
}

module.exports=addStudent
