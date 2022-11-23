import Image from 'next/image'
import React from 'react'
import officeImage from "../public/images/home-office.png"

const Office = () => {
    return (
        <div className='relative h-fit w-full py-5 px-3'>
            <div className='w-full h-[2px] bg-white'></div>
            <div className='py-10 flex flex-col'>
                <h1 className='text-5xl md:text-7xl font-bold'>
                    Unleash new level of <br /> CREATIVITY
                </h1>
                <div className='flex my-2 items-end w-full justify-end'>
                    <h1 className='text-3xl md:text-4xl font-bold mx-4 lg:mx-10'>
                        OFFICE
                    </h1>
                    <Image src={officeImage} alt="" className='w-[50vw]' />
                </div>
                <h1 className='text-5xl md:text-6xl font-bold flex items-start'>
                    AMSTERDAM
                    <span className='text-xl font-normal mt-2 mx-5'>(9:34PM)</span>
                </h1>
            </div>
            <div className='w-full h-[2px] bg-white'></div>
            <div className='flex flex-col lg:flex-row justify-between py-10 pb-32'>
                <div className='text-lg'>
                    (LETS HEAR <br /> SOMETHING)
                </div>
                <div className='text-3xl lg:text-7xl font-bold'>TAIMOOORSHAHZADA.COM</div>
            </div>
            <div className='w-full h-[3px] bg-white'></div>
        </div>
    )
}

export default Office