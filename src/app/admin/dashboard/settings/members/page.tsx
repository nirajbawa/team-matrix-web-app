"use client"
import React from 'react';
import Main from './components/Main';

import dynamic from 'next/dynamic'
 
const DynamicComponentWithNoSSR = dynamic(
  () => import('./components/Main'),
  { ssr: false }
)



function page() {
  return (
    <div className='flex w-full h-full flex-col'>
        <DynamicComponentWithNoSSR />
    </div>
  )
}

export default page