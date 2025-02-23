import mongoose, { Schema, Document } from "mongoose";

export interface Sponsors extends Document {
  image: string;
  name: string;
  section: number;
}

const SponsorsSchema: Schema<Sponsors> = new mongoose.Schema({
  image: {
    type: String,
    required: [true, "image is required"],
    trim: true,
  },
  name: {
    type: String,
    required: [true, "name is required"],
    trim: true,
  },
  section: {
    type: Number,
    required: [true, "section is required"],
  },
});

const SponsorsModel =
  (mongoose.models.sponsors as mongoose.Model<Sponsors>) ||
  mongoose.model<Sponsors>("sponsors", SponsorsSchema);

export default SponsorsModel;
