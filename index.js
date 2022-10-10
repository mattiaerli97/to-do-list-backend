import express from "express";
import db from "./config.js";
import taskRoutes from "./routes.js";
import cors from "cors";

const app = express();

/* try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
} */

app.use(cors());
app.use(express.json());
app.use('/tasks', taskRoutes);

app.listen(8080, () => console.log('Server running at port 8080'));

export default app;
