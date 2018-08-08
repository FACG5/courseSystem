const dbConnection = require("../db_connection")

const deleteReg = (id, cb) => {

    let sql = {
        text: "DELETE FROM register WHERE id = $1",
        values: [id]
    };
 

    dbConnection.query(sql1, (err, res) => {

                if (err) {
                    cb(err)
                }
                else {
                    cb(null,res.rowCount)
                }
           

    })
}

module.exports = deleteReg
