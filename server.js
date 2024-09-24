require('dotenv').config()
const express=require('express')
const app=express()
const router=require('./routes/projectRoute')
const projects=require('./models/projectModel')
const users=require('./models/userNodel')
const dbconfig=require('./conjig/db')
app.use(express.json())

const port =process.env.PORT || 7777



app.use('/projects',router)

app.get('/',(req,res)=>{
    res.status(200).json({message:"HEllo world"})
})

app.listen(port,()=>{
    console.log(`server running on : ${port}`)
})