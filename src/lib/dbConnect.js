import mongoose from "mongoose"


export async function connectDb(){
    let connection
    
    connection= await mongoose.connect("")
}