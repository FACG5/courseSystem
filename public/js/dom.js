const studentTable = document.getElementById("studentTable");
const registerTable = document.getElementById("registerTable");
const regStdName = document.getElementById("regStdName");
const regButton = document.getElementById("regButton");
const trainerSelect = document.getElementById("trainerSelect");
const courseSelect = document.getElementById("courseSelect");

const regCourse = id => {
  regButton.addEventListener("click", e => {
    e.preventDefault();

    const trainerSelect = document.getElementById("trainerSelect");
    const courseSelect = document.getElementById("courseSelect");
    const registerData = {
      std_id: id,
      trainer_name: trainerSelect.value,
      course_name: courseSelect.value
    };

    request(
      "POST",
      "/addRegister",
      JSON.stringify(registerData),
      (err, res) => {
        if (err) {
          alertMessage(err);
        } else {
          clearTable(
            registerTable,
            " <tr> <th>Full Name</th> <th>Course</th> <th>Trainer</th> <th>Delete  </th></tr>"
          );
          getRegister();
          alertMessage(res);
        }
      }
    );
  });
};

const getStudent = () => {
  request("GET", "/students", null, (err, res) => {
    if (err) {
    } else {
      res = JSON.parse(res);
      const studentArray = res.rows;

      clearTable(
        studentTable,
        " <tr> <th>Name</th> <th>Surname</th> <th>Gender</th> <th>Delete </th><th>Reg </th></tr>"
      );
      renderStudentTable(studentArray);
    }
  });
};

regCourse();
const getRegister = () => {
  request("GET", "/register", null, (err, res) => {
    if (err) {
    } else {
      res = JSON.parse(res);

      const registerArray = res.rows;

      clearTable(
        registerTable,
        " <tr> <th>Full Name</th> <th>Course</th> <th>Trainer</th> <th>Delete  </th></tr>"
      );

      renderRegisterTable(registerArray);
    }
  });
};
getStudent();
getRegister();

var renderRegisterTable = results => {

  results.forEach(element => {
    const tr = document.createElement("tr");
    const tdName = document.createElement("td");
    const tdcoursename = document.createElement("td");
    const tdtrainername = document.createElement("td");
    const tdDelete = document.createElement("td");

    tdName.textContent = element.fullname;
    tdcoursename.textContent = element.course_name;
    tdtrainername.textContent = element.trainer_name;
    tdDelete.classList = "options";
    tdDelete.innerHTML = '<i class="fas fa-trash-alt"></i>';

    tr.appendChild(tdName);
    tr.appendChild(tdcoursename);
    tr.appendChild(tdtrainername);
    tr.appendChild(tdDelete);

    tdDelete.addEventListener("click", e => {
      request("POST", "/deleteRegister", element.id, (err, res) => {

        if (err) {
          alertMessage(err);
        } else {
          alertMessage(res);
          clearTable(
            registerTable,
            " <tr> <th>Full Name</th> <th>Course</th> <th>Trainer</th> <th>Delete  </th></tr>"
          );

          getRegister();
        }
      });
    });
    registerTable.appendChild(tr);
  });
};

var renderStudentTable = results => {
  results.forEach(element => {
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

    tdDelete.addEventListener("click", e => {
      request("POST", "/deleteStudent", element.id, (err, res) => {
        if (err) {
          alertMessage(err);
        } else {
          alertMessage(res);
          clearTable(
            studentTable,
            " <tr> <th>Name</th> <th>Surname</th> <th>Gender</th> <th>Delete </th><th>Reg </th></tr>"
          );
          getStudent();
        }
      });
    });

    tdRegister.addEventListener("click", e => {
      regStdName.value = element.first_name + " " + element.surname;
      // regStdName.setAttribute('data', "std_id: '"+element.id+"'");
      const regStdId = element.id;
      regCourse(regStdId);
    });

    studentTable.appendChild(tr);
  });
};


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
      alertMessage(err);
    } else {
      getStudent();
    }
  });
});

const clearTable = (table, header) => {
  table.innerHTML = header;
};

const alertMessage = message => {
  alertify.alert(message, function() {});
};
