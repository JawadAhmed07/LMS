import { connectDb } from "@/lib/dbConnect";
import { BatchModal } from "@/lib/modals/BatchModal";

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

//   console.log("query=>", query);
const batches = await BatchModal.find({ title: "web development" }).populate("course","title");
  return Response.json({
    error: false,
    msg: "Batched Fetched Successfully",
    batches,
  });
}