import dbConnect from "@/lib/dbConnect";
import MemberModel from "@/models/Member";
import { NextRequest } from "next/server";


export async function POST(req: NextRequest) {
    await dbConnect();
    try {

        const {name, position, image} = await req.json();

        const data = new MemberModel({
            position,
            name, 
            image
        });

        await data.save();

        return Response.json(
            {
                success: true,
                message: "New member added successfully.",
            },
            { status: 200 }
        );
    } catch (error) {
        return Response.json(
            {
                success: false,
                message: "Error in adding new member.",
            },
            { status: 500 }
        );
    }
}


export async function GET(req: NextRequest) {
    await dbConnect();
    try {

       const data = await MemberModel.find();

        return Response.json(
            {
                success: true,
                message: "Members fetched successfully.",
                data
            },
            { status: 200 }
        );
    } catch (error) {
        return Response.json(
            {
                success: false,
                message: "Error in fetching members.",
            },
            { status: 500 }
        );
    }
}


