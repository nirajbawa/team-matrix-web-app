import dbConnect from "@/lib/dbConnect";
import SponsorsAboutModel from "@/models/SponsorsAbout";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    await dbConnect();
    try {
        const {text, id} = await req.json();
        const sponsorsAboutCount = await SponsorsAboutModel.countDocuments({index:id});

        if(sponsorsAboutCount==0)
        {
            const data = new SponsorsAboutModel({
                text,
                index: id
            });

            await data.save();

            return Response.json(
                {
                    success: true,
                    message: "About added successfully.",
                },
                { status: 200 }
            );
        }
        else{
            await SponsorsAboutModel.updateOne({index:id}, {
                text
            })

            return Response.json(
                {
                    success: true,
                    message: "About updated successfully.",
                },
                { status: 200 }
            );
        }

       
    } catch (error) {
        return Response.json(
            {
                success: false,
                message: "Error in adding about.",
            },
            { status: 500 }
        );
    }
}





export async function GET(req: NextRequest) {
    await dbConnect();
    try {

        const data = await SponsorsAboutModel.find({});

        return Response.json(
            {
                success: true,
                message: "About fetched successfully.",
                data
            },
            { status: 200 }
        );
       
    } catch (error) {
        return Response.json(
            {
                success: false,
                message: "Error in fetching about.",
            },
            { status: 500 }
        );
    }
}


