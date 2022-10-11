import express from "express";

import {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
} from "./controllers/Task.js";

const router = express.Router();

router.get('/', getAllTasks);
router.get('/:id', getTaskById);
router.post('/', createTask);
router.patch('/:id', updateTask);
router.patch('/:id/done', updateDoneTask);

export default router;
