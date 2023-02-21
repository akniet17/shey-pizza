const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://akosasyl:BFMQ2Akn470gjFqb@cluster0.kuzf4qh.mongodb.net/mern-pizza'

mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull');
})

db.on('error' , ()=>{
    console.log(`Mongo DB Connection failed`);
})

module.exports =mongoose