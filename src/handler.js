const fs = require("fs");
const path = require("path");
const getStudents = require("../database/query/getStudents");
const getReg = require("../database/query/getReg");
const addStudent = require("../database/query/addStudent");
const deleteStudent = require("../database/query/deleteStudent");
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
     response.end(JSON.stringify({ err: err }))   
    } else {
       response.end(JSON.stringify({ err: null, result: JSON.stringify(res) })) 
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
  let newStd = "";
  request.on("data", chunk => {
    newStd += chunk;
  });
  request.on("end", () => {
    newStd = JSON.parse(newStd);

    if (newStd.name && newStd.surname && newStd.gender) {
      if (newStd.gender == "male" || newStd.gender == "female") {
        addStudent(newStd, (err, res) => {
          if (err) {
            response.end(JSON.stringify({ err: err }));
          } else {
            response.end(
              JSON.stringify({ err: null, result: JSON.stringify(res) })
            );
          }
        });
      } else {
        response.end(
          JSON.stringify({ err: "gender should be male or female" })
        );
      }
    } else {
      response.end(JSON.stringify({ err: "Please Enter Data ! " }));
    }
  });
};

const deletingStudent = (request, response) => {
  let deleteStuentId = "";
  request.on("data", chunk => {
    deleteStuentId += chunk;
  });
  request.on("end", () => {
    console.log(typeof deleteStuentId);

    deleteStudent(Number(deleteStuentId), (err, res) => {
      if (err) {
        response.end(JSON.stringify({err:err}));
      } else {
        if (res == 0) {
            response.end(JSON.stringify({err:"Student Not Found !"}));

        }
        else{
            response.end(JSON.stringify({err:null,result:"Student Deleted"}));

        }
    }
    });
  });
};

module.exports = {
  handlePage,
  loadStudentsPage,
  loadRegisterPage,
  addingStudent,
  deletingStudent
};
