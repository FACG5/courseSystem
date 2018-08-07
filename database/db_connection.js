const pg = require('pg')

require('env2')('./config.env')

if(!process.env.DB_URL) throw new Error('problem in URL')

const options = { 

    ssl:true,
    connectionString:process.env.DB_URL
}

module.exports=new pg.Pool(options);