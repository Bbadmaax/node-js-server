import express from "express"
import { CreateTask, deleteTask, getMyTasks, updatetask } from "../controller/TaskController.js";
import {protect} from "../middlewares/Authmiddleware.js"

const router = express.Router();

router.post('/', protect, CreateTask)
router.get('/',protect, getMyTasks )
router.put('/:id', protect, updatetask)
router.delete('/:id', protect, deleteTask)

export default router;