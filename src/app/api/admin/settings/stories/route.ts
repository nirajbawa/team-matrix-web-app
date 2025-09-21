import dbConnect from "@/lib/dbConnect";
import StoriesModel from "@/models/Stories";

export async function GET() {
  await dbConnect();
  try {
    const data = await StoriesModel.find({});

    return Response.json(
      {
        success: true,
        message: "Test fetched successfully.",
        data: data,
      },
      { status: 200 }
    );
  } catch {
    return Response.json(
      {
        success: false,
        message: "Error in creating stories.",
      },
      { status: 500 }
    );
  }
}
