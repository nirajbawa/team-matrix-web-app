import mongoose, { Schema, Document } from "mongoose";

export interface Visitors extends Document {
    ip: string;
}

const VisitorsSchema: Schema<Visitors> = new mongoose.Schema(
  {
    ip: {
      type: String,
      required: [true, "ip is required"]
    },
  }
);

const VisitorsModel =
  (mongoose.models.visitors as mongoose.Model<Visitors>) ||
  mongoose.model<Visitors>("visitors", VisitorsSchema);

export default VisitorsModel;