import Image from "next/image"
const WhatTheySay = () => {
    return (
        <div className='mt-40'>
            <div className='mt-20 grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-10 justify-between   mx-auto 2xl:w-[80%]  xl:w-[85%]  lg:w-[85%]  md:w-[90%]  sm:w-[98%]  xs:w-[98%%]  '>
                <div className='flex flex-col '>
                    <div className='flex gap-6  items-center'>
                        <hr className='border-[1px] border-[#525596] w-[80px]' /><h5 className='text-[#525596]  font-[400] leading-[normal] text-[20px] tracking-[4px]'>TESTIMONIAL</h5>
                    </div>
                    <h1 className='mt-10 text-[#2F327D] font-bold leading-[normal] text-[60px] '>What They Say?</h1>
                    <p className='mt-8 max-w-[607px] text-[26px] font-[400] text-[#696984] tracking-[0.51px] leading-[160%]'>TOTC has got more than 100k positive ratings from our users around the world. </p>
                    <p className='mt-4 max-w-[573px] text-[26px] font-[400] text-[#696984] tracking-[0.51px] leading-[160%]'>Some of the students and teachers were greatly helped by the Skilline.</p>
                    <p className='mt-6 text-[26px] font-[400] text-[#696984] tracking-[0.51px] leading-[160%]'>Are you too? Please give your assessment</p>
                    <div className='mt-8 max-w-[403px] h-[80px] border-[1px] text-[#49BBBD] border-[#49BBBD] rounded-[80px] items-center flex justify-between cursor-pointer hover:bg-[#49BBBD] hover:border-white hover:text-white hover:stroke-white'>
                        <p className='pl-8  font-[400] leading-[160%] tracking-[0.44px] text-[22px] '>Write your assessment</p>    
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none"  >
                            <circle cx="40" cy="40" r="39.5" stroke="#49BBBD" />
                            <path d="M52.7071 40.7071C53.0976 40.3166 53.0976 39.6834 52.7071
                             39.2929L46.3431 32.9289C45.9526 32.5384 45.3195 32.5384 44.9289 32.9289C44.5384 
                             33.3195 44.5384 33.9526 44.9289 34.3431L50.5858 40L44.9289 45.6569C44.5384 46.0474 
                             44.5384 46.6805 44.9289 47.0711C45.3195 47.4616 45.9526 47.4616 46.3431 
                            47.0711L52.7071 40.7071ZM27 41L52 41L52 39L27 39L27 41Z" fill="#49BBBD" />
                        </svg>
                  
                       
                    </div>
                </div>
                <div>
                    <Image
                        src="/homepage/WhatTheySay/Comment.png"
                        alt='Pic'
                        width={1000}
                        height={1000} />
                </div>
            </div>
        </div>
    )
}
export default WhatTheySay