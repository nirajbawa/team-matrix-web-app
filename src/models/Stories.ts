import mongoose, { Schema, Document } from "mongoose";

export interface Stories extends Document {
  index: number;
  images: [];
  text: string;
}

const StoriesSchema: Schema<Stories> = new mongoose.Schema({
  images: {
    type: [],
    required: [true, "image is required"],
    trim: true,
  },

  index: {
    type: Number,
    required: [true, "index is required"],
  },
  text: {
    type: String,
    trim: true,
  },
});

const StoriesModel =
  mongoose.models["stories"] ||
  mongoose.model<Stories>("stories", StoriesSchema);

export default StoriesModel;
