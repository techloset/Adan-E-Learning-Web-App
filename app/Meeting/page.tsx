const MeetingPage = () => {
    return (
        <div className='bg-[#9DCCFF] bg-opacity-20 p-8 flex xl:flex-row flex-col  font-poppins justify-center items-center gap-1'>
            <div className='xl:w-[70%] xl:mr-10 2xl:-mt-[4.25rem] sm:mt-8 xs:mt-8  2xl:w-[1186px] ' >
                <div className='flex 2xl:w-[1186px] w-auto pb-4 '>
                    <button className='text-white m-auto  bg-[#49BBBD] px-3 mr-10 w-[50px] h-[50px] '>
                        <span className='hidden'>hidden</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg>
                    </button>
                    <div className=' bg-[white] w-full  rounded-2xl p-6 max-w-[1069px]'>
                        <div className='flex justify-between '>
                            <p className='text-[30px] font-[600] leading-[normal] text-[#252641] '>UX/UI Design Conference Meeting</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[35px] h-[35px] text-[#25264180] ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <p className="text-[#252641] pt-2 text-[18px] font-[400] leading-[normal] tracking-[0.36px]">9 Lesson 6h 30min</p>
                    </div>


                </div>
                <br />
                <img src="/Meeting/meeting.svg" className='justify-center 2xl:w-[1186px] w-auto' alt="" />
            </div>
            <div className='xl:w-[30%] mt-8 font-medium 2xl:w-[498px]'>
                <div className=' bg-[white]  rounded-2xl 2xl:p-10 xl:p-5 md:p-0'>
                    <p className='text-[#252641] text-[30px]  font-semibold leading-[normal]'>Course Contents</p>
                    <div className='flex justify-between mt-1'>
                        <p className='text-[14px] font-[500] leading-[150%] tracking-[0.28px] text-[#49BBBD] '>2/5 COMPLETED</p>
                        <img src="/Meeting/calender.svg" alt="" />

                    </div>

                    <div
                        className="w-full flex list-none justify-center  mt-2 p-0"
                        data-te-carousel-indicators>
                        <button
                            type="button"
                            data-te-target="#carouselExampleCaptions"
                            data-te-slide-to="0"
                            data-te-carousel-active
                            className="mx-[3px] box-content h-[3px] w-[80px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-[#49BBBD] bg-clip-padding p-0 -indent-[999px] transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                            aria-current="true"
                            aria-label="Slide 1"></button>
                        <button
                            type="button"
                            data-te-target="#carouselExampleCaptions"
                            data-te-slide-to="1"
                            className="mx-[3px] box-content h-[3px] w-[80px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-[#49BBBD] bg-clip-padding p-0 -indent-[999px] transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                            aria-label="Slide 2"></button>
                        <button
                            type="button"
                            data-te-target="#carouselExampleCaptions"
                            data-te-slide-to="2"
                            className="mx-[3px] box-content h-[3px] w-[80px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-[#49BBBD] bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                            aria-label="Slide 3"></button>
                        <button
                            type="button"
                            data-te-target="#carouselExampleCaptions"
                            data-te-slide-to="2"
                            className="mx-[3px] box-content h-[3px] w-[80px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-[#49BBBD] bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                            aria-label="Slide 3"></button>
                        <button
                            type="button"
                            data-te-target="#carouselExampleCaptions"
                            data-te-slide-to="2"
                            className="mx-[3px] box-content h-[3px] w-[80px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-[#49BBBD] bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                            aria-label="Slide 3"></button>
                    </div>

                    <div className='border-2 py-3 rounded-2xl border-[#49BBBD4D] mt-3 px-6'>
                        <div className='flex justify-between '>
                            <p className='text-[18px] leading-[normal] font-medium text-[#252641]'>Get Started</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4.5} stroke="currentColor" className="w-6 h-6 font-medium">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>

                        </div>
                        <div className='flex justify-between text-[#252641CC] mx-4 '>
                            <div className='flex mt-2 gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className='ml-1 text-[#252641CC] text-opacity-[0.80] leading-[180%] font-medium text-[14px]'>1 Hour</p>
                            </div>

                            <div className='flex mt-2 gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                </svg>
                                <p className=" text-[#252641CC] text-[14px] text-opacity-[0.80] font-medium tracking-[0.28px] leading-[180%]">5 Lessons</p>
                            </div>

                        </div>
                    </div>


                    <div className='border-2 p-5 rounded-2xl border-[#49BBBD] mt-3'>
                        <div className='flex justify-between '>
                            <p className=' text-[#49BBBD] font-medium text-[18px] leading-[normal]'>Illstarator Structuors</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4.5} stroke="currentColor" className="w-6 h-6 text-[#49BBBD]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>
                        </div>

                        <div className='flex justify-between  text-[#252641CC] mt-3  mx-4'>
                            <div className='flex  gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className=" text-[#252641CC] text-[14px] text-opacity-[0.80] font-medium tracking-[0.28px] leading-[180%]">2 Hour</p>
                            </div>

                            <div className='flex gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                </svg>
                                <p className=" text-[#252641CC] text-[14px] text-opacity-[0.80] font-medium tracking-[0.28px] leading-[180%]">3 Lessons</p>
                            </div>
                        </div>
                        <hr className='mt-3' />
                        <div className='flex justify-between mt-3 text-[#49BBBD] mx-4 text-[14px] font-medium leading-[180%] tracking-[0.28px]'>
                            <p>1. lorem ipsumm dolor </p>
                            <p>65:00</p>
                        </div>
                        <hr className='mt-3' />

                        <div className='flex justify-between mt-3 text-[#252641] mx-4 text-[14px] font-medium leading-[180%] tracking-[0.28px]'>
                            <p>2. lorem ipsumm dolor </p>
                            <div className='flex '>
                                <p className='mr-2'>20:00</p>
                                <img src="/Meeting/lock.svg" className='w-[14px]' alt="" />


                            </div>


                        </div>
                        <hr className='mt-3' />

                        <div className='flex justify-between mt-3 text-[#252641] mx-4 text-[14px] font-medium leading-[180%] tracking-[0.28px]'>
                            <p>3. lorem ipsumm dolor amet </p>
                            <div className='flex '>
                                <p className='mr-2'>30:00</p>
                                <img src="/Meeting/lock.svg" className='w-[14px]' alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='border-2 py-3 px-6 rounded-2xl border-[#49BBBD4D] mt-3'>
                        <div className='flex justify-between '>
                            <p className='text-[18px] leading-[normal] font-medium text-[#252641]'>using Illustrator</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>

                        </div>
                        <div className='flex justify-between   mx-4 '>
                            <div className='flex gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="ml-1 text-[#252641CC] text-[14px] text-opacity-[0.80] font-medium tracking-[0.28px] leading-[180%]">1 Hour</p>
                            </div>

                            <div className='flex gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                </svg>
                                <p className="ml-1 text-[#252641CC] text-[14px] text-opacity-[0.80] font-medium tracking-[0.28px] leading-[180%]">4 Lessons</p>
                            </div>

                        </div>
                    </div>
                    <div className='border-2 py-3 px-6 rounded-2xl border-[#49BBBD4D] mt-3'>
                        <div className='flex justify-between '>
                            <p  className='text-[18px] leading-[normal] font-medium text-[#252641]'>What is Pandas?</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>

                        </div>
                        <div className='flex justify-between text-[#252641CC] mx-4 '>
                            <div className='flex gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="ml-1 text-[#252641CC] text-[14px] text-opacity-[0.80] font-medium tracking-[0.28px] leading-[180%]">12:54</p>
                            </div>

                            <div className='flex gap-1' >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                </svg>
                                <p className="ml-1 text-[#252641CC] text-[14px] text-opacity-[0.80] font-medium tracking-[0.28px] leading-[180%]">5 Lessons</p>
                            </div>

                        </div>
                    </div>

                    <div className='border-2 py-3 px-6 rounded-2xl border-[#49BBBD4D] mt-3'>
                        <div className='flex justify-between '>
                            <p  className='text-[18px] leading-[normal] font-medium text-[#252641]'>Work with Numpy</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>

                        </div>
                        <div className='flex justify-between  text-[#252641CC]  mx-4'>
                            <div className='flex gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="ml-1 text-[#252641CC] text-[14px] text-opacity-[0.80] font-medium tracking-[0.28px] leading-[180%]">59:00</p>
                            </div>

                            <div className='flex gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                </svg>
                                <p className="ml-1 text-[#252641CC] text-[14px] text-opacity-[0.80] font-medium tracking-[0.28px] leading-[180%]">3 Lessons</p>
                            </div>

                        </div>
                    </div>




                </div>
                <br />
                <div className='bg-white  rounded-2xl p-5 text-center 2xl:w-[498px] w-auto !h-[470px] 2xl:flex xs:hidden flex-col justify-center'>
                    <div className='flex justify-between'>
                        <p className='text-3xl font-semibold'>Book for you</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-auto h-[25px] text-[#49BBBD]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>

                    </div> <br />
                    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
                        <div className='p-4 rounded-xl shadow-2xl'>
                            <img className='object-cover w-full h-[200px] 2xl:h-[150px] rounded-2xl' src="/Meeting/tablet.svg" alt="" />
                            <p className='text-2xl font-medium'>All Benefits of PLUS</p>
                            <p className='text-3xl font-semibold text-[#49BBBD]'>$24</p>
                        </div>
                        <div className='p-4 rounded-xl shadow-2xl'>
                            <img className='object-cover w-full h-[200px] 2xl:h-[150px] rounded-2xl' src="/Meeting/cat.svg" alt="" />
                            <p className='text-2xl font-medium'>All Benefits of PLUS</p>
                            <p className='text-3xl text-[#49BBBD] font-bold'>$24</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeetingPage