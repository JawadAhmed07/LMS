import { Description } from "@radix-ui/react-dialog"
import mongoose, { mongo } from "mongoose"


const { Schema } = mongoose

const BatchSchema = new Schema(
    {
        title:{type:String},
        description:String,
        course:{type:mongoose.Types.ObjectId,ref:"Course"},
        status:{
            type:String,
            default:"Pending",
            enum:[
                "Pending",
                "Admission-open",
                "Admission-closed",
                "Completed"
            ],
        },
    },
    {
        timestamps:true,
    }
)

export const batchModel=
mongoose.models.Batch|| mongoose.models("Batch",BatchSchema)