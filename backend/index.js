const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors= require('cors');
const port = 5000;
const quiz=require("./models/quizschema.js");
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

main().then(()=>{console.log("Connection Successful")}).catch(err=>{console.log(err)})
async function main() { await mongoose.connect("mongodb://127.0.0.1:27017/quiz");}

app.listen(port,()=>{
    console.log("Listening....");
})
