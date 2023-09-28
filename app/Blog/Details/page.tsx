import Image from 'next/image'
import React from 'react'
import RelatedBlog from '../components/RelatedBlog'

const Detailpage = () => {
    return (
        <div>
            <div className='bg-[#fff]'>

                <Image
                    src="/Blog/Details/Bg.svg"
                    alt=''
                    height={10000}
                    width={10000}
                    className='bg-black'
                />
                <div className='2xl:w-[85%] md:w-[95%] xs:w-[98%] mx-auto mt-[3rem]'>
                    <h1 className='font-semibold leading-[180%] text-[#2F327D] 2xl:text-[44px] xl:text-[42px] lg:text-[40px] md:text-[38px] sm:text-[34px] xs:text-[text-32px]'>Why Swift UI Should Be on the Radar of Every Mobile Developer</h1>
                    <p className='mt-[2rem] text-[#696984] max-w-[1681px] text-[24px] font-[400] leading-[180%] tracking-[0.48px]'>TOTC is a platform that allows educators to create online classes whereby
                        they can store the course materials online; manage assignments, quizzes and exams;
                        monitor due dates; grade results and provide students with feedback all in one place.</p>
                    <p className='mt-[2rem] text-[#696984] max-w-[1681px] text-[24px] font-[400] leading-[180%] tracking-[0.48px]'>TOTC is a platform that allows educators to create online classes whereby they can store
                        the course materials online; manage assignments, quizzes and exams; monitor due dates;
                        grade results and provide students with feedback all in one place.<br />
                        TOTC is a platform that allows educators to create online classes whereby they can store
                        the course materials online; manage assignments, quizzes and exams; monitor due dates;
                        grade results and provide students with feedback all in one place.<br />
                        TOTC is a platform </p>
                    <p className='mt-[2rem] text-[#696984] max-w-[1681px] text-[24px] font-[400] leading-[180%] tracking-[0.48px]'>TOTC is a platform that allows educators to create online classes whereby they can store
                        the course materials online; manage assignments, quizzes and exams; monitor due dates;
                        grade results and provide students with feedback all in one place.<br />
                        TOTC is a platform that allows educators to create online classes whereby they can store
                        the course materials online; manage  </p>
                    <div className='flex md:flex-row sm:flex-col xs:flex-col sm:justify-start  xs:justify-center items-center mt-[2rem] gap-4'>
                        <button className='text-[#696984] w-[136px] h-[49px] rounded-[36px]  text-[16px] font-[400] leading-[normal] flex justify-center items-center BlogDetailbtn'>affordable </button>
                        <button className='text-[#696984] w-[136px] h-[49px] rounded-[36px]  text-[16px] font-[400] leading-[normal] flex justify-center items-center BlogDetailbtn'>Stunning </button>
                        <button className='text-[#696984] w-[136px] h-[49px] rounded-[36px]  text-[16px] font-[400] leading-[normal] flex justify-center items-center BlogDetailbtn'>making</button>
                        <button className='text-[#696984] w-[136px] h-[49px] rounded-[36px]  text-[16px] font-[400] leading-[normal] flex justify-center items-center BlogDetailbtn'>madbrawns</button>
                    </div>
                    <hr className='bg-[#696984] h-[0.5px] mt-[2rem]' />
                    <div className='flex justify-between items-center mt-5'>
                        <div className='flex gap-6'>
                            <div className='w-[77px] h-[77px] rounded-[6px] bg-[#D9D9D9] '>
                                <Image src="/Profile/Profile.svg" alt='' height={300} width={300} className='w-[77px] h-[77px]' />
                            </div>
                            <div className='flex flex-col justify-between py-3'>
                                <p className='text-[#696984] text-[12px] font-[500] leading-[normal] tracking-[0.24px]'>Written by</p>
                                <p className='text-[#000] text-[18px] font-[500] leading-[normal] tracking-[0.36px]'>Nina</p>
                            </div>
                        </div>
                        <button className='flex justify-center items-center text-center w-[232px] h-[49px] leading-[normal] text-[16px] font-bold text-[#49BBBD] border-[1px] border-[#49BBBD] rounded-[10px]'>
                            Follow
                        </button>
                    </div>

                </div>
            </div>
            <RelatedBlog />
        </div>
    )
}

export default Detailpage