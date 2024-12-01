import { connectDb } from "@/lib/dbConnect";
import { CourseModal } from "@/lib/modals/courseModal";

export async function POST(request) {
  await connectDb();
  const obj = await request.json();
  let newCourse = new CourseModal({ ...obj });
  newCourse = await newCourse.save();

  return Response.json({
    error: false,
    msg: "Course Added Successfully",
    courses: newCourse,
  });
}

export async function GET() {
  await connectDb();

  const courses = await CourseModal.find();
  return Response.json({
    error: false,
    msg: "Course Fetched Successfully",
    courses: courses,
  });
}