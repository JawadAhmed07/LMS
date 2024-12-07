// Today we will start admission modal 
// and connect it with backend
import mongoose from "mongoose";

const { Schema } = mongoose;

const admissionSchema = new Schema(
  {
    description: String,
    course: { type: mongoose.Types.ObjectId, ref: "Course" },
    Batch: { type: mongoose.Types.ObjectId, ref: "Batch" },
    status: {
      type: String,
      default: "pending",
      startDate:{type:String},
      endDate:{type:String},
      enum: [
        "pending",
        "open",
        "close",
      ],
    },
  },
  { timestamps: true }
);

export const AdmissionModal =
  mongoose.models.Admission || mongoose.model("Admission", admissionSchema);