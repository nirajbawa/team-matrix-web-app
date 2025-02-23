import React from "react";
import { League_Spartan } from "next/font/google";
import SponsorsCards from "./SponsorsCards";
import dbConnect from "@/lib/dbConnect";
import SponsorsModel, { Sponsors as SponsorsType } from "@/models/Sponsors";

const league_spartan = League_Spartan({
  display: "swap",
  subsets: ["latin"],
  weight: ["900"],
});

async function Sponsors() {
  await dbConnect();
  await dbConnect();
  const data = await SponsorsModel.find({}).lean();

  // Map the data to match your type
  const items = data.map((item) => ({
    _id: item._id.toString(),
    name: item.name,
    image: item.image,
    section: item.section,
  })) as SponsorsType[];

  return (
    <div className="w-full h-full">
      <h1
        data-aos="flip-up"
        data-aos-duration="4000"
        className={`w-full text-center pt-10 pb-5 font-extrabold uppercase text-4xl sm:text-5xl md:text-4xl  ${league_spartan.className}`}
      >
        sponsors
      </h1>
      <div className="w-full flex flex-col">
        <SponsorsCards sponsorItem={items} />
      </div>
    </div>
  );
}

export default Sponsors;
