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
    const filtered1 = data?.filter((item: any) => item.position == "Captain");
    const [first] = filtered1 || [];
    const filtered2 = data?.filter(
      (item: any) =>
        item.position === "Manager" || item.position === "Co-Manager"
    );
    const filtered3 = data?.filter(
      (item: any) => item.position == "Electronics Head"
    );
    const [second, third] = filtered2 || [];
    const [fourth] = filtered3 || [];

    const remaining = data?.filter(
      (item: any) =>
        item.position !== "Manager" &&
        item.position !== "Co-Manager" &&
        item.position !== "Captain" &&
        item.position !== "Electronics Head"
    );

    return (
      <div className="w-full h-full pt-0 py-0 flex-wrap gap-x-24 flex justify-center md:justify-between md:p-10 md:px-36 z-50">
        <div className="w-full flex sm:h-[50rem] justify-center gap-x-10 md:gap-x-0 md:justify-between flex-wrap items-center">
          <div className="sm:hidden mt-20">
            <MembersCard
              image={first?.image}
              name={first?.name}
              position={first?.position}
            />
          </div>

          <MembersCard
            image={second?.image}
            name={second?.name}
            position={second?.position}
          />
          <div className="hidden sm:block sm:mt-28">
            <MembersCard
              image={first?.image}
              name={first?.name}
              position={first?.position}
            />
            <MembersCard
              image={fourth?.image}
              name={fourth?.name}
              position={fourth?.position}
            />
          </div>
          <MembersCard
            image={third?.image}
            name={third?.name}
            position={third?.position}
          />
        </div>

        <MembersScrollCards data={JSON.stringify(remaining)} />
      </div>
    );
  } catch {
    return <></>;
  }
}

export default MembersCardContainer;
