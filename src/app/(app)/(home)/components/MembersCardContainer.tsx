import MembersCard from '@/components/cards/MembersCard'
import React from 'react'

function MembersCardContainer() {
    return (
        <div className='w-full h-full flex-wrap gap-x-24 flex justify-center md:justify-between md:p-10 md:px-36 z-50'>
            <div className='w-full flex justify-center items-center'>
                <MembersCard />
            </div>
            <div className='w-full flex justify-center gap-x-10 md:gap-x-0 md:justify-between flex-wrap items-center'>
            <MembersCard />
            <MembersCard />
            </div>
           
            <MembersCard />
            <MembersCard />
            <MembersCard />

            <MembersCard />
            <MembersCard />
            <MembersCard />

        </div>
    )
}

export default MembersCardContainer