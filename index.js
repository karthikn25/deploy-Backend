import express from 'express'
import { dataRouter } from './Routers/data.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config()

const PORT = process.env.PORT

 
const app = express();
app.use(cors({}));
app.use(express.json());

app.use("/api",dataRouter)
app.listen(PORT,()=>console.log(`Port running under localhost:${PORT}`))