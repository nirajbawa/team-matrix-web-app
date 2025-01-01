import mongoose, { Schema, Document } from "mongoose";

export interface Project extends Document {
    name: string;
    text: string;
    image: string[];
}

const ProjectSchema: Schema<Project> = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "name is required"],
            trim: true,
        },
        text: {
            type: String,
            required: [true, "text is required"],
            trim: true,
        },
        image: {
            type: [String],
            required: [true, "image is required"],
            trim: true,
        },
    },
);

const ProjectModel =
    (mongoose.models.projects as mongoose.Model<Project>) ||
    mongoose.model<Project>("projects", ProjectSchema);

export default ProjectModel;
