import gsap from 'gsap'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import close from "../public/images/close-outline.svg"
import menu from "../public/images/menu-outline.svg"

const Header = () => {
    const resMenu = useRef(null)
    const resMenuHeader = useRef(null)
    const resMenuItem1 = useRef(null)
    const resMenuItem2 = useRef(null)
    const resMenuItem3 = useRef(null)
    const resMenuItem4 = useRef(null)

    const menu_open = gsap.timeline({
        paused: "true",
        reversed: "true"
    })

    useEffect(() => {
        menu_open.to(resMenu.current, {
            y: 0, zIndex: 100,
            duration: 0.2,
        })

        menu_open.from([resMenuHeader.current, resMenuItem1.current, resMenuItem2.current, resMenuItem3.current, resMenuItem4.current], {
            duration: 0.5,
            stagger: {
                amount: 0.4
            },
            y: -50
        })
    }, [])

    const menuOpen = () => {
        menu_open.reversed() ? menu_open.play() : menu_open.reversed()
    }

    return (
        <div>
            <div ref={resMenu} className="fixed w-full left-0 top-0 overflow-hidden h-screen bg-black -translate-y-[1200px]">
                <div className='flex items-start justify-between w-[100%] h-fit py-[5px]'
                    ref={resMenuHeader}>
                    <div className='mx-[5px] mix-blend-difference font-monument font-semibold text-[20px] leading-none'>
                        Abayomi <br />
                        Olatunji
                    </div>
                    <div onClick={menuOpen} className='block md:hidden cursor-pointer mx-[5px] text-white text-2xl'>
                        <Image src={close} alt="" className='w-9 object-contain invert' />
                    </div>
                </div>

                <div className='mx-2 my-10 space-y-1'>
                    <span className='overflow-hidden block'>
                        <div className='font-bold text-[30px]' ref={resMenuItem1}>
                            WORK
                        </div>
                    </span>
                    <span className='overflow-hidden block'>
                        <div className='font-bold text-[30px]' ref={resMenuItem2}>
                            ABOUT
                        </div>
                    </span>
                    <span className='overflow-hidden block'>
                        <div className='font-bold text-[30px]' ref={resMenuItem3}>
                            PUBLICATIONS
                        </div>
                    </span>
                    <span className='overflow-hidden block'>
                        <div className='font-bold text-[30px]' ref={resMenuItem4}>
                            OFFICE
                        </div>
                    </span>
                </div>
            </div>

            <div className="absolute bg-black top-0 py-[5px] h-[20vh] flex justify-between w-[100%] flex-col">
                <div
                    id="header"
                    className='flex items-start justify-between w-[100%]'>
                    <div className='mx-[5px] mix-blend-difference font-monument font-semibold text-[20px] leading-none'>
                        Abayomi <br /> Olatunji
                    </div>
                    <div className='mx-1 md:block hidden mix-blend-difference font-bold text-[30px]'>
                        WORK
                    </div>
                    <div className='mx-1 md:block hidden mix-blend-difference font-bold text-[30px]'>
                        ABOUT
                    </div>
                    <div className='mx-1 md:block hidden mix-blend-difference font-bold text-[30px]'>
                        PUBLICATIONS
                    </div>
                    <div className='mx-1 md:block hidden mix-blend-difference font-bold text-[30px]'>
                        OFFICE
                    </div>

                    <div onClick={menuOpen} className='block md:hidden cursor-pointer mx-[5x]'>
                        <Image src={menu} alt="" className='w-9 object-contain invert' />
                    </div>
                </div>
                <div className='flex items-start text-sm justify-between sm:justify-evenly px-5 w-[100%] h-fit'>
                    <div className=''>
                        An independent <br /> music agency
                    </div>
                    <fiv className="">
                        Lagos
                    </fiv>
                </div>
            </div>
        </div>
    )
}

export default Header