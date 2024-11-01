


export async function POST(request){
    await dbConnect();
    const obj=await request.json();
    return Response.json("User post request")
}

export async function GET(){
    return Response.json("User Get Request")
}