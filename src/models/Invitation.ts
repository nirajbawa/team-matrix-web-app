import mongoose, { Schema, Document } from "mongoose";

export interface Invitation extends Document {
  token: string;
  used: boolean;
}

const InvitationSchema: Schema<Invitation> = new mongoose.Schema(
  {
    token: {
      type: String,
      required: [true, "token is required"],
      trim: true,
    },
    used: {
        type: Boolean,
        required: [true, "used is required"],
        default: false
      },
  },
  { timestamps: true }
);

const InvitationModel =
  (mongoose.models.invitations as mongoose.Model<Invitation>) ||
  mongoose.model<Invitation>("invitations", InvitationSchema);

export default InvitationModel;
