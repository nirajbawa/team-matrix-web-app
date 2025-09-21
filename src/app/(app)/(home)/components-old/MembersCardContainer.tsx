"use server"
import MembersCard from '@/components/cards/MembersCard';
import dbConnect from '@/lib/dbConnect';
import MemberModel from '@/models/Member';
import MembersScrollCards from './MembersScrollCards';


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
        const filtered2 = data?.filter((item: any) => item.position === "Manager" || item.position === "Co-Manager");
        const [second, third] = filtered2 || [];
        const remaining = data?.filter((item: any) => item.position !== "Manager" && item.position !== "Co-Manager" && item.position !== "Captain");
   
        return (
            <div className='w-full h-full pt-5 flex-wrap gap-x-24 flex justify-center md:justify-between md:p-10 md:px-36 z-50'>
                <div className='w-full flex justify-center items-center'>
                    <MembersCard image={first?.image} name={first?.name} position={first?.position} />
                </div>
                <div className='w-full flex justify-center gap-x-10 md:gap-x-0 md:justify-between flex-wrap items-center'>
                    <MembersCard image={second?.image} name={second?.name} position={second?.position} />
                    <MembersCard image={third?.image} name={third?.name} position={third?.position} />
                </div>
                
                <MembersScrollCards data={JSON.stringify(remaining)} />

            </div>
        )
    }
    catch {
        return <></>
    }
}

export default MembersCardContainer