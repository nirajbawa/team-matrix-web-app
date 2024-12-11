import React from 'react';
import InvitationForm from './components/InvitationForm';

function page() {
  return (
    <div className='w-full min-h-svh flex flex-col items-center pt-24'>
         <h1 className='text-2xl font-bold'>ADD USER</h1>
         <div className='w-1/4'>
            <InvitationForm/>
         </div>
    </div>
  )
}

export default page;