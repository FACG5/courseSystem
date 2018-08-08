const tape = require("tape");
const bulid_db = require("../database/db_build");
const getStudents = require("../database/query/getStudents");
tape("Testing The Length of Result", t => {
  bulid_db((err, res) => {
    getStudents((err, res) => {
      t.error(err);
      t.equal(res.rows.length > 0, true, "DB Should Have Rows inside");
      t.end();      
    });
  });
});




