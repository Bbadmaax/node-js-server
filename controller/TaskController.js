
import Task from "../models/Task.js";

export const CreateTask = async  (req,res,next)=> {

    try {
        
        const task = await Task.create({...req.body, createdBy : req.user._id}) 
        // task cusub same una same userka hada loginka ah 
        res.status(201).json(task) 

    } catch (error) {
        next(error)
    }
}

export const getMyTasks = async (req,res,next) => {
    try {
        
        const tasks = await Task.find({createdBy : req.user._id});
        // tsk usoo daBAC UU SAMEYSTAY USERKA HADA LOGINKA AH 
        res.status(200).json(tasks)
    } catch (error) {
        next(error)
    }
}

export const updatetask = async (req,res,next)=> {
    try {
        const task = await Task.findOneAndUpdate({_id : req.params.id, createdBy : req.user._id},
             req.body,
             {new : true}       
            );
            if(!task) return res.status(404).json({message : "not found task"});
            res.json(task)
        
    } catch (error) {
        next(error)
    }
}

export const deleteTask = async (req,res,next)=> {
    try {
        const task = await Task.findOneAndDelete({
            _id : req.params.id,
            createdBy : req.user._id
        });
if(!task) return res.status(404).json({message: "task not found"})
     res.json({message : "task deleted"})
    } catch (error) {
        next(error)
    }
}