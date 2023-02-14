const express=require('express');
const Employees=require('../models/employees.models')

const router=express.Router();

router.get('/employees',(req,res)=>{
try{
Employees.find((err,data)=>{
if(err){
    return res.status(400).send({message: 'error while retriving employees.please check the data'})
}

res.status(200).send(data);


})
}catch(error){
res.status(500).send({
    message:'Internal Server Error'
})
}
});

router.get('/employees/:empID',(req,res)=>{
    try{
    Employees.findOne({_id:req.params.empID},(err,data)=>{
    if(err){
        return res.status(400).send({message: 'error while retriving employee.please check the data'})
    }
    
    res.status(200).send(data);
    
    
    })
    }catch(error){
    res.status(500).send({
        message:'Internal Server Error'
    })
    }
    });
    



router.post('/employees/add',async(req,res)=>{
    try{
const payload=req.body;

const  newEmployee = new Employees(payload);
 await newEmployee.save((err,data)=>{
    if (err){
        return res.status(400).send({message:'error while adding new employee.please check the data'});   
     }


     res.status(201).send({employeId:data._id,message:'employee has been added successfully'})
})

    }catch(error){
        res.status(500).send({
            message:'Internal Server Error'})
    }
});

router.put('/employees/:empID',(req,res)=>{
    try{
        Employees.findByIdAndUpdate({_id:req.params.empID},{$set:req.body},(err,data)=>{
if(err){
    return res.status(400).send({message:'Error while updating an existing user.please check the data'})
}

res.status(201).send({employeeId:data._id, message:'employee details successfully updated'})


        })
    }catch(error){
        res.status(500).send({
            message:'Internal Server Error'})
    }
});

router.delete('/employees/:empID',(req,res)=>{
    try{
    Employees.deleteOne({_id: req.params.empID},(err,data)=>{
        if(err){
            return res.status(400).send({message:'error while deleting employee. please check the data'})
        }
        res.status(200).send({message:`Employee with id ${req.params.empID}has ben deleted`})
    })
    }catch(error){
        res.status(500).send({
            message:'Internal Server Error'})
    }
});




module.exports=router;