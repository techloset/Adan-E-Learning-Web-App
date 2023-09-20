"use client"

import React from "react";
import Image from 'next/image';

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cardData = [
    {
        Heading: 'Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution',
        URL: '/homepage/Tofc/CardImgOne.svg',
        Text: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
        Name: "Lina",
        Profile: "/Profile/Profile.svg",
        Views: "251,232"
    },
    {
        Heading: 'Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution',
        URL: '/Blog/Dashboard/office.svg',
        Text: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
        Name: "Lina",
        Profile: "/Profile/Profile.svg",
        Views: "251,232"
    },
    {
        Heading: 'Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution',
        URL: '/homepage/Tofc/CardImgOne.svg',
        Text: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
        Name: "Lina",
        Profile: "/Profile/Profile.svg",
        Views: "251,232"
    },
    {
        Heading: 'Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution',
        URL: '/Blog/Dashboard/office.svg',
        Text: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
        Name: "Lina",
        Profile: "/Profile/Profile.svg",
        Views: "251,232"
    },

];
const RelatedBlog = () => {
    const slider = React.useRef(null);
    const settings = {
        prevArrow: null,
        nextArrow: null,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }}]}
    return (
        <div className='bg-[#9DCCFF] bg-opacity-[0.2] py-20 my-10'>
            <div className='2xl:w-[90%]  xl:w-[85%]  lg:w-[85%]  md:w-[90%]  sm:w-[98%]  xs:w-[98%%]  mx-auto'>
                {/* Heading */}
                <div className='flex justify-between  px-10 '>
                    <h3 className='text-[#000] font-[500] leading-[normal] tracking-[0.6px] 2xl:text-[30px] xl:text-[27px] lg:text-[24px] md:text-[21px] sm:text-[18px] xs:text-[15px] '>Related Blog </h3>
                    <p className='text-[#49BBBD] 2xl:text-[20px] xl:text-[18px]  lg:text-[16px]  md:text-[14px]  sm:text-[12px] xs:text-[10px] font-[700] leading-[normal]'>See all</p>
                </div>
                {/* Carousal */}
                <Slider ref={slider} {...settings} className="mt-10">
                    {cardData.map((card, index) => (
                        <div key={index}>
                            <div className="2xl:p-10 xl:p-6 lg:p-4 md:p-2 sm:p-2 xs:p-2 2xl:mx-10 xl:mx-6 lg:mx-4 md:mx-2 sm:mx-2 xs:mx-2  bg-white rounded-[20px]  BlogRelatedBolgsBg2">
                                <Image src={card.URL} alt='Background Image' height={800} width={800} />
                                <h5 className="p-2 text-[#252641] 2xl:text-[26px] xl:text-[24px] lg:text-[22px] md:text-[20px] sm:text-[18px] xstext-[16px] font-medium leading-[180%] max-w-[684.798px]">{card.Heading}</h5>
                                <div className="flex gap-4 items-center my-4">
                                    <div className="rounded-[60px] bg-[#D9D9D9] w-[70.841px] h-[70.841px]">
                                        <Image src={card.Profile} alt='Profile pic' height={800} width={800}
                                            className='w-[70.841px] h-[70.841px]' />
                                    </div>

                                    <p className="text-[#000] text-[18px] font-medium tracking-[0.36px] leading-[normal]">{card.Name}</p>
                                </div>
                                <p className="2xl:text-[20px] xl:text-[18px]  lg:text-[16px]  md:text-[14px]  sm:text-[12px] xs:text-[10px] max-w-[684.798px] font-[400] leading-[180%] tracking-[0.4px]  text-[#696984]">{card.Text}</p>
                                <div className="flex justify-between mt-8 items-center">

                                    <p className="text-[#696984] 2xl:text-[20px] xl:text-[18px]  lg:text-[16px]  md:text-[14px]  sm:text-[12px] xs:text-[10px] underline font-[400] leading-[180%] tracking-[0.4px] ">Read more</p>
                                    <div className="flex gap-4 items-center">
                                        <Image src="/Profile/BlueEye.png" alt="" height={20} width={20} className="h-[25.863px] w-[25.863px]" />
                                        <p className="leading-[180%] tracking-[0.4px] 2xl:text-[20px] xl:text-[18px]  lg:text-[16px]  md:text-[14px]  sm:text-[12px] xs:text-[10px] text-[#696984] font-[400]">{card.Views}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className="2xl:flex xl:flex lg:flex md:hidden sm:hidden xs:hidden justify-end items-center gap-2 2xl:mt-[3.5rem] xl:mt-5 lg:mt-3 md:mt-3 sm:mt-1 xs:mt-1 2xl:mx-10 xl:mx-6 lg:mx-4 md:mx-2 sm:mx-2 xs:mx-2">
                    <div onClick={() => slider?.current?.slickPrev()} className="w-[50px] h-[50px] flex justify-center items-center bg-[#49BBBD] rounded opacity-50">
                        <Image
                            src="/before.png"
                            alt="Next"
                            height={24}
                            width={24}
                            className="w-[24px] h-[24px]" />
                    </div>
                    <div onClick={() => slider?.current?.slickNext()} className="w-[50px] h-[50px] flex justify-center items-center bg-[#49BBBD] rounded ">
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

export default RelatedBlog