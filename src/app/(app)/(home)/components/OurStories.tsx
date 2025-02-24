import dbConnect from "@/lib/dbConnect";
import StoriesModel, { Stories } from "@/models/Stories";
import { League_Spartan } from "next/font/google";
import OurStoriesContainer from "./OurStoriesContainer";

const league_spartan = League_Spartan({
  display: "swap",
  subsets: ["latin"],
  weight: ["900"],
});

const fetchData = async (): Promise<Stories[]> => {
  const data = (await StoriesModel.find({})) as Stories[];
  const stories = JSON.stringify(data);
  return JSON.parse(stories);
};

async function OurStories() {
  await dbConnect();
  const data = await fetchData();

  return (
    <div className="w-full h-full">
      <h1
        data-aos="flip-up"
        data-aos-duration="4000"
        className={`w-full text-center font-extrabold uppercase text-4xl ${league_spartan.className}`}
      >
        our stories
      </h1>
      <div className="w-full min-h-svh h-full flex px-6 md:px-10 py-10 flex-col md-xs:flex-row">
        <OurStoriesContainer data={data} />
      </div>
    </div>
  );
}

export default OurStories;
