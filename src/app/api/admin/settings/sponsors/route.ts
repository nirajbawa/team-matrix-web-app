import dbConnect from "@/lib/dbConnect";
import SponsorsModel from "@/models/Sponsors";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    await dbConnect();
    try {
        const {image, name, section} = await req.json();

        const data = new SponsorsModel({
            image, 
            name,
            section
        });

        await data.save();

        return Response.json(
            {
                success: true,
                message: "Sponsors added successfully."
            },
            { status: 200 }
        );
       
    } catch (error) {
        return Response.json(
            {
                success: false,
                message: "Error in adding sponsors.",
            },
            { status: 500 }
        );
    }
}


export async function GET(req: NextRequest) {
    await dbConnect();
    try {
       
        const data = await SponsorsModel.find({});

        return Response.json(
            {
                success: true,
                message: "Sponsors fetched successfully.",
                data
            },
            { status: 200 }
        );
       
    } catch (error) {
        return Response.json(
            {
                success: false,
                message: "Error in fetching sponsors.",
            },
            { status: 500 }
        );
    }
}


