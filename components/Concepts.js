import Image from 'next/image'
import React from 'react'
import Img1 from "../public/images/concept1.png"
import Img2 from "../public/images/concept2.png"

const Concepts = () => {
    return (
        <div className='relative px-3 w-full h-fit'>
            <div className='w-full h-[1px] bg-white'></div>
            <div className='my-32'>
                <p className='text-8xl sm:text-9xl md:text-[12rem] xl:text-[14rem] font-light leading-none'>
                    MUSIC
                </p>
                <p className='text-8xl sm:text-9xl md:text-[12rem] xl:text-[14rem] font-light leading-none'>
                    IS MORE
                </p>
                <p className='text-8xl sm:text-9xl md:text-[12rem] xl:text-[14rem] indent-[10vw] font-light leading-none'>
                    THAN THE
                </p>
                <p className='text-8xl sm:text-9xl md:text-[12rem] xl:text-[14rem] font-light leading-none'>
                    NOTES
                </p>
            </div>

            <div className='w-full h-[1px] bg-transparent md:bg-white mb-[20vh] md:mb-[40vh]'>
                <div className='absolute top-[30%] md:top-0 right-0 flex items-center  justify-center flex-col w-[60vw] mt-[30vh]'>
                    <div className='hidden md:block mb-20'>
                        <p className='text-xl'>(CONCEPTS)</p>
                        <p className='text-xl'>(IDEAS)</p>
                        <p className='text-xl'>(MOTIVES)</p>
                    </div>

                    <Image src={Img1} alt="" className='-z-10 my-10 w-[50%]' />
                    <Image src={Img2} alt="" className='my-10' />
                </div>
            </div>
        </div>
    )
}

export default Concepts