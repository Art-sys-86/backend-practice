import mongoose from "mongoose"; //import mongoose since it's better!

export const connectDB = async () => { //export so it can be import it in server js
    try{
        await mongoose.connect(process.env.MONGO_URL); //infos in env because to avoid info from pushing to github! 
    } catch(error){
        console.error("Error connecting to MongoDB", error);
        process.exit(1) //exit with failure
    }
} //use this to connect to database!