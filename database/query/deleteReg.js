const dbConnection = require("../db_connection")

const deleteReg = (id, cb) => {

    let sql = {
        text: "DELETE FROM register WHERE id = $1",
        values: [id]
    };
 

    dbConnection.query(sql, (err, res) => {

                if (err) {
                    cb(err)
                }
                else {
                    console.log(res.rowCount);
                    
                    cb(null,res.rowCount)
                }
           

    })
}

module.exports = deleteReg
