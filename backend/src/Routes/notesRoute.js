import express from "express" //Import express server
import { createNotes, deleteNotes, getAllNotes, getNoteById, updateNotes } from "../controllers/notesController.js"; //Automatically does when you create new route

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById); 
router.post("/", createNotes);
router.put("/:id", updateNotes);
router.delete("/:id", deleteNotes);

export default router; //this got exported and imported to server js