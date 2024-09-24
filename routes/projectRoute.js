const express=require('express')
const router=express.Router();
const projects=require("../models/projectModel")

router.get('/all',async (req,res)=>{
    try{
        const fetchedprojects=await projects.find();
        res.status(200).json(fetchedprojects)
    }
    catch(error)
    {
        res.status(500).json(error)
    }
})

router.post('/add',async(req,res)=>{
    try {
        const newprojectdata= new projects(req.body)
        const {title,desc} =newprojectdata
        if(!title || !desc)
        {
            res.status(400).json({message:"title & desc is required "})
        }
        const savedata=await newprojectdata.save()
        res.status(201).json(savedata)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put('/update/:id',async(req,res)=>{
    try{
         const id=req.params.id
        const currentdata=await projects.findOne({_id:id})
        if(!currentdata)
        {
            res.status(400).json({message:"not foubnd"})
        }
        const updatedata=await projects.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(updatedata)
    }
    catch(error)
    {
        res.status(500).json(error)
    }
})


module.exports=router;