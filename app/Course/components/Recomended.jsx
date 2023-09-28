"use client"

import React from "react";
import Image from 'next/image'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cardData = [
    {
        Heading: 'AWS Certified solutions Architect',
        URL: 'homepage/News/Girl.svg',
        Time: '3 Month',
        Text: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
        Name: "Lina",
        Profile: "Profile/Profile.svg",
        price: "100",
        discountedPrice: "80"
    },
    {
        Heading: 'AWS Certified solutions Architect',
        URL: 'Blog/Dashboard/office.svg',
        Time: '3 Month',
        Text: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
        Name: "Lina",
        Profile: "Profile/Profile.svg",
        price: "100",
        discountedPrice: "80"
    },
    {
        Heading: 'AWS Certified solutions Architect',
        URL: 'homepage/News/Girl.svg',
        Time: '3 Month',
        Text: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
        Name: "Lina",
        Profile: "Profile/Profile.svg",
        price: "100",
        discountedPrice: "80"
    },
    {
        Heading: 'AWS Certified solutions Architect',
        URL: 'Blog/Dashboard/office.svg',
        Time: '3 Month',
        Text: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
        Name: "Lina",
        Profile: "Profile/Profile.svg",
        price: "100",
        discountedPrice: "80"
    },
    {
        Heading: 'AWS Certified solutions Architect',
        URL: 'homepage/News/Girl.svg',
        Time: '3 Month',
        Text: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
        Name: "Lina",
        Profile: "Profile/Profile.svg",
        price: "100",
        discountedPrice: "80"
    },
    {
        Heading: 'AWS Certified solutions Architect',
        URL: 'Blog/Dashboard/office.svg',
        Time: '3 Month',
        Text: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
        Name: "Lina",
        Profile: "Profile/Profile.svg",
        price: "100",
        discountedPrice: "80"
    },

];

const Recomended = () => {

    const slider = React.useRef(null);

    const settings = {
        prevArrow: null,
        nextArrow: null,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        dots: false,
        responsive: [
            {
                breakpoint: 1712,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 854,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: true
                }
            },
        ]
    }

    return (
        <div className='bg-[#9DCCFF] bg-opacity-[0.20]'>
            <div className='2xl:py-20 xl:py-16 lg:py-12 md:py-10 sm:py-8 xs:py-6 2xl:w-[90%]  xl:w-[85%]  lg:w-[85%]  md:w-[90%]  sm:w-[95%]  xs:w-[95%%] max-w-[98%] mx-auto'>
                {/* Heading */}
                <div className='flex justify-between    mx-auto  pl-5 pr-10' >
                    <h3 className='text-[#000] font-[500] leading-[normal] tracking-[0.6px] 2xl:text-[30px] xl:text-[27px] lg:text-[24px] md:text-[21px] sm:text-[18px] xs:text-[15px] '>Recommended for you</h3>
                    <p className='text-[#49BBBD] 2xl:text-[20px] xl:text-[18px]  lg:text-[16px]  md:text-[14px]  sm:text-[12px] xs:text-[10px] font-[700] leading-[normal]'>See all</p>
                </div>

                <Slider ref={slider} {...settings} className="my-5">
                    {cardData.map((item, index) => (
                        <div key={index}>
                            <div className='bg-white my-10 mx-auto max-w-[374px]   !h-[617px]
                            w-auto rounded-[20px] 2xl:p-6 xl:p-6 lg:p-4 md:p-2 sm:p-2 xs:p-2  
                            BlogRelatedBolgsBg2 flex flex-col justify-center '>
                                <Image src={item.URL}
                                    alt=''
                                    height={350}
                                    width={350} 
                                   />
                                <div className='flex justify-between items-center mt-3'>
                                    <div className='flex justify-center items-center gap-1'>
                                        <Image
                                            src="/Blog/Marketing/Boxes.svg"
                                            alt=''
                                            height={24}
                                            width={24}
                                            className='2xl:h-6 2xl:w-6 xl:h-[22px] xl:w-[22px]  lg:h-[20px] lg:w-[20px] md:h-[18px] md:w-[18px]    sm:h-[16px] sm:w-[16px]   xs:h-[14px] xs:w-[14px]    ' />
                                        <p className='text-[#696984] font-[500] leading-[normal] tracking-[0.28px] 2xl:text-[14px] xl:text-[10px] lg:text-[8px] md:text-[6px] sm:text-[14px] xs:text-[14px]'>Design</p>
                                    </div>
                                    <div className='flex justify-center items-center gap-1'>
                                        <Image
                                            src="/Blog/Marketing/Time.svg"
                                            alt=''
                                            height={24}
                                            width={24}
                                            className='2xl:h-6 2xl:w-6 xl:h-[22px] xl:w-[22px]  lg:h-[20px] lg:w-[20px] md:h-[18px] md:w-[18px]    sm:h-[16px] sm:w-[16px]   xs:h-[14px] xs:w-[14px]    ' />
                                        <p className='text-[#696984] font-[500] leading-[normal] tracking-[0.28px] 2xl:text-[14px] xl:text-[10px] lg:text-[8px] md:text-[10px] sm:text-[14px] xs:text-[14px]'>{item.Time}</p>
                                    </div>
                                </div>
                                <h2 className='mt-4 font-[500] leading-[normal] max-w-[324px]  text-[#252641] 2xl:text-[24px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] xs:text-[16px]'>{item.Heading}</h2>
                                <p className='text-[#696984] max-w-[328px] font-[400]  leading-[180%] tracking-[0.36px] 2xl:text-[18px] xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[10px] xs:text-[10px] mt-6'>{item.Text}</p>
                                <div className='flex justify-between items-center mt-8'>
                                    <div className='flex justify-center items-center gap-1'>
                                        <div className='w-[44px] h-[44px] rounded-full flex items-center gap-2 bg-[#D9D9D9]'>
                                            <Image
                                                src={item.Profile}
                                                alt=''
                                                height={24}
                                                width={24}
                                                className='h-[44px] w-[44px] ' />
                                        </div>
                                        <p className='text-[#000]   font-[500] leading-[normal] tracking-[0.36px] 2xl:text-[18px] xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[10px] xs:text-[10px]'>{item.Name}</p>
                                    </div>
                                    <div className='flex justify-center items-center gap-3'>
                                        <p className='opacity-[0.50] font-[300] line-through text-[18px] italic leading-[normal] tracking-[0.36px] '>${item.price}</p>
                                        <p className='text-[#49BBBD] font-[700] leading-[normal] tracking-[0.48px] 2xl:text-[24px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] xs:text-[16px]'>${item.discountedPrice}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

                <div className="2xl:flex xl:flex lg:flex md:hidden sm:hidden xs:hidden justify-end items-center gap-4 2xl:mt-4 xl:mt-3 lg:mt-2 md:mt-1 sm:mt-1 xs:mt-1 2xl:mx-10 xl:mx-6 lg:mx-4 md:mx-2 sm:mx-2 xs:mx-2">
                    <div onClick={() => slider?.current?.slickPrev()} className="w-[50px] h-[50px] flex justify-center items-center bg-[#49BBBD] opacity-50 rounded">
                        <Image
                            src="/before.png"
                            alt="Next"
                            height={24}
                            width={24}
                            className="w-[24px] h-[24px]" />
                    </div>
                    <div onClick={() => slider?.current?.slickNext()} className="w-[50px] h-[50px] flex justify-center items-center bg-[#49BBBD] rounded">
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

export default Recomended