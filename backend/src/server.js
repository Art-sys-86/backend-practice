import express from "express";
import noteRoutes from "./Routes/notesRoute.js" //import noteRoutes from noteRouter.js file so it can work in sever js
import { connectDB } from "./config/db.js"; //connect to MongoDB database and import it
import dotenv from "dotenv"; //Import dotenv package so it can used here.
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config(); //in order to be able to write the env file inside db js file
//env = environment variables, only avaliable locally to the creator!

const app = express(); //express
const PORT = process.env.PORT || 5001;


app.use(express.json()); //Parse JSON data:req.body for every incoming request;
app.use(rateLimiter);

// app.use((req,res,next) =>{ //Simple middleware
//     console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//     next();
// });

app.use("/api/notes", noteRoutes);

connectDB().then(() =>{  //connect to database then start the server as it is the best practice to connect to database first before starting the server
    app.listen(PORT, () =>{
        console.log("server started successfully on PORT:", PORT)
    })
});


//mongodb+srv://hithukten_db_user:SPH87gJBA5H4dNRm@cluster0.a75dahl.mongodb.net/?appName=Cluster0

//An endpoint is a combination of HTTP + URL method that lets client interact with specific resources

//Nodemon is used to see the things updated real-time in dev mode.

//we used type module because to use import express. IF we used common js we have to const express = require("express");
//Difference is that import is modern way and better performance than const express

//we created separate files to maintain clean code and make it manageable
//For example we can use app.use("/api/product", productRouter) when you need to add new api and routes.

