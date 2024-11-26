import { connectDb } from "@/lib/dbConnect";
import { BatchModel } from "@/lib/modals/BatchModal";



export async function POST(request){
    await connectDb();
    const obj = await request.json();
    let newBatch= new BatchModel({...obj});
    newBatch = await newBatch.save();

    return Response.json({
        error:false,
        msg:"batch added successfully",
        batch:newBatch,
    })
}

export async function GET(req) {
    await connectDb();
    const reqUrl = req.url;

}