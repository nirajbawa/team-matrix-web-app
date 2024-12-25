import { NextRequest, NextResponse } from "next/server";
import uploadToCloudinary from "@/lib/uploadToCloudinary";
import sharp from "sharp";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    
    const arrayBuffer = await file.arrayBuffer();
    const imageBuffer = Buffer.from(arrayBuffer);

    // const resizedBuffer = await sharp(imageBuffer).resize(200, 200).toBuffer();

    // Step 3: Convert resized buffer to Base64
    const base64ResizedImage = `data:image/jpeg;base64,${imageBuffer.toString("base64")}`;

    const res = await uploadToCloudinary(base64ResizedImage, file.name);
    

    if (res.success && res.result) {
      return NextResponse.json({
        status: true,
        message: "Image uploaded successfully.",
        data: { imgUrl: res.result.secure_url },
      }, { status: 200 });
    } else {
      return NextResponse.json({
        status: false,
        message: "Something went wrong while uploading image please try again.",
      }, { status: 500 });
    }

  }
  catch (error) {
    return NextResponse.json({
      status: false,
      message: "Something went wrong while uploading image please try again.",
    }, { status: 500 });
  }

}