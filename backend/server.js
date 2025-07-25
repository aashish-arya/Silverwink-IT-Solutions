import express from 'express'
import cors from "cors";
import dotenv from 'dotenv'
dotenv.config()
import mongoDB from './configs/mongoDB.js';
import cookieParser from 'cookie-parser';
import userRoute from './routes/userRoute.js'
const app = express();
const port = 3000
const hostname = 'localhost'

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }))

mongoDB();

app.use('/user', userRoute)

app.listen(port, () => {
    console.log(`Example app listening on port http://${hostname}:${port}`)
})
