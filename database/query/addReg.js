const dbConnection = require("../db_connection")

const addReg=(newReg,cb)=>{
  console.log(newReg);
  

  let sql = {

    text : "select * from students where id = $1",
    values:[newReg.std_id]
  }
  dbConnection.query(sql,(err,res)=>{
    if(err){
        cb(err)
    }
    else{
      if(res.rowCount == 0)
      cb(new Error ('No student with this id, Please register the student first'))
      else{
        sql = {

          text : "INSERT INTO register (std_id,course_name,trainer_name) VALUES ($1,$2,$3)",
          values:[newReg.std_id,newReg.course_name,newReg.trainer_name]
        } 
       
        dbConnection.query(sql,(err,res)=>{
            if(err){
                cb(err)
            }
            else{
              cb(null,res.rowCount)
            }
        })
      }
    }
  })

   
}

module.exports=addReg
