import mongoose, { Schema, Document } from "mongoose";

export interface ProjectItem {
  name: string;
  text: string;
  image: string;
}

export interface Project extends Document {
  name: string;
  items: ProjectItem[];
}

const ProjectSchema: Schema<Project> = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    trim: true,
  },
  items: {
    type: [],
    required: [true, "items are required"],
  },
});

const ProjectModel =
  (mongoose.models.projects as mongoose.Model<Project>) ||
  mongoose.model<Project>("projects", ProjectSchema);

export default ProjectModel;
