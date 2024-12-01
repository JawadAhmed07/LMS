import { connectDb } from "@/lib/dbConnect";
import { BatchModal } from "@/lib/modals/BatchModal";
import { CourseModal } from "@/lib/modals/courseModal";


export async function POST(request) {
  await connectDb();
  const obj = await request.json();
  let newBatch = new BatchModal({ ...obj });
  newBatch = await newBatch.save();

  return Response.json({
    error: false,
    msg: "Batch Added Successfully",
    batch: newBatch,
  });
}

export async function GET(req) {
  await connectDb();
  const reqUrl = req.url;
  const { searchParams } = new URL(reqUrl);
  const query = {};

  if (searchParams.get("course")) {
    query.course = searchParams.get("course");
  }

  console.log("query=>", query);

  try {
    const batches = await BatchModal.find(query).populate("course", "title");
    return Response.json({
      error: false,
      msg: "Batches Fetched Successfully",
      batches,
    });
  } catch (error) {
    console.error(error);
    return Response.json({
      error: true,
      msg: "Failed to fetch batches",
    });
  }
}
