import dbConnect from "@/lib/dbConnect";
import VisitorsModel from "@/models/Visitors";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        await dbConnect();
        const ip = (req.headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0];

        if (ip !== "unknown") {
            // Upsert: Add the visitor if it doesn't exist
            await VisitorsModel.updateOne(
                { ip }, // Filter by IP
                { $set: { ip } }, // Set operation
                { upsert: true } // Create a new record if it doesn't exist
            );
        }

        // Return success response
        return NextResponse.json(
            {
                success: true,
                message: "Visitor count added.",
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error in Visitor Count:", error);
        return NextResponse.json(
            {
                success: false,
                message: "Error adding new visitor.",
            },
            { status: 500 }
        );
    }
}


export async function GET(req: NextRequest) {
    try {
        await dbConnect();
        const count = await VisitorsModel.countDocuments({});
        // Return success response
        return NextResponse.json(
            {
                success: true,
                message: "Visitors count fetched.",
                data:{
                    count
                }
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error in Visitor Count:", error);
        return NextResponse.json(
            {
                success: false,
                message: "Error fetching visitors count.",
            },
            { status: 500 }
        );
    }
}


