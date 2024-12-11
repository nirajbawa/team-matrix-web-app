import mongoose, { Schema, Document } from "mongoose";

export interface SponsorsAbout extends Document {
    text: string;
    index: number;
}

const SponsorsAboutSchema: Schema<SponsorsAbout> = new mongoose.Schema(
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

const SponsorsAboutModel =
    (mongoose.models.sponsorsAbout as mongoose.Model<SponsorsAbout>) ||
    mongoose.model<SponsorsAbout>("sponsorsAbout", SponsorsAboutSchema);

export default SponsorsAboutModel;
