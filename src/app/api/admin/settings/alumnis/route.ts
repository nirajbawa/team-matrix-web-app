import dbConnect from "@/lib/dbConnect";
import AlumniModel from "@/models/Alumni";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  await dbConnect();
  try {
    const { name, batch, image } = await req.json();

    const data = new AlumniModel({
      batch,
      name,
      image,
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
    const data = await AlumniModel.find();

    return Response.json(
      {
        success: true,
        message: "Members fetched successfully.",
        data,
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
