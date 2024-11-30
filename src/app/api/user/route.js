import { connectDb } from "@/lib/dbConnect";
import { UserModal } from "@/lib/modals/UserModal";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


// Check if user already exist??
// If user exist, return error message
// If user doesn't exist, create a new user document and save it to the database
// Return success message with the created user's ID
export async function POST(request) {
    await connectDb();
    const obj = await request.json();
    // console.log("Obj is this=>", obj)
    const user = await UserModal.findOne({ email: obj.email });
    // console.log("users=>", user)
    if (user)
        return Response.json(
            {
                error: true,
                msg: "User already exist",
            },
            {
                status: 404
            }
        );
        const saltRounds = 10;

    const hashedPassword= await bcrypt.hash(obj.password, saltRounds)
    obj.password=hashedPassword;

    let newUser=new UserModal({...obj})
    newUser=await newUser.save()

    var token = jwt.sign({ id:newUser._id,role: newUser.role }, process.env.JWT_KEY);


    // console.log("obj=>",obj.password)
    // console.log("hashedPassword=>",hashedPassword)
    return Response.json({
        error: false,
        msg: "User created successfully",
        user: newUser,
        token: token,
    })
}

export async function GET() {
    return Response.json("User Get Request of api")
}  