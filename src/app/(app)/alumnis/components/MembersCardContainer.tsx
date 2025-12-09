"use server";
import MembersCard from "@/components/cards/MembersCard";
import dbConnect from "@/lib/dbConnect";
import AlumniModel from "@/models/Alumni";
import MembersScrollCards from "./MembersScrollCards";

const fetchData = async () => {
  try {
    return await AlumniModel.find();
  } catch (error) {}
};

async function MembersCardContainer() {
  await dbConnect();
  try {
    const data = await fetchData();

    return (
      <div className="w-full h-full pt-0 py-0 flex-wrap gap-x-24 flex justify-center md:justify-between md:p-10 md:pt-0 md:px-36 z-50">
        <MembersScrollCards data={JSON.stringify(data)} />
      </div>
    );
  } catch {
    return <></>;
  }
}

export default MembersCardContainer;
