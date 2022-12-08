/* cors mongoose express morgan dotenv multer */

const express = require("express")
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express()
// app.use(express.urlencoded({extended:true}));
const reviewRouter = require("./router/reviewRouter");
dotenv.config();
mongoose.connect(process.env.MONGODB_URI,{dbName:"tour"});

app.use(express.json())
app.use(cors())
app.use(morgan("dev"));


app.use("/api/tour",reviewRouter);


app.listen(8070,()=>{
    console.log('[SERVER]☆ START!☆')
})