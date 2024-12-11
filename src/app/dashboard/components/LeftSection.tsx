import React from 'react';
import ProfilePic from './ProfilePic';

function LeftSection({data}:any) {
  return (
    <div className='md:min-h-[100vh] w-full md:w-[50%] flex justify-center items-center'>
      <ProfilePic data={data}/>
    </div>
  )
}

export default LeftSection;