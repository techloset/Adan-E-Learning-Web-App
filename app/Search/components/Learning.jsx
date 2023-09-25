import Image from "next/image"

const Learning = () => {
  return (
    <div className='my-20 rounded-[20px] flex bg-[#9DCCFF] b bg-opacity-[0.2] py-2 max-w-[1682px] min-h-[539px] w-[95%] lg:flex-row sm:flex-col xs:flex-col mx-auto justify-between items-center'>
                <div className='flex flex-col justify-center 2xl:pl-40 sm:pl-2 xs:pl-2 2xl:w-[40%] lg:w-[50%] sm:w-[100%] xs:w-full mx-auto'>
                    <h1 className='font-semibold text-[30px] leading-[normal] max-w-[331px] text-[#252641]'>Know about Learning learning platform</h1>
                    <div className='flex flex-col gap-3 my-10'>
                        <div className='flex gap-4 items-center'>
                            <div className='w-[20px] h-[20px] rounded-full opacity-[0.48] bg-[#55EFC4]' />
                            <p className='text-[#2D3436] text-[18px] font-[400] leading-[32px] '>Free E-book, video & consolation</p>
                        </div>

                        <div className='flex gap-4 items-center'>
                            <div className='w-[20px] h-[20px] rounded-full opacity-[0.48] bg-[#55EFC4]' />
                            <p className='text-[#2D3436] text-[18px] font-[400] leading-[32px] '>Top instructors from around world</p>
                        </div>

                        <div className='flex gap-4 items-center'>
                            <div className='w-[20px] h-[20px] rounded-full opacity-[0.48] bg-[#55EFC4]' />
                            <p className='text-[#2D3436] text-[18px] font-[400] leading-[32px] '>Top courses from your team</p>
                        </div>
                    </div>
                    <button className='text-[24px] text-[#fff] w-[309px] bg-[#49BBBD] flex justify-center items-center h-[63px] rounded-[12px] font-bold leading-[normal] '>Start learning now</button>
                </div>
                <div className='2xl:pl-40 2xl:pr-20 sm:pr-5 sm:pl-5 2xl:w-[60%] lg:w-[50%] sm:w-full xs:w-full mx-auto'>
                    <Image
                        src="/Search/office.png"
                        alt=''
                        height={700}
                        width={700}
                        className='mx-auto' />
                </div>
            </div>
  )
}

export default Learning