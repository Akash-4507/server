const mongoose=require('mongoose')
const projectschema=new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        desc:{
            type:String,
            required:true
        }
    })

    const projects=mongoose.model("projects",projectschema)
    module.exports=projects;