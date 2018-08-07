const handlers = require('./handler')

const router = (req,res)=>{

    const endpoint = req.url

    if(endpoint=='/'){

        handlers.handlePage("home",req,res)
    }
    else if(endpoint.includes("public")){
        handlers.handlePage("static",req,res)


    }
    else if(endpoint=="/students"){
        handlers.loadStudentsPage(res)

    }
    else if(endpoint=="/register"){


    }
    else{


    }
}


module.exports=router;
