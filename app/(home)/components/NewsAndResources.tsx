import Image from 'next/image'
const NewsAndResources = () => {
    return (
        <div className='mt-40 pb-20'>
            {/* Heading */}
            <div  className='f font-nunito-sans'>
                <h1 className='text-[#2F327D]  text-[36px] font-bold leading-[180%] text-center'>Lastest News and Resources</h1>
                <p className='text-[#696984] text-center  text-[24px] font-[400] leading-[180%]'>See the developments that have occurred to TOTC in the world</p>
            </div>
            {/* Cards */}
            <div className='mt-20 grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-20    mx-auto 2xl:w-[80%]  xl:w-[95%]  lg:w-[100%]  md:w-[90%]  sm:w-[98%]  xs:w-[98%%]'>
                <div className='flex flex-col justify-end mx-auto'>
                    <Image
                        src="/homepage/News/Laptop.svg"
                        alt='Pic'
                        width={700}
                        height={700} />
                    <button className='mt-12 w-[130px] h-[40px] rounded-[80px] bg-[#49BBBD] text-white flex justify-center text-[20px] font-[500] leading-[180%] tracking-[0.4px]'>NEWS</button>
                    <h1 className='mt-8 max-w-[609px] text-[#252641] text-[26px] font-[500] leading-[180%] '>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h1>
                    <p className='mt-4 max-w-[609px] text-[#696984] text-[20px] font-[400] leading-[180%] tracking-[0.4px]'>Class, launched less than a year ago by Blackboard  co_founder Michael Chasen, integrates exclusively...</p>
                    <p className='mt-8 underline text-[#696984] text-[20px] font-[400] leading-[180%] tracking-[0.4px]'>Read more</p>

                </div>
                <div className='space-y-20'>
                    <div className='flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col gap-4 justify-center items-center '>
                        <div className='relative'>
                            <Image
                                src="homepage/News/Girl.svg"
                                alt="Girl At Laptop"
                                height={250}
                                width={250} />
                            <button className='mt-12 pt-1 w-[154px] h-[34px] rounded-[80px] bg-[#49BBBD] text-white flex justify-center text-[18px] font-[400] leading-[normal] tracking-[0.36px] absolute bottom-3 right-3'>PRESS RELEASE</button>
                        </div>
                        <div className='space-y-4'>
                            <h3 className='max-w-[477px] text-[#252641] text-[22px] font-[500] leading-[180%]'>Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand</h3>
                            <p className='max-w-[447px] text-[#696984] text-[20px] font-[400] leading-[180%] tracking-[0.4px]'>Class Technologies Inc., the company that created Class,...</p>
                        </div>

                    </div>
                    <div className='flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col gap-4 justify-center items-center'>
                        <div className='relative'>
                            <Image
                                src="homepage/News/Laptop2.svg"
                                alt="Girl At Laptop"
                                height={250}
                                width={250} />
                            <button className='mt-12 pt-1 w-[100px] h-[34px] rounded-[80px] bg-[#49BBBD] text-white flex justify-center text-[18px] font-[400] leading-[normal] tracking-[0.36px] absolute bottom-3 right-3'>NEWS</button>
                        </div>
                        <div className='space-y-4'>
                            <h3 className='max-w-[477px] text-[#252641] text-[22px] font-[500] leading-[180%]'>Zoom’s earliest investors are betting millions on a better Zoom for schools</h3>
                            <p className='max-w-[447px] text-[#696984] text-[20px] font-[400] leading-[180%] tracking-[0.4px]'>Zoom was never created to be a consumer product. Nonetheless, the...</p>
                        </div>

                    </div>
                    <div className='flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col gap-4 justify-center items-center'>
                        <div className='relative'>
                            <Image
                                src="homepage/News/Cat.svg"
                                alt="Girl At Laptop"
                                height={250}
                                width={250} />
                            <button className='mt-12 pt-1 w-[100px] h-[34px] rounded-[80px] bg-[#49BBBD] text-white flex justify-center text-[18px] font-[400] leading-[normal] tracking-[0.36px] absolute bottom-3 right-3'>NEWS</button>
                        </div>
                        <div className='space-y-4'>
                            <h3 className='max-w-[477px] text-[#252641] text-[22px] font-[500] leading-[180%]'>Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms</h3>
                            <p className='max-w-[447px] text-[#696984] text-[20px] font-[400] leading-[180%] tracking-[0.4px]'>This year, investors have reaped big financial returns from betting on Zoom...</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
export default NewsAndResources