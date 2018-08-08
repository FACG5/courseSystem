const tape = require("tape");
const bulid_db = require("../database/db_build");
const getStudents = require("../database/query/getStudents");
const getReg = require("../database/query/getReq");
const addStudent = require("../database/query/addStudent")

tape("Testing The Length of Result about student table", t => {
  bulid_db((err, res) => {
    getStudents((err, res) => {
      t.deepEqual(Object.keys(res.rows[0]) , ['id' , 'first_name' ,'surname','gender'] , 'They records shouls hold the proper properties')
      t.equal(res.rows[2].first_name , 'donia' , 'it should test data \'donia\'')
      t.error(err);
      t.equal(res.rows.length > 0, true, "DB Should Have Rows inside");
      t.end();      
    });
  });
});

tape("Testing The Length of Result about register table", t => {
  bulid_db((err, res) => {
    getReg((err, res) => {
      t.error(err);
      t.equal(res.rows.length > 0, true, "DB Should Have Rows inside");
      t.end();      
    });
  });
});

tape("Testing The the add student Model function", t => {
  bulid_db((err, res) => {
    addStudent({name:'eslam' , surname:'jamal' , gender:'male'} , (err, res) => {
      t.error(err , 'Student Added Successfully');
      t.equal(res.rows[0].surname , 'jamal' , 'it should test data \'jamal\'')
      t.end();      
    });
  });
});




