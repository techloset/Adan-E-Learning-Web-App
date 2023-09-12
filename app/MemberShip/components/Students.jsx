"use client"

import React from "react";
import Image from 'next/image'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Students = () => {
    const slider = React.useRef(null);
    const settings = {
        prevArrow: null,
        nextArrow: null,
        infinite: false,
        speed: 500,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        dots: false,
        responsive: [
            {
                breakpoint: 1840,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 1310,

                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 816,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    arrows: false,
                    dots: true
                }
            },
        ]
    }
    return (
        <div className='bg-[#9DCCFF] bg-opacity-[0.2] py-10'>
            <div className='2xl:w-[85%] xl:w-[90%] lg:w-[90%] md:w-[95%] sm:w-[98%] xs:w-[98%] mx-auto'>
                <h1 className='text-[#2D3436] lg:text-[36px] md:text-[30px] sm:ext-[28px] xs:text-[24px]  font-semibold leading-[normal] my-12'>What our students have to say</h1>
                <div className='relative'>
                    <Slider ref={slider}  {...settings} className="md:w-[100%] sm:w-[90%] xs:w-[90%] mx-auto">
                        {/* One */}
                        <div>
                            <div className='max-w-[384px] min-h-[395px] rounded-[20px] bg-[#fff] flex flex-col   items-center text-center mx-auto'>
                                <div className='flex items-center  w-[118px] h-[118px] rounded-[6px] bg-[#D9D9D9] mt-8'>
                                    <Image
                                        src="/Profile/Profile.svg"
                                        alt=''
                                        height={300}
                                        width={300}
                                        className='w-[118px] h-[118px]' />
                                </div>
                                <h3 className='text-[#2D3436] text-[24px] font-semibold leading-[normal]  mt-5 mb-7'>Bulkin Simons</h3>
                                <p className='max-w-[329px] text-[#696984] w-auto text-[18px] font-[400] leading-[normal] tracking-[0.36px] text-center'>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit,
                                    sed do eiusmodadipiscing elit, sed do eiusmod</p>
                            </div>
                        </div>
                        {/* Two */}
                        <div>
                            <div className='max-w-[384px] min-h-[395px] rounded-[20px] bg-[#fff] flex flex-col   items-center text-center mx-auto'>
                                <div className='flex items-center  w-[118px] h-[118px] rounded-[6px] bg-[#D9D9D9] mt-8'>
                                    <Image
                                        src="/Profile/Profile.svg"
                                        alt=''
                                        height={300}
                                        width={300}
                                        className='w-[118px] h-[118px]' />
                                </div>
                                <h3 className='text-[#2D3436] text-[24px] font-semibold leading-[normal]  mt-5 mb-7'>Bulkin Simons</h3>
                                <p className='max-w-[329px] text-[#696984] w-auto text-[18px] font-[400] leading-[normal] tracking-[0.36px] text-center'>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit,
                                    sed do eiusmodadipiscing elit, sed do eiusmod</p>
                            </div>
                        </div>
                        {/* Three */}
                        <div>
                            <div className='max-w-[384px] min-h-[395px] rounded-[20px] bg-[#fff] flex flex-col   items-center text-center mx-auto'>
                                <div className='flex items-center  w-[118px] h-[118px] rounded-[6px] bg-[#D9D9D9] mt-8'>
                                    <Image
                                        src="/Profile/Profile.svg"
                                        alt=''
                                        height={300}
                                        width={300}
                                        className='w-[118px] h-[118px]' />
                                </div>
                                <h3 className='text-[#2D3436] text-[24px] font-semibold leading-[normal]  mt-5 mb-7'>Bulkin Simons</h3>
                                <p className='max-w-[329px] text-[#696984] w-auto text-[18px] font-[400] leading-[normal] tracking-[0.36px] text-center'>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit,
                                    sed do eiusmodadipiscing elit, sed do eiusmod</p>
                            </div>
                        </div>
                        {/* Four */}
                        <div>
                            <div className='max-w-[384px] min-h-[395px] rounded-[20px] bg-[#fff] flex flex-col   items-center text-center mx-auto'>
                                <div className='flex items-center  w-[118px] h-[118px] rounded-[6px] bg-[#D9D9D9] mt-8'>
                                    <Image
                                        src="/Profile/Profile.svg"
                                        alt=''
                                        height={300}
                                        width={300}
                                        className='w-[118px] h-[118px]' />
                                </div>
                                <h3 className='text-[#2D3436] text-[24px] font-semibold leading-[normal]  mt-5 mb-7'>Bulkin Simons</h3>
                                <p className='max-w-[329px] text-[#696984] w-auto text-[18px] font-[400] leading-[normal] tracking-[0.36px] text-center'>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit,
                                    sed do eiusmodadipiscing elit, sed do eiusmod</p>
                            </div>
                        </div>
                        {/* Five */}
                        <div>
                            <div className='max-w-[384px] min-h-[395px] rounded-[20px] bg-[#fff] flex flex-col   items-center text-center mx-auto'>
                                <div className='flex items-center  w-[118px] h-[118px] rounded-[6px] bg-[#D9D9D9] mt-8'>
                                    <Image
                                        src="/Profile/Profile.svg"
                                        alt=''
                                        height={300}
                                        width={300}
                                        className='w-[118px] h-[118px]' />
                                </div>
                                <h3 className='text-[#2D3436] text-[24px] font-semibold leading-[normal]  mt-5 mb-7'>Bulkin Simons</h3>
                                <p className='max-w-[329px] text-[#696984] w-auto text-[18px] font-[400] leading-[normal] tracking-[0.36px] text-center'>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit,
                                    sed do eiusmodadipiscing elit, sed do eiusmod</p>
                            </div>
                        </div>
                    </Slider>
                    <div onClick={() => slider?.current?.slickPrev()} className="w-[50px] h-[50px] md:flex sm:hidden xs:hidden justify-center items-center bg-[#49BBBD] absolute bottom-[50%] left-[-1%] cursor-pointer rounded-full">
                        <Image
                            src="/before.png"
                            alt="Next"
                            height={24}
                            width={24}
                            className="w-[24px] h-[24px]" />
                    </div>
                    <div onClick={() => slider?.current?.slickNext()} className="w-[50px] h-[50px] md:flex sm:hidden xs:hidden justify-center items-center bg-[#49BBBD] absolute bottom-[50%]  cursor-pointer right-[-1%] rounded-full ">
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

export default Students