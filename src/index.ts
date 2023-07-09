import { Request, Response } from "express";
import express from "express";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send('Bot server');
});

app.listen(port, () => {
    console.log(`[SERVER]: Server is running at http://localhost:${port}`);
});

import './client';