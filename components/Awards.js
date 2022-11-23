import Image from 'next/image'
import React from 'react'
import award1 from "../public/images/award1.png"
import award2 from "../public/images/award2.png"
import award3 from "../public/images/award3.png"
import award4 from "../public/images/award4.png"
import award5 from "../public/images/award5.png"
import award6 from "../public/images/award6.png"

const Awards = () => {
    return (
        <div className='relative'>
            <div className='bg-[#E7E7E7] text-black h-[80vh]'>
                <div className='px-3 py-2'>
                    <div className='w-full h-[1px] bg-black'></div>
                    <div className='flex justify-between w-full text-xs py-2'>
                        <div>BOLD</div>
                        <div>CULTURALLY CONNECTED</div>
                        <div>INCLUSIVE</div>
                    </div>
                    <div className='my-28'>
                        <div className='text-sm md:text-xl'>(OUR AWARDS)</div>
                        <div className='text-2xl sm:text-3xl md:text-5xl font-bold leading-snug indent-[25vw] my-2'>
                            NOT FOR OUR EGOS, BUT BECAUSE AWARDS ARE A MEASURE OF CREATIVITY, ORIGINALITY AND QUALITY.
                            AIMING FOR AWARDS PUSHES US TO THINK DEEPER, GO FURTHER AND HAVE MEANINGFUL CONVERSATIONS ABOUT WHAT CREATIVITY IS.
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[50vh] sm:h-[70vh] bg-black text-[#e7e7e7]'>
                <div className='flex items-center justify-center w-full h-full text-center  leading-none'>
                    <h1 className='-mt-[48vh] mix-blend-difference text-7xl sm:text-9xl md:text-[10rem] xl:text-[14rem]'>
                        WE PLAY <br /> TO WIN
                    </h1>
                </div>
            </div>
            <div className='absolute top-[35%] right-[10%]'>
                <Image src={award1} alt="" className="h-28 sm:h-44 md:h-72 z-10 object-contain" />
            </div>
            <div className='absolute bottom-[15%] left-[15%]'>
                <Image src={award2} alt="" className="h-28 sm:h-44 md:h-72 z-10 object-contain" />
            </div>
            <div className='absolute bottom-[50%] left-[20%]'>
                <Image src={award3} alt="" className="h-28 sm:h-44 md:h-72 z-10 object-contain" />
            </div>
            <div className='absolute bottom-[30%] left-[60%]'>
                <Image src={award4} alt="" className="h-28 sm:h-32 md:h-52 z-10 object-contain" />
            </div>
            <div className='absolute right-[50%] bottom-[30%] '>
                <Image src={award5} alt="" className="h-28 sm:h-44 md:h-72 z-10 object-contain" />
            </div>
            <div className='absolute bottom-[15%] right-[35%]'>
                <Image src={award6} alt="" className="h-28 sm:h-32 md:h-48 z-10 object-contain" />
            </div>

        </div>
    )
}

export default Awards