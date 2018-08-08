const dbConnection = require("../db_connection")

const deleteStudent = (id, cb) => {

    let sql1 = {

        text: "DELETE FROM register WHERE std_id =$1",
        values: [id]
    }
    let sql2 = {

        text: "DELETE FROM students WHERE id =$1",
        values: [id]
    }

    dbConnection.query(sql1, (err, res) => {
        if (err) {

            cb(err)

        }
        else {
            dbConnection.query(sql2, (err, res) => {

                if (err) {
                    cb(err)
                }
                else {
                    cb(null,res.rowCount)
                }
            })

        }
    })
}

module.exports = deleteStudent
