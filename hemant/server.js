import express from 'express';
import mongoose from 'mongoose';

import studentRoute from './routes/student.route.js'
import connectDB from './util/database.js'
import dotenv from "dotenv";
dotenv.config();


const app = express();

app.use('/student', studentRoute);

connectDB(process.env.MONGO_URI);


app.listen(process.env.PORT);






