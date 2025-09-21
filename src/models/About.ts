import mongoose, { Schema, Document } from "mongoose";

export interface About extends Document {
    text: string;
    index: number;
}

const AboutSchema: Schema<About> = new mongoose.Schema(
    {
        text: {
            type: String,
            required: [true, "text is required"],
            trim: true,
        },
        index: {
            type: Number,
            required: [true, "index is required"],
        }
    },
);

const AboutModel =
    (mongoose.models.about as mongoose.Model<About>) ||
    mongoose.model<About>("about", AboutSchema);

export default AboutModel;
