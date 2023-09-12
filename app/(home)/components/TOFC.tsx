import Image from "next/image"
const Tofc = () => {
    return (
        <div className=' mt-20 '>
            {/* Heading */}
            <div className='text-center  space-y-3 '>
                <h2 className='text-[44px] font-semibold leading-[180%]  text-[#2F327D]'>What is<span className='text-[#00CBB8]'> TOTC? </span></h2>
                <div className='flex items-center justify-center text-center'>
                    <p className='max-w-[1101px] flex  text-[24px] font-[400] leading-[180%] text-[#696984] tracking-[0.48px]'>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams;
                        monitor due dates; grade results and provide students with feedback all in one place.
                    </p>
                </div>
            </div>

            {/* Cards */}
            <div className='mt-20  grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-10 justify-center items-center  mx-auto 2xl:w-[70%]  xl:w-[75%]  lg:w-[80%]  md:w-[95%]  sm:w-[98%]  xs:w-[98%%]  '>

                <div className="max-w-[600px] w-auto bg-no-repeat h-[400px]  rounded-[24px] bg-cover" style={{ backgroundImage: 'url(/homepage/Tofc/CardImgOne.svg)' }} >
                    <div className="w-full flex items-center justify-center h-full flex-col gap-5">
                        <p className="text-[#FFF] text-[32px] font-semibold leading-[normal]">FOR INSTRUCTORS</p>
                        <button className="w-[283px] h-[80px] border-[1px] border-[#fff] rounded-[80px] text-[22px] font-[500] text-center text-[#fff] leading-[normal]">Start a class today</button>
                    </div>
                </div>
                <div className="max-w-[600px] w-auto bg-no-repeat h-[400px]  rounded-[24px] bg-cover" style={{ backgroundImage: 'url(/homepage/Tofc/CardImgTwo.svg)' }} >
                    <div className="w-full flex items-center justify-center h-full flex-col gap-5">
                        <p className="text-[#FFF] text-[32px] font-semibold leading-[normal]">FOR STUDENTS</p>
                        <button className="w-[283px] h-[80px] homeTofcBlueOpacity  rounded-[80px] text-[22px] font-[500] text-center  leading-[normal]">Start a class today</button>
                    </div>
                </div>

            </div>


            {/* TOFC OFFICE */}
            <div className="mt-40">
                <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-10 justify-center items-center  mx-auto 2xl:w-[80%]  xl:w-[85%]  lg:w-[85%]  md:w-[90%]  sm:w-[98%]  xs:w-[98%%]  '>

                    <div className="relative max-w-[800px] mx-[auto]"  >
                        <div className="h-[73px] w-[73px] rounded-full bg-[#33EFA0] absolute top-0 left-0 " />
                        <div className="h-[30px] w-[30px] rounded-full bg-[#33EFA0] absolute bottom-[36%] right-0 " />
                        <div className="relative m-2">
                            <h1 className="max-w-[655px] text-[36px] font-[500] leading-[160%] text-[#2F327D]">Everything you can do in a physical<br /> classroom, <span className="text-[#00CBB8]">you can do with TOTC</span></h1>
                            <p className="relative max-w-[730px] text-[#696984] font-[400] text-[24px] leading-[180%] tracking-[0.48px] mt-[2rem]">
                                TOTC’s school management software helps traditional
                                and online schools manage scheduling, attendance, payments and
                                virtual
                                classrooms all in one secure cloud-based system.
                            </p>
                            <button className="text-[#696984] text-[22px] font-[400] underline leading-[180%] mt-[2rem]">Learn More</button>
                        </div>
                    </div>
                    <div>
                        <Image
                            alt="Office"
                            src="homepage/Tofc/Office.svg"
                            height={1000}
                            width={1000}
                            className="" />
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Tofc