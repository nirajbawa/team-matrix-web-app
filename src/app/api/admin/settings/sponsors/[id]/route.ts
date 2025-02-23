import dbConnect from "@/lib/dbConnect";
import SponsorsModel from "@/models/Sponsors";
import { NextRequest } from "next/server";

export async function DELETE(
  req: NextRequest,
  params: { params: Promise<{ id: string }> }
) {
  await dbConnect();
  try {
    const { id } = await params.params;
    const data = await SponsorsModel.deleteOne({ _id: id });

    return Response.json(
      {
        success: true,
        message: "Sponsors deleted successfully.",
        data,
      },
      { status: 200 }
    );
  } catch {
    return Response.json(
      {
        success: false,
        message: "Error in deleting sponsors.",
      },
      { status: 500 }
    );
  }
}
