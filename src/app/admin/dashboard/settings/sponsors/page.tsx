import React from 'react';
import SponsorAbout from './components/SponsorAbout';
import SponsorGallery from './components/SponsorGallery';

function page() {
  return (
    <div className='w-full h-full flex flex-col gap-10'>
        <SponsorAbout />
        <SponsorGallery/>
    </div>
  )
}

export default page;