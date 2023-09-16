"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Footer = () => {
  const router = useRouter()
  return (
    <footer className=' bg-[#252641]'>
      <div className='flex gap-16 pt-10 justify-center'>
        <Image
          src="/header/logo.svg"
          alt='Logo'
          height={130}
          width={130}
        />
        <div className='w-[1px] h-[83px] bg-[#626381]' />
        <p className='w-[156px] flex items-center text-[#fff] text-[22px] font-semibold leading-[normal] tracking-[0.88px]'>Virtual Class for Zoom</p>
      </div>
      <p className='mt-32 text-[#B2B3CF] text-center text-[26px] font-[500] leading-[normal] tracking-[1.04px]'>Subscribe to get our Newsletter</p>
      <div className=' pt-6 flex 2xl:flex-row  xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-8 mx-auto justify-center items-center'>
        <input
          id="email"
          type="email"
          placeholder="Your Email"
          className={`flex text-[#fff]  
          2xl:w-[400px]  xl:w-[400px]  lg:w-[400px]  md:w-[400px]  sm:w-[300px]  xs:w-[300px] 
          justify-center items-center  leading-[normal] tracking-[0.8px] rounded-[80px] border-[1px] placeholder:text-[#83839A]  text-[20px] font-[300] h-[54px] border-[#83839A] bg-[#252641] focus:border-[#83839A] pl-5 `}
        />
        <button className='w-[179px]    h-[60px] flex items-center justify-center text-center text-[#fff] font-[500] leading-[normal] rounded-[60px] text-[22px] bg-[#49BBBD]' onClick={()=>router.push("/MemberShip")}>Subscribe</button>
      </div>
      <div className='mt-[8rem] 2xl:flex  xl:flex  lg:flex  md:flex  sm:hidden xs:hidden  gap-4 justify-center items-center'>
        <p className='text-[#B2B3CF] text-[22px] font-[400] leading-[normal] tracking-[0.88px]'> Careers</p>
        <div className='h-[17px] w-[1px] bg-[#626381]' />
        <p className='text-[#B2B3CF] text-[22px] font-[400] leading-[normal] tracking-[0.88px]'>Privacy Policy </p>
        <div className='h-[17px] w-[1px] bg-[#626381]' />
        <p className='text-[#B2B3CF] text-[22px] font-[400] leading-[normal] tracking-[0.88px]'>Terms & Conditions </p>
      </div>
      <p className='text-[#B2B3CF] text-center py-[2rem] text-[22px] font-[400] leading-[normal] tracking-[0.88px]'>&copy; 2021 Class Technologies Inc. </p>
    </footer>
  )
}

export default Footer