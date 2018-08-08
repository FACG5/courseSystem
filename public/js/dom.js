const getStudent = document.getElementById("getStudent");

getStudent.addEventListener("click", e => {
  request("GET", "/students", null, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res.rows);
    }
  });
});

const getReg = document.getElementById("getRegistration");
getReg.addEventListener("click", element => {
  request("Get", "/register", null, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res.rows);
    }
  });
});

const name = document.getElementById("name");
const surName = document.getElementById("surName");
const gender = document.getElementById("gender");

const addStudent = document.getElementById("addStudent");

addStudent.addEventListener("click", e => {
  e.preventDefault();
  let newStd = {
    name: name.value,
    surname: surName.value,
    gender: gender.value
  };

  request("POST", "/addStudent", JSON.stringify(newStd), (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
});

document.getElementById("deleteStudent").addEventListener("click", e => {
  e.preventDefault();
  let deleteStudent =document.getElementById("deleteName").value

  request("POST", "/deleteStudent", deleteStudent, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
});


const std_id = document.getElementById('std_id')
const course_name = document.getElementById('course_name')
const trainer_name = document.getElementById('trainer_name')
const addRegister = document.getElementById('addRegister')

addRegister.onclick = ()=>{

  const regdata = {
    std_id: std_id.value,
    course_name: course_name.value,
    trainer_name: trainer_name.value
  }

  request("POST", "/addRegister", JSON.stringify(regdata), (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
}



document.getElementById("deleteRegister").addEventListener("click", e => {
  let deleteregid =document.getElementById("deleteregid").value;

  request("POST", "/deleteStudent", deleteregid, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
});

