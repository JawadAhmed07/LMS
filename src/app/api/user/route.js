import { connectDb } from "@/lib/dbConnect";



export async function POST(request) {
    await connectDb();
    const obj = await request.json();
    console.log("Obj is this=>",obj)
    return Response.json("User post request")
}

export async function GET() {
    return Response.json("User Get Request of api")
}