import mongoose from "mongoose";

const url="mongodb+srv://arijit:arijit@cluster0.pivh6hn.mongodb.net/"

export async function dbConnect(){
 try {
    await mongoose.connect(url)
    console.log("Mongodb Connected!");
    
 } catch (error) {
    console.log("Mongodb Not Connected",error)
 }

}