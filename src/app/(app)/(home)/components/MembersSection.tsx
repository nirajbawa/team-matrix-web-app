import React from 'react'
import MembersBgLine from '@/assets/images/members-bg-line.webp';
import MembersCardContainer from './MembersCardContainer';

function MembersSection() {
    return (
        <div className='w-full h-full' >
            <div className=' w-full h-full pb-44 py-10 bg-[#3a0808] relative overflow-hidden  overflow-x-hidden overflow-y-hidden' 
            style={{ backgroundImage: `linear-gradient(rgb(0 0 0 / 54%), rgb(0 0 0 / 38%)), linear-gradient(104deg, rgb(55 27 35 / 74%) 0%, rgb(62 24 29 / 24%) 12%, rgb(12 6 5 / 52%) 80%)` }}>
                <div className='w-full bg-no-repeat rotate-[-46deg] overflow-hidden overflow-x-hidden overflow-y-hidden absolute top-[-42pc] left-[97pc] bg-transparent h-[3000px] z-0' style={{ backgroundImage: `url(${MembersBgLine.src})`, backgroundSize: "8% 200%", clipPath: "inset(0 0 0 0)" }}></div>
                <div className='w-full bg-no-repeat rotate-[-48deg] overflow-hidden overflow-x-hidden overflow-y-hidden absolute top-[-24pc] left-[77pc] bg-transparent h-[3000px] z-0' style={{ backgroundImage: `url(${MembersBgLine.src})`, backgroundSize: "8% 70%", clipPath: "inset(0 0 0 0)" }}></div>
                <div className='w-full bg-no-repeat rotate-[60deg] overflow-hidden overflow-x-hidden overflow-y-hidden absolute top-[-41pc] left-[50pc] bg-transparent h-[3000px] z-0' style={{ backgroundImage: `url(${MembersBgLine.src})`, backgroundSize: "8% 200%", }}></div>
                <div className='w-full h-full'>
                        <MembersCardContainer/>
                </div>
            </div>
        </div>

    )
}

export default MembersSection