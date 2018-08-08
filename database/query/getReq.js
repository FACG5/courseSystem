const db_Connection = require("../db_connection");
const getReg = cb => {
  db_Connection.query(
    "SELECT register.id ,concat(students.first_name ,' ', students.surname) as fullname, register.trainer_name, register.course_name FROM students inner join register on students.id = register.std_id",
    (err, res) => {
      if (err) {
        cb(err);
      } else {
        cb(null, res);
      }
    }
  );
};

module.exports = getReg;
