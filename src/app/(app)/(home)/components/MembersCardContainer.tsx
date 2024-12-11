"use server"
import MembersCard from '@/components/cards/MembersCard';
import dbConnect from '@/lib/dbConnect';
import MemberModel from '@/models/Member';


const fetchData = async () => {
    try {
        return await MemberModel.find();
    } catch (error) {
      
    }
}


async function MembersCardContainer() {
    await dbConnect();
    try {
        const data = await fetchData();
        const filtered1 = data?.filter((item: any) => (item.position == "Captain"));
        const [first] = filtered1 || [];
        const filtered2 = data?.filter((item: any) => item.position === "Manager" || item.position === "Vice Captain");
        const [second, third] = filtered2 || [];
        const remaining = data?.filter((item: any) => item.position !== "Manager" && item.position !== "Vice Captain" && item.position !== "Captain");
   
        return (
            <div className='w-full h-full flex-wrap gap-x-24 flex justify-center md:justify-between md:p-10 md:px-36 z-50'>
                <div className='w-full flex justify-center items-center'>
                    <MembersCard image={first?.image} name={first?.name} position={first?.position} />
                </div>
                <div className='w-full flex justify-center gap-x-10 md:gap-x-0 md:justify-between flex-wrap items-center'>
                    <MembersCard image={second?.image} name={second?.name} position={second?.position} />
                    <MembersCard image={third?.image} name={third?.name} position={third?.position} />
                </div>

                {
                    remaining && remaining?.map((item: any, index: number) => (
                        <MembersCard key={index} image={item?.image} name={item?.name} position={item?.position} />
                    ))
                }

            </div>
        )
    }
    catch (error) {
        return <></>
    }
}

export default MembersCardContainer