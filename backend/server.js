import express from "express";

const app = express();

//Below is called route from app.get to send message.

//An endpoint is a combination of HTTP + URL method that lets client interact with specific resources

//Nodemon is used to see the things updated real-time in dev mode.

//we used type module because to use import express. IF we used common js we have to const express = require("express");
//Difference is that import is modern way and better performance than const express

app.get("/api/notes/", (req, res) =>{
    res.status(200).send("Note created Successfully!");
});

app.post("/api/notes/", (req, res) =>{
    res.status(201).json({message: "Note created Successfully!"});
});

app.put("/api/notes/:id", (req, res) =>{
    res.status(200).json({message: "Note Updated Successfully!"});
});

app.delete("/api/notes/:id", (req, res) => {
    res.status(200).json({message: "Note Deleted Successfully!"});
});

app.listen(5001, () =>{
    console.log("Server started on PORT: 5001");
});

