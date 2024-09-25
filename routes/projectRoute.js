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

router.put('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const currentrecord = await Projects.findOne({ _id: id })
        if (!currentrecord) {
            res.status(404).json({ message: "Project not found !" })
        }
        const updateProject = await Projects.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(updateProject)
    } catch (error) {
        res.status(500).json(error)
    }
})
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const currentrecord = await projects.findOne({ _id: id })
        if (!currentrecord) {
            res.status(404).json({ message: "Project not found !" })
        }
        const deleteProject = await projects.findByIdAndDelete(id)
        res.status(200).json({ message: "Project Deleted !" })
    } catch (e) {
        res.status(500).json(error)
    }
})



module.exports=router;