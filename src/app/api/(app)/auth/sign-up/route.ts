import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User";
import { NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import transporter from "@/lib/emailSender";
import { render } from '@react-email/components';
import VerificationEmail from "@/emails/verificationEmail";
import InvitationModel from "@/models/Invitation";

export async function POST(req: NextRequest) {
    await dbConnect();
    try {
        const { id, username, email, password, mobile, address } = await req.json();

        
        const checkIsTokenUnused = await InvitationModel.findOne({
            _id:id, used: false
        })


        if(!checkIsTokenUnused)
        {
            return Response.json(
                {
                    success: false,
                    message: "Token is expired",
                },
                { status: 400 }
            );
        }

        const existingVerifiedEmail = await UserModel.findOne({
            email,
        });

        const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();

        let hashedPassword, expiryDate;

        if (!existingVerifiedEmail) {
            hashedPassword = await bcrypt.hash(password, 10);
            expiryDate = new Date();
            expiryDate.setMinutes(expiryDate.getMinutes() + 3);

            const newUser = new UserModel({
                username,
                email,
                password: hashedPassword,
                verifyCode,
                verifyCodeExpiry: expiryDate,
                isVerified: false,
                mobile,
                address
            });

            await newUser.save();
        } else if (existingVerifiedEmail?.isVerified) {
            return Response.json(
                {
                    success: false,
                    message: "Email is already registered",
                },
                { status: 400 }
            );
        } else {
            expiryDate = new Date();
            expiryDate.setMinutes(expiryDate.getMinutes() + 3);
            hashedPassword = await bcrypt.hash(password, 10);

            await UserModel.updateOne(
                { email },
                {
                    username,
                    verifyCode,
                    password: hashedPassword,
                    verifyCodeExpiry: expiryDate,
                    mobile,
                    address
                }
            );
        }


     
        const content = await render(VerificationEmail({username, otp:verifyCode}))

        const mailOptions = {
            from: process.env.GMAIL, // Sender's email
            to: email, // Your receiving email
            subject: `Verify Your Email`,
            html: content,
        };
        await transporter.sendMail(mailOptions);

        return Response.json(
            {
                success: true,
                message: "User registered successfully. Please verify your account.",
            },
            { status: 201 }
        );
    } catch {
        return Response.json(
            {
                success: false,
                message: "Error in registering user.",
            },
            { status: 500 }
        );
    }
}