import StoriesModel from "../models/Stories";
import dbConnect from "./dbConnect";

export async function createStories() {
  try {
    await dbConnect();
    const docCount = await StoriesModel.countDocuments({});
    if (docCount === 0) {
      for (let i = 0; i < 12; i++) {
        const data = new StoriesModel({
          images: [],
          index: i + 1,
          text: "",
        });
        await data.save();
      }
    }
  } catch {}
}


createStories();
