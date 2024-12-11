import React from 'react';
import LeftSection from './components/LeftSection';
import RightSection from './components/RightSection';
import { getServerSession } from "next-auth/next";
import { authOptions } from '../api/(app)/auth/[...nextauth]/options';
import dbConnect from '@/lib/dbConnect';
import UserModel from '@/models/User';

export interface MembersDetails {
  username: string;
  email: string;
  address: string;
  mobile: string;
  profilePic?: string;
}

async function page() {
  try {
    dbConnect();
    const session = await getServerSession(authOptions);
    const data = await UserModel.findOne({ _id: session?.user._id });

    const propData:MembersDetails = {
      username: data?.username,
      email: data?.email,
      address: data?.address,
      mobile: data?.mobile,
      profilePic: data?.profilePic ?? ""
    } as MembersDetails;

    return (
      <div className='w-full min-h-[100vh] px-10 py-10 md:p-0 flex flex-col md:flex-row justify-between'>
        <LeftSection data={propData} />
        <RightSection  data={propData} />
      </div>
    )
  }
  catch (error) {
    return <>Internal Server Error</>
  }


}

export default page