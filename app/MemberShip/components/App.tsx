import Image from 'next/image'
import React from 'react'

const App = () => {
    return (
        <div className='relative'>
            <div className='p-20 bg-[#9DCCFF] bg-opacity-[0.2] ' />
            <div className='max-w-[1682px] lg:w-[90%] md:w-[98%] sm:w-[98%] xs:w-[98%]  min-h-[218px]  rounded-[37px] bg-[#252641] mx-auto flex lg:justify-between md:justify-center sm:justify-center xs:justify-center gap-4 items-center lg:px-16 md:px-2 sm:px-2 xs:px-2 py-4 lg:flex-row md:flex-col sm:flex-col xs:flex-col absolute mt-[-109px] lg:left-[5%] lg:right-[5%] left-[10px]'>
                <p className='text-[#fff] text-[36px] font-semibold leading-[normal] text-center'>APP is available for free</p>
                <div className='flex gap-5 lg:flex-row md:flex-col sm:flex-col xs:flex-col'>
                    <div className='flex gap-3 justify-center items-center w-[254px] h-[63px] rounded-[12px] bg-[#29B9E7] cursor-pointer'>
                        <Image
                            src="/MemberShip/App/Android.svg"
                            alt=""
                            height={200}
                            width={200}
                            className='h-[30px] w-[30px]' />
                        <p className='text-[#FFF] text-[24px] font-semibold leading-[normal]'>Android APP</p>
                    </div>
                    <div className='flex gap-2 justify-center items-center w-[254px] h-[63px] rounded-[12px] bg-[#49BBBD] cursor-pointer'>
                        <Image
                            src="/MemberShip/App/Apple.svg"
                            alt=""
                            height={200}
                            width={200}
                            className='h-[30px] w-[30px]' />
                        <p className='text-[#FFF] text-[24px] font-semibold leading-[normal]'>IOS APP</p>
                    </div>
                </div>
            </div>
            <div className='h-[218px] bg-white'/>
        </div>
    )
}

export default App