const fs = require("fs");
const path = require("path");
const getStudents = require('../database/query/getStudents')

handlePage = (target,req,res)=>{

    const reqPage = {

        home:"public/index.html",
        static:req.url
    }
fs.readFile(path.join(__dirname,"..",reqPage[target]),(err,file)=>{
res.writeHead(200)

    if(err) throw err;
    else{
        res.end(file)
    }
})
}
const loadStudentsPage = (response)=>{
    getStudents((err,res)=>{

        if(err){
            response.end(err)
        }
        else{
            response.end(JSON.stringify(res))
        }
    })

}





module.exports={handlePage,loadStudentsPage};