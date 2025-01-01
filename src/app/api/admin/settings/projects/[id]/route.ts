import dbConnect from "@/lib/dbConnect";
import ProjectModel from "@/models/Project";
import { NextRequest } from "next/server";

export async function PATCH(req: NextRequest,   params: { params: Promise<{ id: string }> }) {
    await dbConnect();
    try {
        const { id } = await params.params; 
        const {image, name, text} = await req.json();

        await ProjectModel.updateOne({_id: id}, {
            text,
            image,
            name
        })

        return Response.json(
            {
                success: true,
                message: "Project updated successfully."
            },
            { status: 200 }
        );
       
    } catch (error) {
        return Response.json(
            {
                success: false,
                message: "Error in updating Project.",
            },
            { status: 500 }
        );
    }
}

export async function DELETE(req: NextRequest,   params: { params: Promise<{ id: string }> }) {
    await dbConnect();
    try {
        const { id } = await params.params; 
        await ProjectModel.deleteOne({_id:id});

        return Response.json(
            {
                success: true,
                message: "Project deleted successfully."
            },
            { status: 200 }
        );
       
    } catch (error) {
        return Response.json(
            {
                success: false,
                message: "Error in deleting Project.",
            },
            { status: 500 }
        );
    }
}

