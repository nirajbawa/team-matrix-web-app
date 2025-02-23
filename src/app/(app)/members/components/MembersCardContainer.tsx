"use server";
import MembersCard from "@/components/cards/MembersCard";
import dbConnect from "@/lib/dbConnect";
import MemberModel from "@/models/Member";
import MembersScrollCards from "./MembersScrollCards";

const fetchData = async () => {
  try {
    return await MemberModel.find();
  } catch (error) {}
};

async function MembersCardContainer() {
  await dbConnect();
  try {
    const data = await fetchData();
    const remaining = data?.filter((item: any) => item);

    return (
      <div className="w-full h-full pt-5 flex-wrap gap-x-24 flex justify-center md:justify-between md:p-10 md:pt-24 md:px-36 z-50">
        <MembersScrollCards data={JSON.stringify(remaining)} />
      </div>
    );
  } catch {
    return <></>;
  }
}

export default MembersCardContainer;
