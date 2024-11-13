import React from 'react'
import Image from 'next/image';
import MatrixLogo from "@/assets/images/matrix-logo.png";


function Triangle() {
    return (

        <div className='triangle-bottom' data-aos="fade-down">
            <div className='triangle-bottom-inner' ata-aos="fade-down">
                <div className='triangle-bottom-inner-inner' ata-aos="fade-down">
                    <div className='h-44 w-44 triangle-bottom-image'>
                        <Image
                            ata-aos="fade-down"
                            src={MatrixLogo}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Triangle