import { connectDb } from "@/lib/dbConnect";
import { courseModal } from "@/lib/modals/courseModal";

export async function POST(request) {
    await connectDb();
    const obj = await request.json();
    let newCourse = new courseModal({ ...obj });
    newCourse = await newCourse.save();

    return Response.json({
        error: false,
        msg: "Course added successfully",
        course: newCourse,
    })
}

export async function GET(request) {
    await connectDb();

    const courses = await courseModal.find()
    return Response.json(
        {
            error: false,
            msg: "Course fetched successfully",
            course: newCourse,
        }
    )
}