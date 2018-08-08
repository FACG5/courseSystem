// const getStudent = document.getElementById("getStudent");
const studentTable = document.getElementById("studentTable");

const getStudent = () => {
  request("GET", "/students", null, (err, res) => {
    if (err) {

    } else {
      res=JSON.parse(res)
      const studentArray = res.rows;
      
      clearTable(studentTable);
      studentArray.forEach(element => {
        const tr = document.createElement("tr");
        const tdName = document.createElement("td");
        const tdSurname = document.createElement("td");
        const tdGender = document.createElement("td");
        const tdDelete = document.createElement("td");
        const tdRegister = document.createElement("td");

        tdName.textContent = element.first_name;
        tdSurname.textContent = element.surname;
        tdGender.textContent = element.gender;
        tdDelete.classList = "options";
        tdRegister.classList = "options";
        tdDelete.innerHTML = '<i class="fas fa-trash-alt"></i>';
        tdRegister.innerHTML = '<i class="fas fa-plus"></i>';

        tr.appendChild(tdName);
        tr.appendChild(tdSurname);
        tr.appendChild(tdGender);
        tr.appendChild(tdDelete);
        tr.appendChild(tdRegister);

        tdDelete.addEventListener("click",(e)=>{
request("POST","/deleteStudent",element.id,(err,res)=>{

  if(err){
alertMessage(err)
  }
  else{
alertMessage(res)
clearTable(studentTable);
getStudent();

  }
})


        })

        studentTable.appendChild(tr);
      });
    }
  });
};

getStudent();

// const getReg = document.getElementById("getRegistration");
// getReg.addEventListener("click", element => {
//   request("Get", "/register", null, (err, res) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(res.rows);
//     }
//   });
// });

const name = document.getElementById("newStdName");
const surName = document.getElementById("newStdSurname");
const gender = document.getElementById("newStdGender");

const addStudentButton = document.getElementById("addStudentButton");

addStudentButton.addEventListener("click", e => {
  e.preventDefault();
  let newStd = {
    name: name.value,
    surname: surName.value,
    gender: gender.value
  };

  request("POST", "/addStudent", JSON.stringify(newStd), (err, res) => {
    if (err) {
      alertMessage(err)
    } else {
      getStudent();
    }
  });
});

const clearTable = table => {
  table.innerHTML =
    " <tr> <th>Name</th> <th>Surname</th> <th>Gender</th> <th>Delete </th><th>Reg </th></tr>";
};
// document.getElementById("deleteStudent").addEventListener("click", e => {
//   e.preventDefault();
//   let deleteStudent =document.getElementById("deleteName").value

//   request("POST", "/deleteStudent", deleteStudent, (err, res) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(res);
//     }
//   });
// });
const alertMessage = message=>{

  alertify
  .alert(message, function(){
  });
}