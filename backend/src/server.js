import express from "express";
import noteRoutes from "./Routes/notesRoute.js" //import noteRoutes from noteRouter.js file so it can work in sever js
import { connectDB } from "./config/db.js"; //connect to MongoDB database and import it
import dotenv from "dotenv"; //Import dotenv package so it can used here.

dotenv.config(); //in order to be able to write the env file inside db js file
//env = environment variables, only avaliable locally to the creator!

const app = express(); //express
const PORT = process.env.PORT || 5001

connectDB(); //connect to database

app.use(express.json()); //Middleware that helps to get value of note in notecontroller

app.use("/api/notes", noteRoutes);

app.listen(PORT, () =>{
    console.log("server started successfully on PORT:", PORT)
})

//mongodb+srv://hithukten_db_user:SPH87gJBA5H4dNRm@cluster0.a75dahl.mongodb.net/?appName=Cluster0

//An endpoint is a combination of HTTP + URL method that lets client interact with specific resources

//Nodemon is used to see the things updated real-time in dev mode.

//we used type module because to use import express. IF we used common js we have to const express = require("express");
//Difference is that import is modern way and better performance than const express

//we created separate files to maintain clean code and make it manageable
//For example we can use app.use("/api/product", productRouter) when you need to add new api and routes.

