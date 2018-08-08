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
