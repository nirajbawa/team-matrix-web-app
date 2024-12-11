import React from 'react'
import ChartSection from './components/ChartSection'
import UsersSection from './components/UsersSection'

function page() {
  return (
    <div className='min-h-[100vh] px-10 flex justify-between flex-row bg-white'>
     
      <ChartSection />
      <UsersSection />
    </div>
  )
}

export default page