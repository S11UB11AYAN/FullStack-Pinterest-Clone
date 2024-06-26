import mongoose, { Schema } from "mongoose";

const savedSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    folderName: {
      type: String,
      required: true,
      trim: true,
    },
    folderDescription: {
      type: String,
    },
  },
  { timestamps: true }
);
export const Folder = mongoose.model("Folder", savedSchema);
