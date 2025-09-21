"use clint"
import React from 'react';
import Image from 'next/image';
import { UserDialog } from '@/app/admin/dashboard/components/UserDialog';

interface UserCard {
  username: string;
  email: string;
  img: any;
  mobile: string;
  address: string;
}

function UsersCard({ username, email, img, mobile, address }: UserCard) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <div onClick={handleOpen} className='w-64 h-96 cursor-pointer flex justify-center items-center flex-col bg-[#e5e5e559] shadow-[#2e2e2e12] shadow-xl'>
        <Image src={img} className='w-full h-60' alt="img" width={500} height={300} />
        <div className='p-5 flex justify-center flex-col gap-2'>
          <p>Username : {username}</p>
          <p>E-mail : {email}</p>
        </div>
      </div>
      <UserDialog open={open} handleOpen={handleOpen} username={username} email={email} mobile={mobile} address={address} img={img} />
    </>
  )
}

export default UsersCard;