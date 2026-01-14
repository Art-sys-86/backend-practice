export function getAllNotes(req, res) {
    res.status(200).send("Note Fetched Successfully!");
}

export function createNotes(req, res) {
    res.status(201).json({message: "Note created Successfully!"});
}

export function updateNotes(req, res){
    res.status(200).json({message: "Note updated Successfully!"});
}

export function deleteNotes(req, res){
    res.status(200).json({message: "Note deleted Successfully!"});
}