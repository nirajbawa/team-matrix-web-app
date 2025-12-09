import dbConnect from "@/lib/dbConnect";
import AlumniModel from "@/models/Alumni";
import { NextRequest } from "next/server";

export async function PATCH(
  req: NextRequest,
  params: { params: Promise<{ id: string }> }
) {
  await dbConnect();
  try {
    const { id } = await params.params;
    const { name, batch, image } = await req.json();

    await AlumniModel.updateOne(
      { _id: id },
      {
        name,
        batch,
        image,
      }
    );

    return Response.json(
      {
        success: true,
        message: "Member updated successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "Error in updating member.",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  params: { params: Promise<{ id: string }> }
) {
  await dbConnect();
  try {
    const { id } = await params.params;
    await AlumniModel.deleteOne({
      _id: id,
    });

    return Response.json(
      {
        success: true,
        message: "Member deleted successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "Error in deleting member.",
      },
      { status: 500 }
    );
  }
}
