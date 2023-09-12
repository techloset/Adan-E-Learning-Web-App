import Image from 'next/image'
const Explore = () => {
    return (
        <div className='mt-20 relative'>
            {/* Background */}
            <div className='bg-[#9DCCFF] rounded-br-[100px] absolute w-[80%] top-0 left-0 opacity-[0.2] 2xl:h-[140vh] xl:h-auto lg:h-auto md:h-auto sm:h-auto xs:h-auto' />
            {/* Explore Page */}
            <div className=' pt-60 relative 2xl:ml-[10%] xl:ml-[10%] lg:ml-[5%] md:ml-[5%]  sm:ml-[2%] xs:ml-[2%]'>
                {/* Heading */}
                <div>
                    <h1 className='text-[44px] homeExploreBlacktext font-bold leading-[normal] font-[Roboto]'>Explore Course</h1>
                    <p className='text-[24px] homeExploreBlacktextTwo font-[500] leading-[normal] font-[Roboto]'>Ut sed eros finibus, placerat orci id, dapibus.</p>
                </div>
                {/* BookOne */}
                <div className='mt-20'>
                    {/* Heading */}
                    <div className='flex  justify-between w-full pr-10'>
                        <div className='flex gap-3'>
                            <Image
                                src="homepage/Explore/Paint.svg"
                                alt=""
                                height={30}
                                width={30}
                               />
                            <h3 className='homeExploreBlacktextThree font-[Roboto] 2xl:text-[28px] xl:text-[28px] lg:text-[18px] md:text-[18px]  sm:text-[18px]  xs:text-[15px] font-bold leading-[normal]'>Lorem Ipsum</h3>
                        </div>
                        <button className='text-[#00BCD4]  2xl:text-[28px] xl:text-[28px] lg:text-[18px] md:text-[18px]  sm:text-[18px]  xs:text-[15px] font-[500] leading-[normal] uppercase font-[Roboto] cursor-pointer flex gap-8 items-center'>
                            <p> See all</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none" className='w-auto h-auto'>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.947266 18.8256H25.2563L14.0518 30.0542L16.9533 32.8612L32.9594 16.8205L16.9533 0.779785L14.1525 3.58681L25.2563 14.8154H0.947266V18.8256Z" fill="#00BCD4" />
                            </svg>
                        </button>
                    </div>
                    {/* Books */}
                    <div>
                    <Image src="/homepage/Explore/BookOne.png"
                     alt='BookOne' height={6000} width={6000}/>
                    </div>
                </div>
                {/* BookTwo */}
                <div className='mt-20'>
                    {/* Heading */}
                    <div className='flex  justify-between w-full pr-10'>
                        <div className='flex gap-3'>
                            <Image
                                src="homepage/Explore/gobal.svg"
                                alt=""
                                height={30}
                                width={30}
                               />
                            <h3 className='homeExploreBlacktextThree font-[Roboto] 2xl:text-[28px] xl:text-[28px] lg:text-[18px] md:text-[18px]  sm:text-[18px]  xs:text-[15px] font-bold leading-[normal]'>Quisque a Consequat</h3>
                        </div>
                        <button className='text-[#00BCD4]  2xl:text-[28px] xl:text-[28px] lg:text-[18px] md:text-[18px]  sm:text-[18px]  xs:text-[15px] font-[500] leading-[normal] uppercase font-[Roboto] cursor-pointer flex gap-8 items-center'>
                            <p> See all</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none" className='w-auto h-auto'>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.947266 18.8256H25.2563L14.0518 30.0542L16.9533 32.8612L32.9594 16.8205L16.9533 0.779785L14.1525 3.58681L25.2563 14.8154H0.947266V18.8256Z" fill="#00BCD4" />
                            </svg>
                        </button>
                    </div>
                    {/* Books */}
                    <div>
                    <Image src="/homepage/Explore/BookTwo.png"
                     alt='BookOne' height={6000} width={6000}/>
                    </div>
                </div>
                {/* BookThree */}
                <div className='mt-20'>
                    {/* Heading */}
                    <div className='flex  justify-between w-full pr-10'>
                        <div className='flex gap-3'>
                            <Image
                                src="homepage/Explore/award.svg"
                                alt=""
                                height={30}
                                width={30}
                               />
                            <h3 className='homeExploreBlacktextThree font-[Roboto] 2xl:text-[28px] xl:text-[28px] lg:text-[18px] md:text-[18px]  sm:text-[18px]  xs:text-[15px] font-bold leading-[normal]'>Aenean Facilisis</h3>
                        </div>
                        <button className='text-[#00BCD4]  2xl:text-[28px] xl:text-[28px] lg:text-[18px] md:text-[18px]  sm:text-[18px]  xs:text-[15px] font-[500] leading-[normal] uppercase font-[Roboto] cursor-pointer flex gap-8 items-center'>
                            <p> See all</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none" className='w-auto h-auto'>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.947266 18.8256H25.2563L14.0518 30.0542L16.9533 32.8612L32.9594 16.8205L16.9533 0.779785L14.1525 3.58681L25.2563 14.8154H0.947266V18.8256Z" fill="#00BCD4" />
                            </svg>
                        </button>
                    </div>
                    {/* Books */}
                    <div>
                    <Image src="/homepage/Explore/BookThree.png"
                     alt='BookOne' height={6000} width={6000}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Explore