import dbConnect from "@/lib/dbConnect";
import ProjectModel from "@/models/Project";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  await dbConnect();
  try {
    const { name, items } = await req.json();

    const data = new ProjectModel({
      name,
      items,
    });

    await data.save();

    return Response.json(
      {
        success: true,
        message: "Project added successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "Error in adding Project.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  await dbConnect();
  try {
    const data = await ProjectModel.find({});

    return Response.json(
      {
        success: true,
        message: "Project fetched successfully.",
        data,
      },
      { status: 200 }
    );
  } catch {
    return Response.json(
      {
        success: false,
        message: "Error in fetching Project.",
      },
      { status: 500 }
    );
  }
}
