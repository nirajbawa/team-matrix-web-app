import dbConnect from "@/lib/dbConnect";
import { NextRequest } from "next/server";
import transporter from "@/lib/emailSender";
import { render } from '@react-email/components';
import loginMail from "@/emails/loginMail";
import jwt from 'jsonwebtoken';
import mongoose from "mongoose";
import InvitationModel from "@/models/Invitation";

export async function POST(req: NextRequest) {
  await dbConnect();
  try {
    const {email} = await req.json();

    const SECRET_KEY = process.env.NEXT_AUTH_SECRET; // Make sure JWT_SECRET is set in your environment variables
    if (!SECRET_KEY) {
      throw new Error('Secret key is not defined');
    }

    const id = new mongoose.Types.ObjectId();
    const time = new Date();
    time.setHours(time.getHours()+1);
    const token = jwt.sign({id:id, email:email, expiresIn: time}, SECRET_KEY, { expiresIn: '1h' });

    const data = new InvitationModel({
      _id:id,
      token:token,
      used: false
    });

    await data.save();

    const content = await render(loginMail({code:token}))

    const mailOptions = {
        from: process.env.GMAIL, // Sender's email
        to: email, // Your receiving email
        subject: `Complete Login Process On Team Matrix`,
        html: content,
    };
    await transporter.sendMail(mailOptions);

    return Response.json(
      {
        success: true,
        message: "invitation sended successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "Error in sending invitation.",
      },
      { status: 500 }
    );
  }
}
