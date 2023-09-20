"use client"
import Image from 'next/image'
import { useCallback, useState } from "react";
import Input from './components/Input';
type Variant = 'LOGIN' | 'REGISTER'
const Authpage = () => {
  const [variant, setVariant] = useState<Variant>('LOGIN')
  const toggleVariant = useCallback(() => {
    if (variant == 'LOGIN') {
      setVariant('REGISTER')
    } else {
      setVariant('LOGIN')
    }
  }, [variant]);
  return (
    <div className="p-4">
      <div className="flex">
        <div className="h-[94vh] w-1/2 2xl:block xl:block lg:block md:hidden sm:hidden xs:w-hidden hidden  relative">
          {variant == "LOGIN" ? (
            <Image
              src="Auth/Login.svg"
              alt="Login"
              layout="fill"
              objectFit="cover"
              objectPosition="left center"
              className='rounded-[29px]'
            />) :
            <Image
              src="Auth/SignUp.svg"
              alt="Login"
              layout="fill"
              objectFit="cover"
              objectPosition="left center"
              className='rounded-[29px]'
            />
          }
          <div className='bottom-[5%] left-[10%] absolute gap-3'>
            <p className='text-[#fff] text-[37px] font-[700] leading-[normal]'>Lorem Ipsum is simply </p>
            <p className='text-[#fff] text-[25px] font-[400] leading-[normal]'>Lorem Ipsum is simply  </p>
          </div>
        </div>
        <div className='justify-center  my-20 items-center flex flex-col 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full xs:w-full'>
          {/* Headings */}
          <h1 className='text-[#000] text-[16px] font-[400] leading-[normal] text-center'>Welcome to lorem..!</h1>
          <div className='mt-6 2xl:w-[329px] xl:w-[329px] lg:w-[329px] md:w-[315px]  sm:w-[315px]  xs:w-[315px] h-[59px]  rounded-[33px] AuthLoginBlueBg flex items-center justify-between px-3 gap-1'>
            <button className={`${variant == "LOGIN" ? "bg-[#49BBBD]" : ""} text-[#fff] font-[500] text-[16px] leading-[normal]  rounded-[33px] h-[40px] 2xl:w-[146px] xl:w-[146px] lg:w-[146px] md:w-[139.787px]  sm:w-[139.787px]  xs:w-[139.787px] flex items-center text-center ju justify-center`} onClick={toggleVariant}>Login</button>
            <button className={`${variant == "REGISTER" ? "bg-[#49BBBD]" : ""} text-[#fff] font-[500] text-[16px] h-[40px] 2xl:w-[146px] xl:w-[146px] lg:w-[146px] md:w-[139.787px]  sm:w-[139.787px]  xs:w-[139.787px] leading-[normal] rounded-[33px]  flex items-center text-center  justify-center`} onClick={toggleVariant}>Register</button>
          </div>
          <h5 className='mt-16 flex items-center justify-center text-[#5B5B5B] text-[16px] font-[400] leading-[normal] max-w-[454px] min-w-[331px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
          {/* AuthForm */}
          <form className='mt-10 space-y-9'>
            {variant == "REGISTER" && (
              <Input
                id="email"
                label="Email Address"
                type='email'
                placeholder='Enter your Email Address' />
            )}
            <Input
              id="Username"
              label="User name"
              type='text'
              placeholder='Enter your User name' />
            <Input
              id="password"
              label="Password"
              type="password"
              placeholder='Enter your Password' />

          </form>
          {variant == "LOGIN" && (
            <div className="mt-4 flex items-center justify-between  2xl:w-[435px] xl:w-[435px] lg:w-[435px] md:w-[435px] sm:w-[317.148px] xs:w-[317.148px]">
              <div className='flex gap-[2px]'>
                <input type="checkbox" placeholder='n' className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                <p className=" text-[12px] font-[300] text-[#000] leading-[normal]">Remember me</p>
              </div>
              <p className=" text-[12px] font-[300] text-[#000] leading-[normal]">Forgot password?</p>
            </div>)}
          <div className='2xl:w-[435px] xl:w-[435px] lg:w-[435px] md:w-[435px] sm:w-[317.148px] xs:w-[317.148px] items-end flex flex-col mt-10'>
            <button className=' text-[#fff] text-[16px] font-[400] leading-[normal] rounded-[36px] w-[232px] h-[49px] bg-[#49BBBD] flex items-center text-center justify-center'>{variant == "LOGIN" ? "Login" : "Register"}</button>
          </div>
        </div>
      </div>
    </div>


  )
}
export default Authpage