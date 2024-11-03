import { connectDb } from "@/lib/dbConnect";
import { UserModal } from "@/lib/modals/UserModal";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export async function POST(request) {
    await connectDb();
    const obj = await request.json();
    // console.log("users=>", obj);
    // console.log("user testing=>", obj)

    const user =await  UserModal.findOne({ email: obj.email });
    if (!user)
        return Response.json({
            message: "User not found ",
            error: true
        },{
            status:404
        })

        var token = jwt.sign({ id:user._id,role: user.role }, process.env.JWT_KEY);


    return Response.json({
        error: false,
        msg: "User Login successfully",
        user: user,
        token: token,
    },
{
    status:200
})

    //     const isPasswordMatch=await bcrypt.compare(obj.password, user.password)
    //     console.log("isPasswordMatch=>",isPasswordMatch)
    // return Response.json("User login successful")

}


