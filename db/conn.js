const mongoose = require("mongoose");

const url ='mongodb://127.0.0.1:27017/upload';

mongoose.connect(url,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=>console.log("DATABASE connected")).catch((err)=> console.log("error" + err.message))