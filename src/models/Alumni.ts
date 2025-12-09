import mongoose, { Schema, Document } from "mongoose";

export interface Alumni extends Document {
  name: string;
  position: string;
  image: string;
  batch: string;
}

const AlumniSchema: Schema<Alumni> = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    trim: true,
  },
  image: {
    type: String,
    required: [true, "image is required"],
    trim: true,
  },
  batch: {
    type: String,
    required: [true, "batch is required"],
    trim: true,
  },
});

const AlumniModel =
  (mongoose.models.alumnis as mongoose.Model<Alumni>) ||
  mongoose.model<Alumni>("alumnis", AlumniSchema);

export default AlumniModel;
