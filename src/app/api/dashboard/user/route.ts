import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User";
import { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";



export async function PATCH(req: NextRequest) {
    await dbConnect();
    try {
        const token = await getToken({ req, secret: process.env.NEXT_AUTH_SECRET });
        const {username, address, mobile, profilePic} = await req.json();
        
        await UserModel.updateOne({_id:token?._id}, {
            username, 
            mobile, 
            address,
            profilePic
        })

        return Response.json(
            {
              success: false,
              message: "User's profile updated successfully.",
            },
            { status: 200 }
          );

    }
    catch(error)
    {
        return Response.json(
            {
              success: false,
              message: "Error in updating user.",
            },
            { status: 500 }
          );
    }
}