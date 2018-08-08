const fs = require("fs");
const path = require("path");
const getStudents = require("../database/query/getStudents");
const getReg = require("../database/query/getReg");
const addStudent = require("../database/query/addStudent")
const deleteStudent = require("../database/query/deleteStudent")
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

const addingStudent = (request, response) => {
  if (request.method == "POST") { 
  let newStd = ""
  request.on("data", chunk => {

    newStd += chunk;
  })
  request.on("end", () => {
    newStd = JSON.parse(newStd);
    addStudent(newStd, (err, res) => {
      if (err) {
        response.end(err)
      }
      else {
        console.log(res);

        response.end(JSON.stringify(res))
      }
    })

  })

} 

}

const deletingStudent = (request, response) => {
  if (request.method == "POST") { 
  let deleteStuentId = ""
  request.on("data", chunk => {

    deleteStuentId += chunk;
  })
  request.on("end", () => {
    console.log(typeof deleteStuentId);

    deleteStudent(Number(deleteStuentId), (err, res) => {
      if (err) {

        response.end(err)
      }
      else {
if(res==0){
  res = "Student Not Found !"
}
        response.end(JSON.stringify(res))
      }
    })

  })
}

}

module.exports = { handlePage, loadStudentsPage, loadRegisterPage, addingStudent, deletingStudent };
