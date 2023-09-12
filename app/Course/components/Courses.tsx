import Image from 'next/image'
import React from 'react'

const cardData = [
    {
        heading: "Design",
        bgcolor: "bg-[#49bbbd]",
        icons: "/Course/Courses/1.svg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    },
    {
        heading: "Development",
        bgcolor: "bg-[#5b72ee]",
        icons: "/Course/Courses/2.svg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    },
    {
        heading: "Development",
        bgcolor: "bg-[#9dccff]",
        icons: "/Course/Courses/3.svg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    },
    {
        heading: "Business",
        bgcolor: "bg-[#00cbb8]",
        icons: "/Course/Courses/4.svg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    },
    {
        heading: "Marketing",
        bgcolor: "bg-[#f48c06]",
        icons: "/Course/Courses/5.svg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    },
    {
        heading: "Photography",
        bgcolor: "bg-[#ee645b]",
        icons: "/Course/Courses/6.svg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    },
    {
        heading: "Acting",
        bgcolor: "bg-[#252641]",
        icons: "/Course/Courses/7.svg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    },
    {
        heading: "Business",
        bgcolor: "bg-[#00cbb8]",
        icons: "/Course/Courses/4.svg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    }
]

const Courses = () => {
    return (
        <div className='2xl:w-[90%] xl:w-[90%] lg:w-[95%] md:w-[98%] sm:w-[98%] xs:w-[98%] mx-auto py-20'>
            <h1 className='text-[#252641] font-semibold leading-[normal]   2xl:text-[36px] xl:text-[32px] lg:text-[30px] md:text-[25px] sm:text-[20px] xs:text-[15px]  pl-5 '>Choice favourite course from top category</h1>
            <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 mt-8'>
                {cardData.map((item, index) => (
                    <div key={index}  className='CourseBoxShadow bg-white max-w-[349px] w-auto min-h-[377px] rounded-[20px] justify-center items-center text-center flex flex-col mx-auto p-8 mb-16'>
                        <div className={`mt-2 flex items-center justify-center rounded-md  w-[90px] h-[90px] ${item.bgcolor} bg-opacity-[0.30]`}>
                            <Image
                                src={item.icons}
                                alt=''
                                height={200}
                                width={200}
                                className='w-[30px] h-[30px]'
                            />
                        </div>
                        <h3 className='mt-6 text-[#000] text-[30px] font-semibold tracking-[0.6px] leading-[normal]'>{item.heading}</h3>
                        <p className='mt-5 text-[#696984] text-[18px] font-[400] leading-[normal] tracking-[0.36px] max-w-[285px]'>{item.text}</p>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Courses