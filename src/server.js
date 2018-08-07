const http = require("http")
const router = require("./router")
const server=http.createServer(router);
const port = process.env.PORT || 7000;
server.listen(port,()=>{

    console.log("Connected To Port :" + 7000);
    
})