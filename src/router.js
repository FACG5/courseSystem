const handlers = require("./handler");

const router = (req, res) => {
  const endpoint = req.url;

  if (endpoint == "/") {
    handlers.handlePage("home", req, res);
  } else if (endpoint.includes("public")) {
    handlers.handlePage("static", req, res);
  } else if (endpoint == "/students") {
    handlers.loadStudentsPage(res);
  } else if (endpoint == "/register") {
    handlers.loadRegisterPage(res);
  }else if (endpoint==="/addStudent"){
handlers.addingStudent(req,res);
  } else if (endpoint==="/deleteStudent"){
    handlers.deletingStudent(req,res);
  } else if (endpoint==="/addRegister"){
    handlers.addingRegister(req,res);
      } else if (endpoint==="/deleteRegister"){
        handlers.deletingRegister(req,res);
      } 
  
  
  else {
  }
};

module.exports = router;
