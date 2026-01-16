import Note from "../models/Note.js"; //Importing the blueprint of Note model from Note so it can used here!

export async function getAllNotes(_, res) { //we used underscore because we never used req so we are replacing it with underscore
    try {
        const notes = await Note.find().sort({createdAt: -1}); //We are finding all the notes and grabing it! createAt = to show newest first
        res.status(200).json(notes); //Send the notes after grabbing it
    } catch (error) {
        console.error("Error in getAllNotes controller", error); //You get it
        res.status(500).json({message:"Internal Server Error"}); //TO send response to the frontend if something goes wrong
    }
}

export async function getNoteById(req, res){
    try {
        const note = await Note.findById(req.params.id);
        if(!note) return res.status(404).json({message: "Note not found!"});
        res.json(note);
    } catch (error) {
        console.error("Error in getNoteById", error);
        res.status(500).json({message: "Internal Server Error"});
    }
}

export async function createNotes(req, res) {
    try {
        const {title, content} = req.body; //Grabs title and content from note route, and req.body contains data send from frontend JSON to your server. Simply: Provide
        const note = new Note({ title, content }); //Now it's like instance of the Note model. It like putting class, Note is the blueprint!

        const savedNote = await note.save(); //Now awit for the note to be saved in mongoose
        res.status(201).json(savedNote); //Response with the savedNote after they request
    } catch (error) {
        console.error("Error in createNotes controller", error);
        res.status(500).json({message:"Internal Server Error"});
    }
}

export async function updateNotes(req, res){
    try {
        const {title, content} = req.body; 
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content}, { //findByIdAndUpdate it does what it actually called and req.params.id tells the mongoDB exactly which file to update or delete. Simply: Identity!
            new:true //It update the data in updatedNote instead of having the old data
        });

        if(!updatedNote) return res.status(404).json({message: "Note not found!"})
        res.status(200).json({message: "Note updated Sucessfully!"})

    } catch (error) {
        console.error("Error in updateNotes controller", error);
        res.status(500).json({message:"Internal Server Error"});
    }
}

export async function deleteNotes(req, res){
    try {
        const {title, content} = req.body;
        const deletedNote = await Note.findByIdAndDelete(req.params.id);

        if(!deletedNote) return res.status(404).json({message: "Note not found!"});
        res.status(200).json({message:"Note deleted Successfully!"});
    } catch (error) {
        console.error("Error in deleteNotes", error);
        res.status(500).json({message: "Internal Server Error"});
    }
}