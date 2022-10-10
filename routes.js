import express from "express";

import {
    getAllTasks,
} from "./controllers/Task.js";

const router = express.Router();

router.get('/', getAllTasks);

export default router;
