import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    await dbConnect();
    try{
        const page = parseInt(req.nextUrl.searchParams.get("page") || "1", 10);
        const limit = parseInt(req.nextUrl.searchParams.get("limit") || "10", 10);
    
        const skip = (page - 1) * limit;


        const data = await UserModel.find(
            {"role":"User"}
            ,{
              email: 1,
              username: 1,
              mobile: 1,
              address: 1,
              profilePic: 1
            }
          )
            .sort({ updatedAt: 1 })
            .skip(skip)
            .limit(limit);
          const totalRecords = await UserModel.countDocuments({"role":"User"});
    
          return Response.json(
            {
              success: true,
              message: "Test fetched successfully.",
              data: {
                currentPage: page,
                totalPages: Math.ceil(totalRecords / limit),
                totalRecords: totalRecords,
                data,
              },
            },
            { status: 200 }
          );
    }catch(error)
    {
        return Response.json(
            {
              success: false,
              message: "Error in sending invitation.",
            },
            { status: 500 }
          );
    }
}