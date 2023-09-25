"use client"

import Image from "next/image"

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Dashboard = () => {
    return (
        <div className="mt-20">
            <h1 className="text-[#49BBBD] text-center md:text-[64px] sm:text-[30px] xs:text-[25px] font-[800] leading-[normal] tracking-[-1px] my-10">Affordable pricing</h1>

            {/* Desktop */}
            <div className="lg:flex md:hidden sm:hidden xs:hidden w-[100%] justify-center items-center gap-3 mb-3 font-inter-400">

                <div className="w-[370px] h-[536px] bg-white flex flex-col justify-center items-center rounded-lg">
                    <div className="w-auto h-[472px] flex flex-col justify-between">
                        <div>
                        <Image
                                src="/MemberShip/Dashboard/pussy.svg"
                                alt=""
                                height={300}
                                width={300}
                                className="w-auto h-auto"
                            />
                            <h3 className="mt-12 text-[#2D3436] text-[48px] font-bold leading-[56px] tracking-[-1px] ">Free <span className="text-[12px] font-[800] leading-[normal] tracking-[2.5px] uppercase">/ forever</span></h3>
                            <div className="flex flex-col mt-5 space-y-5">

                                <div className="flex items-center gap-3">
                                    <div className="flex flex-col justify-center items-center w-[32px] h-[32px] bg-[#C2C2C2] bg-opacity-[25%] rounded-full">
                                        <Image
                                            src="/MemberShip/Dashboard/Tick.svg"
                                            alt=""
                                            height={200}
                                            width={200}
                                            className="w-[22.4px] h-[22.4px];"
                                        />
                                    </div>
                                    <p className="text-[#2D3436] text-[18px] font-[400] leading-[32px]">Components-driven system</p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="flex flex-col justify-center items-center w-[32px] h-[32px] bg-[#C2C2C2] bg-opacity-[25%] rounded-full">
                                        <Image
                                            src="/MemberShip/Dashboard/Tick.svg"
                                            alt=""
                                            height={200}
                                            width={200}
                                            className="w-[22.4px] h-[22.4px];"
                                        />
                                    </div>
                                    <p className="text-[#2D3436] text-[18px] font-[400] leading-[32px]">Sales-boosting landing pages</p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="flex flex-col justify-center items-center w-[32px] h-[32px] bg-[#C2C2C2] bg-opacity-[25%] rounded-full">
                                        <Image
                                            src="/MemberShip/Dashboard/Tick.svg"
                                            alt=""
                                            height={200}
                                            width={200}
                                            className="w-[22.4px] h-[22.4px]"
                                        />
                                    </div>
                                    <p className="text-[#2D3436] text-[18px] font-[400] leading-[32px]">Awesome Feather icons pack</p>
                                </div>

                            </div>
                        </div>
                        <button className="w-full border-[1px] hover:bg-[#49BBBD] hover:text-white border-[#49BBBD] rounded-lg flex flex-col justify-center items-center h-[64px] text-[#49BBBD] text-[center] text-[18px] font-bold tracking-[0.2px] leading-[32px]">Try for free</button>
                    </div>
                </div>

                <div className="w-[370px] h-[536px] bg-white flex flex-col justify-center items-center shadow-xl  rounded-lg">
                    <div className="w-auto h-[472px] flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between">
                                <Image
                                    src="/MemberShip/Dashboard/individual.svg"
                                    alt=""
                                    height={300}
                                    width={300}
                                    className="w-auto h-auto"
                                />
                                <button className="w-[90px] text-[12px] tracking-[2.5px] uppercase leading-[normal] font-[800] h-[32px] border-[2px] border-[#6C5CE7] rounded-3xl flex justify-center items-center">best!</button>
                            </div>
                            <h3 className="mt-8 text-[#2D3436] text-[48px] font-bold leading-[56px] tracking-[-1px] ">$24<span className="text-[12px] font-[800] leading-[normal] tracking-[2.5px] uppercase"> / month</span></h3>
                            <div className="flex flex-col mt-5 space-y-5">

                                <div className="flex items-center gap-3">
                                    <div className="flex flex-col justify-center items-center w-[32px] h-[32px] bg-[#FDCB6E]  rounded-full">
                                        <Image
                                            src="/MemberShip/Dashboard/Tick.svg"
                                            alt=""
                                            height={200}
                                            width={200}
                                            className="w-[22.4px] h-[22.4px];"
                                        />
                                    </div>
                                    <p className="text-[#2D3436] text-[18px] font-[400] leading-[32px]">Components-driven system</p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="flex flex-col justify-center items-center w-[32px] h-[32px] bg-[#FDCB6E]  rounded-full">
                                        <Image
                                            src="/MemberShip/Dashboard/Tick.svg"
                                            alt=""
                                            height={200}
                                            width={200}
                                            className="w-[22.4px] h-[22.4px];"
                                        />
                                    </div>
                                    <p className="text-[#2D3436] text-[18px] font-[400] leading-[32px]">Sales-boosting landing pages</p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="flex flex-col justify-center items-center w-[32px] h-[32px] bg-[#FDCB6E]  rounded-full">
                                        <Image
                                            src="/MemberShip/Dashboard/Tick.svg"
                                            alt=""
                                            height={200}
                                            width={200}
                                            className="w-[22.4px] h-[22.4px]"
                                        />
                                    </div>
                                    <p className="text-[#2D3436] text-[18px] font-[400] leading-[32px]">Awesome Feather icons pack</p>
                                </div>


                                <div className="flex items-center gap-3">
                                    <div className="flex flex-col justify-center items-center w-[32px] h-[32px] bg-[#FDCB6E]  rounded-full">
                                        <Image
                                            src="/MemberShip/Dashboard/Tick.svg"
                                            alt=""
                                            height={200}
                                            width={200}
                                            className="w-[22.4px] h-[22.4px]"
                                        />
                                    </div>
                                    <p className="text-[#2D3436] text-[18px] font-[400] leading-[32px]">Themed into 3 different styles</p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="flex flex-col justify-center items-center w-[32px] h-[32px] bg-[#FDCB6E]  rounded-full">
                                        <Image
                                            src="/MemberShip/Dashboard/Tick.svg"
                                            alt=""
                                            height={200}
                                            width={200}
                                            className="w-[22.4px] h-[22.4px]"
                                        />
                                    </div>
                                    <p className="text-[#2D3436] text-[18px] font-[400] leading-[32px]">Will help to learn Figma</p>
                                </div>

                            </div>
                        </div>
                        <button className="w-full  rounded-lg flex flex-col justify-center items-center h-[64px] text-[#fff] text-[center] text-[18px] font-bold tracking-[0.2px] leading-[32px] bg-[#49BBBD] hover:text-[#49BBBD] hover:bg-white border-[2px] border-[#49BBBD]">Regular license</button>
                    </div>
                </div>

                <div className="w-[370px] h-[536px] bg-white flex flex-col justify-center items-center  rounded-lg">
                    <div className="w-auto h-[472px] flex flex-col justify-between">
                        <div>
                            <Image
                                src="/MemberShip/Dashboard/Corporate.svg"
                                alt=""
                                height={300}
                                width={300}
                                className="w-auto h-auto"
                            />
                            <h3 className="mt-10 text-[#2D3436] text-[48px] font-bold leading-[56px] tracking-[-1px] ">$12 <span className="text-[12px] font-[800] leading-[normal] tracking-[2.5px] uppercase">/ editor </span></h3>
                            <div className="flex flex-col mt-5 space-y-5 gap-2">

                            <div className="flex items-center gap-3">
                                    <div className="flex flex-col justify-center items-center w-[32px] h-[32px] bg-[#55EFC4] bg-opacity-[25%] rounded-full">
                                        <Image
                                            src="/MemberShip/Dashboard/Tick.svg"
                                            alt=""
                                            height={200}
                                            width={200}
                                            className="w-[22.4px] h-[22.4px];"
                                        />
                                    </div>
                                    <p className="text-[#2D3436] text-[18px] font-[400] leading-[32px]">Components-driven system</p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="flex flex-col justify-center items-center w-[32px] h-[32px] bg-[#55EFC4] bg-opacity-[25%]  rounded-full">
                                        <Image
                                            src="/MemberShip/Dashboard/Tick.svg"
                                            alt=""
                                            height={200}
                                            width={200}
                                            className="w-[22.4px] h-[22.4px];"
                                        />
                                    </div>
                                    <p className="text-[#2D3436] text-[18px] font-[400] leading-[32px]">Sales-boosting landing pages</p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="flex flex-col justify-center items-center w-[32px] h-[32px] bg-[#55EFC4] bg-opacity-[25%] rounded-full">
                                        <Image
                                            src="/MemberShip/Dashboard/Tick.svg"
                                            alt=""
                                            height={200}
                                            width={200}
                                            className="w-[22.4px] h-[22.4px]"
                                        />
                                    </div>
                                    <p className="text-[#2D3436] text-[18px] font-[400] leading-[32px]">Awesome Feather icons pack</p>
                                </div>


                                <div className="flex items-center gap-3">
                                    <div className="flex flex-col justify-center items-center w-[32px] h-[32px] bg-[#55EFC4] bg-opacity-[25%] rounded-full">
                                        <Image
                                            src="/MemberShip/Dashboard/Tick.svg"
                                            alt=""
                                            height={200}
                                            width={200}
                                            className="w-[22.4px] h-[22.4px]"
                                        />
                                    </div>
                                    <p className="text-[#2D3436] text-[18px] font-[400] leading-[32px]">Themed into 3 different styles</p>
                                </div>

                            </div>
                        </div>
                        <button className="w-full border-[1px] border-[#49BBBD] hover:bg-[#49BBBD] hover:text-white rounded-lg flex flex-col justify-center items-center h-[64px] text-[#49BBBD] text-[center] text-[18px] font-bold tracking-[0.2px] leading-[32px]">Extended license</button>
                    </div>
                </div>


            </div>


            {/* Mobile */}
            <div className='md:flex sm:flex xs:flex 2xl:hidden xl:hidden lg:hidden items-center justify-center mt-10 '>
                <Slider
                    className='w-[100%] h-[auto] flex justify-center items-center mx-auto mb-5'
                    dots={true}
                    infinite={false}
                    arrows={false}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1} >
                    {/* One */}
                    <div>
                        
                        <div className="mx-auto mb-5  w-[370px] h-[536px] bg-white flex flex-col  justify-center items-center shadow-xl rounded-lg ">
                            <div className="w-[306px] h-[472px] flex flex-col justify-between">
                                <div>
                                    <p className="text-[#49BBBD] text-[18px] font-[Inter] font-bold leading-[32px] tracking-[0.2px]">Like a pussy</p>
                                    <h3 className="mt-2 text-[#2D3436] text-[48px] font-bold leading-[56px] tracking-[-1px] ">Free <span className="text-[12px] font-[800] leading-[normal] tracking-[2.5px] uppercase">/ forever</span></h3>
                                    <div className="flex flex-col mt-5 space-y-5">

                                        <div className="flex items-center gap-1">
                                            <div className="flex flex-col justify-center items-center w-[32px] h-[32px] bg-[#C2C2C2] bg-opacity-[25%] rounded-full">
                                                <Image
                                                    src="/MemberShip/Dashboard/Tick.svg"
                                                    alt=""
                                                    height={200}
                                                    width={200}
                                                    className="w-[22.4px] h-[22.4px];"
                                                />
                                            </div>
                                            <p className="text-[#2D3436] text-[18px] font-[400] leading-[32px]">Components-driven system</p>
                                        </div>

                                        <div className="flex items-center gap-[1px]">
                                            <div className="flex flex-col justify-center items-center w-[32px] h-[32px] bg-[#C2C2C2] bg-opacity-[25%] rounded-full">
                                                <Image
                                                    src="/MemberShip/Dashboard/Tick.svg"
                                                    alt=""
                                                    height={200}
                                                    width={200}
                                                    className="w-[22.4px] h-[22.4px];"
                                                />
                                            </div>
                                            <p className="text-[#2D3436] text-[18px] font-[400] leading-[32px]">Sales-boosting landing pages</p>
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <div className="flex flex-col justify-center items-center w-[32px] h-[32px] bg-[#C2C2C2] bg-opacity-[25%] rounded-full">
                                                <Image
                                                    src="/MemberShip/Dashboard/Tick.svg"
                                                    alt=""
                                                    height={200}
                                                    width={200}
                                                    className="w-[22.4px] h-[22.4px]"
                                                />
                                            </div>
                                            <p className="text-[#2D3436] text-[18px] font-[400] leading-[32px]">Awesome Feather icons pack</p>
                                        </div>

                                    </div>
                                </div>
                                <button className="w-full border-[1px] hover:bg-[#49BBBD] hover:text-white border-[#49BBBD] rounded-lg flex flex-col justify-center items-center h-[64px] text-[#49BBBD] text-[center] text-[18px] font-bold tracking-[0.2px] leading-[32px]">Try for free</button>
                            </div>
                        </div>
                    </div>
                    {/* Two */}
                    <div>
                        <div className="mx-auto mb-5 w-[370px] h-[536px] bg-white flex flex-col justify-center items-center shadow-xl  rounded-lg">
                            <div className="w-[306px] h-[472px] flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between">
                                        <Image
                                            src="/MemberShip/Dashboard/individual.svg"
                                            alt=""
                                            height={300}
                                            width={300}
                                            className="w-auto h-auto"
                                        />
                                        <button className="w-[90px] text-[12px] tracking-[2.5px] uppercase leading-[normal] font-[800] h-[32px] border-[2px] border-[#6C5CE7] rounded-3xl flex justify-center items-center">best!</button>
                                    </div>
                                    <h3 className="mt-2 text-[#2D3436] text-[48px] font-bold leading-[56px] tracking-[-1px] ">$24<span className="text-[12px] font-[800] leading-[normal] tracking-[2.5px] uppercase"> / month</span></h3>
                                    <div className="flex flex-col mt-5 space-y-5">

                                        <div className="flex items-center gap-1">
                                            <div className="flex flex-col justify-center items-center w-[32px] h-[32px] bg-[#FDCB6E]  rounded-full">
                                                <Image
                                                    src="/MemberShip/Dashboard/Tick.svg"
                                                    alt=""
                                                    height={200}
                                                    width={200}
                                                    className="w-[22.4px] h-[22.4px];"
                                                />
                                            </div>
                                            <p className="text-[#2D3436] text-[18px] font-[400] leading-[32px]">Components-driven system</p>
                                        </div>

                                        <div className="flex items-center gap-[1px]">
                                            <div className="flex flex-col justify-center items-center w-[32px] h-[32px] bg-[#FDCB6E]  rounded-full">
                                                <Image
                                                    src="/MemberShip/Dashboard/Tick.svg"
                                                    alt=""
                                                    height={200}
                                                    width={200}
                                                    className="w-[22.4px] h-[22.4px];"
                                                />
                                            </div>
                                            <p className="text-[#2D3436] text-[18px] font-[400] leading-[32px]">Sales-boosting landing pages</p>
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <div className="flex flex-col justify-center items-center w-[32px] h-[32px] bg-[#FDCB6E]  rounded-full">
                                                <Image
                                                    src="/MemberShip/Dashboard/Tick.svg"
                                                    alt=""
                                                    height={200}
                                                    width={200}
                                                    className="w-[22.4px] h-[22.4px]"
                                                />
                                            </div>
                                            <p className="text-[#2D3436] text-[18px] font-[400] leading-[32px]">Awesome Feather icons pack</p>
                                        </div>


                                        <div className="flex items-center gap-1">
                                            <div className="flex flex-col justify-center items-center w-[32px] h-[32px] bg-[#FDCB6E]  rounded-full">
                                                <Image
                                                    src="/MemberShip/Dashboard/Tick.svg"
                                                    alt=""
                                                    height={200}
                                                    width={200}
                                                    className="w-[22.4px] h-[22.4px]"
                                                />
                                            </div>
                                            <p className="text-[#2D3436] text-[18px] font-[400] leading-[32px]">Themed into 3 different styles</p>
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <div className="flex flex-col justify-center items-center w-[32px] h-[32px] bg-[#FDCB6E]  rounded-full">
                                                <Image
                                                    src="/MemberShip/Dashboard/Tick.svg"
                                                    alt=""
                                                    height={200}
                                                    width={200}
                                                    className="w-[22.4px] h-[22.4px]"
                                                />
                                            </div>
                                            <p className="text-[#2D3436] text-[18px] font-[400] leading-[32px]">Will help to learn Figma</p>
                                        </div>

                                    </div>
                                </div>
                                <button className="w-full  rounded-lg flex flex-col justify-center items-center h-[64px] text-[#fff] text-[center] text-[18px] font-bold tracking-[0.2px] leading-[32px] bg-[#49BBBD] hover:text-[#49BBBD] hover:bg-white border-[2px] border-[#49BBBD]">Regular license</button>
                            </div>
                        </div>
                    </div>
                    {/* Three */}
                    <div>
                        <div className="mx-auto mb-5 w-[370px] h-[536px] bg-white flex flex-col justify-center items-center shadow-xl  rounded-lg">
                            <div className="w-[306px] h-[472px] flex flex-col justify-between">
                                <div>
                                    <Image
                                        src="/MemberShip/Dashboard/Corporate.svg"
                                        alt=""
                                        height={300}
                                        width={300}
                                        className="w-auto h-auto"
                                    />
                                    <h3 className="mt-2 text-[#2D3436] text-[48px] font-bold leading-[56px] tracking-[-1px] ">$12 <span className="text-[12px] font-[800] leading-[normal] tracking-[2.5px] uppercase">/ editor </span></h3>
                                    <div className="flex flex-col mt-5 space-y-5">

                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-col justify-center items-center w-[32px] h-[32px] bg-[#55EFC4] bg-opacity-[25%] rounded-full">
                                                <Image
                                                    src="/MemberShip/Dashboard/Tick.svg"
                                                    alt=""
                                                    height={200}
                                                    width={200}
                                                    className="w-[22.4px] h-[22.4px];"
                                                />
                                            </div>
                                            <p className="text-[#2D3436] text-[18px] font-[400] leading-[32px]">Components-driven system</p>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-col justify-center items-center w-[32px] h-[32px] bg-[#55EFC4] bg-opacity-[25%]  rounded-full">
                                                <Image
                                                    src="/MemberShip/Dashboard/Tick.svg"
                                                    alt=""
                                                    height={200}
                                                    width={200}
                                                    className="w-[22.4px] h-[22.4px];"
                                                />
                                            </div>
                                            <p className="text-[#2D3436] text-[18px] font-[400] leading-[32px]">Sales-boosting landing pages</p>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-col justify-center items-center w-[32px] h-[32px] bg-[#55EFC4] bg-opacity-[25%] rounded-full">
                                                <Image
                                                    src="/MemberShip/Dashboard/Tick.svg"
                                                    alt=""
                                                    height={200}
                                                    width={200}
                                                    className="w-[22.4px] h-[22.4px]"
                                                />
                                            </div>
                                            <p className="text-[#2D3436] text-[18px] font-[400] leading-[32px]">Awesome Feather icons pack</p>
                                        </div>


                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-col justify-center items-center w-[32px] h-[32px] bg-[#55EFC4] bg-opacity-[25%] rounded-full">
                                                <Image
                                                    src="/MemberShip/Dashboard/Tick.svg"
                                                    alt=""
                                                    height={200}
                                                    width={200}
                                                    className="w-[22.4px] h-[22.4px]"
                                                />
                                            </div>
                                            <p className="text-[#2D3436] text-[18px] font-[400] leading-[32px]">Themed into 3 different styles</p>
                                        </div>

                                    </div>
                                </div>
                                <button className="w-full border-[1px] border-[#49BBBD] hover:bg-[#49BBBD] hover:text-white rounded-lg flex flex-col justify-center items-center h-[64px] text-[#49BBBD] text-[center] text-[18px] font-bold tracking-[0.2px] leading-[32px]">Extended license</button>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>



        </div>
    )
}

export default Dashboard