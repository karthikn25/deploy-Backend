import express from 'express'
import { Adddata, DeleteData, EditData, GetDataById, Getdata } from '../Controllers/data.js';


const router = express.Router();


router.post("/add",async(req,res)=>{
    try { 
        const data = await Adddata(req.body)
        if(!data){
            res.status(400).json({message:"Added data Not found"})
        }
        res.status(200).json({message:"data Added Sucessfully",data:data})
    } catch (error) {
     console.log(error)
     res.status(500).json({message:"Internal Server Error"})   
    }
})


router.get("/all",async(req,res)=>{
    try {
        const data = await Getdata(req)
        if(!data){
            res.status(400).json({message:"Data Not found"})
        }
        res.status(200).json({message:"Data Found Sucessfully",data:data})
    } catch (error) {
        console.log(error)
     res.status(500).json({message:"Internal Server Error"})
    }
})

router.get("/:id",async(req,res)=>{
    try {
       const {id} = req.params;
       const data = await GetDataById(id)
       if(!data){
        res.status(400).json({message:"Data Not found"})
       }
       res.status(200).json({message:"Data Found Sucessfully",data:data})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
    }
})

router.put("/edit/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const updatedData = req.body;
        const data = await EditData(id,updatedData)
        if(!data){
            res.status(400).json({message:"Updated Data Not found"}) 
        }
        res.status(200).json({message:"Data Updated Sucessfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"}) 
    }
})

router.delete("/remove/:id",async(req,res)=>{
    try {
        const { id } = req.params;
        const data = await DeleteData(id)
        if(!data){
            res.status(400).json({message:"Deleted Data Not found"}) 
        }
        res.status(200).json({message:"Data Deleted Sucessfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"}) 
    }
})

export const dataRouter = router;