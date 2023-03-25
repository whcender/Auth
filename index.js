import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './Routers/userRouter.js';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());
app.use("/users", userRouter);

app.listen(5000, () => {
    console.log('Server started at http://localhost:5000');
    mongoose.connect(process.env.DB_CONNECTION_STRING)
        .then(() => console.log('Connected to MongoDB'))
        .catch((err) => console.log(err));
});