import dbConnect from "@/lib/dbConnect";
import StoriesModel from "@/models/Stories";
import { NextRequest } from "next/server";

export async function POST(
  req: NextRequest,
  params: { params: Promise<{ id: string }> }
) {
  await dbConnect();
  try {
    const { id } = await params.params;
    const { images, text } = await req.json();

  

    const result = await StoriesModel.updateOne(
      { _id: id },
      {
        images,
        text,
      }
    );


    if (result) {
    } else {
      return Response.json(
        {
          success: false,
          message: "Invalid id.",
        },
        { status: 500 }
      );
    }

    return Response.json(
      {
        success: true,
        message: "story updated successfully.",
      },
      { status: 200 }
    );
  } catch (error) {

    return Response.json(
      {
        success: false,
        message: "Error in adding story.",
      },
      { status: 500 }
    );
  }
}
