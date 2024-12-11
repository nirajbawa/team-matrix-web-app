import mongoose, { Schema, Document } from "mongoose";

export interface Member extends Document {
  name: string;
  position: string;
  image: string;
}

const MemberSchema: Schema<Member> = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
    },
    position: {
        type: String,
        required: [true, "position is required"],
        trim: true,
      },
      image: {
        type: String,
        required: [true, "image is required"],
        trim: true,
      },
  },
);

const MemberModel =
  (mongoose.models.members as mongoose.Model<Member>) ||
  mongoose.model<Member>("members", MemberSchema);

export default MemberModel;
