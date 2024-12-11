import React from 'react';
import dynamic from 'next/dynamic';
 
const DynamicComponentWithNoSSR = dynamic(
  () => import('./components/Main'),
  { ssr: false }
)
 

function page() {
  return (
    <div>
        <DynamicComponentWithNoSSR />
    </div>
  )
}

export default page;