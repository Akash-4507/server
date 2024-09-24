const mongoose =require('mongoose')
mongoose.connect(process.env.MONGOURL || "mongodb+srv://akashanand9790:Akman1234@in-aws.a2ffo.mongodb.net/?retryWrites=true&w=majority&appName=in-AWS")
const connection=mongoose.connection;
connection.on('connected',()=>{
    console.log("db connected ")
})

connection.on('error',()=>{
   console.log("db error")
})

module.exports = mongoose