"use client"

import Image from 'next/image';
import React from "react";

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Dashboard = () => {
    const slider = React.useRef(null);

    const settings = {
        prevArrow: null,
        nextArrow: null,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        dots: false,
        arrows:false,
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint:1124,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    infinite: true,
                    dots: true
                }
            },
        ]
    }

    return (
        <div className='bg-[#9DCCFF] bg-opacity-[0.20]'>
            <div className='2xl:w-[90%] xl:w-[90%] lg:w-[95%] md:w-[98%] sm:w-[98%] xs:w-[98%] mx-auto py-20'>
                {/* Headings */}
                <div className='flex justify-between items-center pl-5 pr-10'>
                    <h2 className='text-[#252641] font-semibold leading-[normal] 2xl:text-[36px] xl:text-[32px] lg:text-[30px] md:text-[25px] sm:text-[20px] xs:text-[15px]'>Welcome back, ready for your next lesson?</h2>
                    <p className='text-[#49BBBD] font-bold leading-[normal] 2xl:text-[20px] xl:text-[18px] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[10px] '>View hisotry</p>
                </div>
                {/* Carsoual */}
                <Slider ref={slider} {...settings} className="mt-10">
                    <div>
                    <div className='bg-white p-3 rounded-[30px] max-w-[529px] 
                    CourseBoxShadow flex flex-col w-[auto] mx-auto'>
                       <Image
                       src="/Course/Dashboard/2.svg"
                       alt=''
                       height={500}
                       width={500}/>
                       <h1 className='text-[#252641] text-[24px] font-[500] leading-[180%] mt-2'>AWS Certified Solutions Architect</h1>
                       <div className='flex justify-start items-center gap-2 mt-5'>
                        <div className='w-[42px] h-[42px] rounded-[60px] bg-[#D9D9D9]'>
                        <Image src="/Profile/Profile.svg" alt="" height={300} width={300} className='w-[42px] h-[42px]'/>
                        </div>
                        <p className='text-[#000] text-[18px] font-[500] tracking-[0.56px] leading-[normal] '>Lina</p>
                       </div>
                       <div className='flex mt-4'>
                        <hr className='bg-[#49BBBD] w-[75%] max-w-[372px] h-[8px] rounded-[2px]'/>
                        <hr className='bg-[#D9D9D9] w-[25%] max-w-[111px] h-[8px] rounded-[2px]'/>
                       </div>
                       <p className='text-[#000] leading-[normal] tracking-[0.28px] opacity-[0.50] text-[14px] font-semibold text-end py-5 '>Lesson 5 of 7</p>
                  </div>
                    </div>
               
                    <div>
                    <div className='bg-white p-3 rounded-[30px] max-w-[529px] CourseBoxShadow
                     flex flex-col w-[auto] mx-auto'>
                       <Image
                       src="/Course/Dashboard/1.svg"
                       alt=''
                       height={500}
                       width={500}/>
                       <h1 className='text-[#252641] text-[24px] font-[500] leading-[180%] mt-2'>AWS Certified Solutions Architect</h1>
                       <div className='flex justify-start items-center gap-2 mt-5'>
                        <div className='w-[42px] h-[42px] rounded-[60px] bg-[#D9D9D9]'>
                        <Image src="/Profile/Profile.svg" alt="" height={300} width={300} className='w-[42px] h-[42px]'/>
                        </div>
                        <p className='text-[#000] text-[18px] font-[500] tracking-[0.56px] leading-[normal] '>Lina</p>
                       </div>
                       <div className='flex mt-4'>
                        <hr className='bg-[#49BBBD] w-[75%] max-w-[372px] h-[8px] rounded-[2px]'/>
                        <hr className='bg-[#D9D9D9] w-[25%] max-w-[111px] h-[8px] rounded-[2px]'/>
                       </div>
                       <p className='text-[#000] leading-[normal] tracking-[0.28px] opacity-[0.50] text-[14px] font-semibold text-end py-5 '>Lesson 5 of 7</p>
                  </div>
                    </div>

                    <div>
                    <div className='bg-white p-3 rounded-[30px] max-w-[529px] CourseBoxShadow flex flex-col w-[auto] mx-auto'>
                       <Image
                       src="/Course/Dashboard/3.svg"
                       alt=''
                       height={500}
                       width={500}/>
                       <h1 className='text-[#252641] text-[24px] font-[500] leading-[180%] mt-2'>AWS Certified Solutions Architect</h1>
                       <div className='flex justify-start items-center gap-2 mt-5'>
                        <div className='w-[42px] h-[42px] rounded-[60px] bg-[#D9D9D9]'>
                        <Image src="/Profile/Profile.svg" alt="" height={300} width={300} className='w-[42px] h-[42px]'/>
                        </div>
                        <p className='text-[#000] text-[18px] font-[500] tracking-[0.56px] leading-[normal] '>Lina</p>
                       </div>
                       <div className='flex mt-4'>
                        <hr className='bg-[#49BBBD] w-[75%] max-w-[372px] h-[8px] rounded-[2px]'/>
                        <hr className='bg-[#D9D9D9] w-[25%] max-w-[111px] h-[8px] rounded-[2px]'/>
                       </div>
                       <p className='text-[#000] leading-[normal] tracking-[0.28px] opacity-[0.50] text-[14px] font-semibold text-end py-5 '>Lesson 5 of 7</p>
                  </div>
                    </div>


                    <div>
                    <div className='bg-white p-3 rounded-[30px] max-w-[529px] CourseBoxShadow flex flex-col w-[auto] mx-auto '>
                       <Image
                       src="/Course/Dashboard/2.svg"
                       alt=''
                       height={500}
                       width={500}/>
                       <h1 className='text-[#252641] text-[24px] font-[500] leading-[180%] mt-2'>AWS Certified Solutions Architect</h1>
                       <div className='flex justify-start items-center gap-2 mt-5'>
                        <div className='w-[42px] h-[42px] rounded-[60px] bg-[#D9D9D9]'>
                        <Image src="/Profile/Profile.svg" alt="" height={300} width={300} className='w-[42px] h-[42px]'/>
                        </div>
                        <p className='text-[#000] text-[18px] font-[500] tracking-[0.56px] leading-[normal] '>Lina</p>
                       </div>
                       <div className='flex mt-4'>
                        <hr className='bg-[#49BBBD] w-[75%] max-w-[372px] h-[8px] rounded-[2px]'/>
                        <hr className='bg-[#D9D9D9] w-[25%] max-w-[111px] h-[8px] rounded-[2px]'/>
                       </div>
                       <p className='text-[#000] leading-[normal] tracking-[0.28px] opacity-[0.50] text-[14px] font-semibold text-end py-5 '>Lesson 5 of 7</p>
                  </div>
                    </div>


               
                </Slider>

                <div className="2xl:flex xl:flex lg:flex md:hidden sm:hidden xs:hidden justify-end items-center gap-2 2xl:mt-7 xl:mt-5 lg:mt-5 md:mt-3 sm:mt-1 xs:mt-1 2xl:mx-10 xl:mx-6 lg:mx-4 md:mx-2 sm:mx-2 xs:mx-2">
                    <div onClick={() => slider?.current?.slickPrev()} className="w-[50px] h-[50px] flex justify-center items-center bg-[#49BBBD]">
                        <Image
                            src="/before.png"
                            alt="Next"
                            height={24}
                            width={24}
                            className="w-[24px] h-[24px]" />
                    </div>
                    <div onClick={() => slider?.current?.slickNext()} className="w-[50px] h-[50px] flex justify-center items-center bg-[#49BBBD]">
                        <Image
                            src="/Next.png"
                            alt="Next"
                            height={24}
                            width={24}
                            className="w-[24px] h-[24px]" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard