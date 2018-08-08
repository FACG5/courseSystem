const fs = require("fs");
const path = require("path");
const getStudents = require("../database/query/getStudents");
const getReg = require("../database/query/getReg");
const addStudent = require("../database/query/addStudent")

handlePage = (target, req, res) => {
  const reqPage = {
    home: "public/index.html",
    static: req.url
  };
  fs.readFile(path.join(__dirname, "..", reqPage[target]), (err, file) => {
    res.writeHead(200);

    if (err) throw err;
    else {
      res.end(file);
    }
  });
};

const loadStudentsPage = response => {
  getStudents((err, res) => {
    if (err) {
      response.end(err);
    } else {
      response.end(JSON.stringify(res));
    }
  });
};

const loadRegisterPage = response => {
  getReg((err, res) => {
    if (err) {
      response.end(err);
    } else {
      response.end(JSON.stringify(res));
    }
  });
};

const addingStudent=(request,response)=>{
let newStd = ""
request.on("data",chunk=>{

    newStd+=chunk;
})
request.on("end",()=>{
 newStd= JSON.parse(newStd);
 addStudent(newStd,(err,res)=>{
     if(err){
        response.end(err)  
     }
     else{
        response.end(res)
     }
 })
    
})

}

module.exports = { handlePage, loadStudentsPage, loadRegisterPage,addingStudent };
