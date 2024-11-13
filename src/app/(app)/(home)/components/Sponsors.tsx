import React from 'react';
import Image from 'next/image';
import Logo2 from '@/assets/images/cp2.webp';
import Logo1 from "@/assets/images/cp1.png";

function Sponsors() {
    return (
        <div className='pt-24 md:pt-0 text-white w-full md:px-20 min-h-svh h-full flex-col md:flex-row justify-center items-center relative py-10 bg-[#3a0808] flex md:justify-between' style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.34), rgba(0, 0, 0, 0.35)), linear-gradient(150deg, rgba(55, 27, 35, 0.81) 0%, rgba(62, 24, 29, 1) 12%, rgba(12, 6, 5, 0.63) 80%)`
        }}>
            <div className='flex w-full md:w-[50%] h-full px-10 justify-between flex-col gap-y-20 '>
                <div data-aos="fade-up" data-aos-duration="4000" className='quote-box p-10 border-2 border-white rounded-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nisi eligendi iusto qui sed esse optio placeat, obcaecati ad, blanditiis saepe, minus modi quod commodi? Perferendis nostrum ut placeat aut voluptatibus quae temporibus, consequuntur dolore delectus illo vero maiores tempore enim possimus aspernatur. Velit, asperiores voluptatem temporibus eligendi distinctio qui!
                </div>

                <div data-aos="fade-up" data-aos-duration="4000" className='quote-box p-10 border-2 border-white rounded-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nisi eligendi iusto qui sed esse optio placeat, obcaecati ad, blanditiis saepe, minus modi quod commodi? Perferendis nostrum ut placeat aut voluptatibus quae temporibus, consequuntur dolore delectus illo vero maiores tempore enim possimus aspernatur. Velit, asperiores voluptatem temporibus eligendi distinctio qui!
                </div>
            </div>
            <div className='flex w-full lg:w-[80%] md:w-[50%] rounded-full min-h-svh h-full px-10 lg:px-16 xl:py-16 flex-col justify-center gap-14 md:gap-24 xl:justify-between'>
                <div className='w-full flex justify-center md:justify-start gap-10'>
                    <Image
                        data-aos="zoom-in"
                        data-aos-duration="4000"
                        className='rounded-full bg-white'
                        src={Logo2}
                        alt="Picture of the author"
                    />
                    <Image
                        data-aos="zoom-in"
                        data-aos-duration="4000"
                        className='rounded-full bg-white'
                        src={Logo2}
                        alt="Picture of the author"
                    />
                </div>

                <div className='w-full flex justify-center md:justify-end gap-10'>
                    <Image
                        data-aos="zoom-in"
                        data-aos-duration="4000"
                        className='rounded-full bg-white'
                        src={Logo1}
                        alt="Picture of the author"
                    />
                    <Image
                        data-aos="zoom-in"
                        data-aos-duration="4000"
                        className='rounded-full bg-white'
                        src={Logo1}
                        alt="Picture of the author"
                    />
                </div>

            </div>
        </div>
    )
}

export default Sponsors;