import Image from 'next/image'
const Dashboard = () => {
    return (
        <div className='bg-[#9DCCFF] bg-opacity-[0.2]'>
            <div className='py-10 grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-10    mx-auto  2xl:w-[90%]  xl:w-[85%]  lg:w-[85%]  md:w-[90%]  sm:w-[98%]  xs:w-[98%%]  '>
                <div className='flex flex-col space-y-4 justify-center'>
                    <h6 className='text-[#000] 2xl:text-[24px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] xs:text-[14px] font-[400] leading-[normal]'>By Themadbrains in <span className='text-[#49BBBD]'>inspiration</span></h6>
                    <h1 className='max-w-[670px] text-[#2F327D] 2xl:text-[44px] xl:text-[40px] lg:text-[34px] md:text-[30px] sm:text-[20px] xs:text-[18px] font-[600] leading-[normal]'>Why Swift UI Should Be on the Radar of Every Mobile Developer</h1>
                    <p className='text-[#696984] leading-[180%] font-[400]  tracking-[0.48px] 2xl:text-[24px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] xs:text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit,
                        sed do eiusmod tempor</p>
                    <button className='text-[16px]  text-[#fff] bg-[#49BBBD] font-bold leading-[normal] w-[236px] h-[63px] rounded-[12px]'>Start learning now</button>
                </div>
                <div>
                    <Image
                        src="Blog/Dashboard/office.svg"
                        alt='Pic'
                        width={1500}
                        height={1500} />
                </div>
            </div>
        </div>
    )
}
export default Dashboard