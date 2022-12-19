import  express  from "express";
import messageRouter from './routes/contact.js';
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from "body-parser";

const app = express();
dotenv.config();


app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors())

app.use('/contact', messageRouter)

const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true , useUnifiedTopology: true})
.then(()=>{app.listen(PORT, ()=>{console.log(`server run on port: ${PORT} and connected to mongoose`)})})
.catch((error)=>{ console.error(error)})

mongoose.set('strictQuery', false);