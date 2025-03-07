import React from "react";
import About from "./About";
import AboutModel from "@/models/About";
import dbConnect from "@/lib/dbConnect";

async function AboutMain() {
  try {
    await dbConnect();

    // Fetch data from the database
    const data = await AboutModel.find({});

    // Map and filter data
    const tempData = data.map((item) => ({ text: item.text, index: 1 }));
    const filteredData = tempData.filter((item) => item.index === 1);

    // Handle case where no data matches
    const [about1] = filteredData;
    if (!about1) {
      throw new Error("No about data found.");
    }
    return (
      <div className="w-full h-full">
        <About about={about1.text} />
      </div>
    );
  } catch (error) {
    // Handle errors
    console.error("Error fetching about data:", error);
    return (
      <>
        <p>Failed to load about data.</p>
      </>
    );
  }
}

export default AboutMain;
