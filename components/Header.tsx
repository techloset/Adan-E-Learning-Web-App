"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";


function Header() {
    const [navbar, setNavbar] = useState(false);
    const router = useRouter()
    return (
        <>
            <div className='mb-0 flex justify-between px-20 pt-8  xl:flex sm:hidden xs:hidden md:hidden bg-white'>
                <div className='flex items-center'>
                    <div className='flex justify-center text-center items-center pb-4 pr-2 '>
                        <Image src="/Logo.svg" alt="Logo" width={80} height={80} className="w-18 h-18" />
                    </div>
                </div>
                <div className='flex items-center'>
                    <div>
                        <ul className='flex'>
                            <li className='text-[22px] font-[400] leading-[normal] tracking-[0.44px] text-[#5B5B5B] mr-[40px]  cursor-pointer' onClick={()=> router.push("/")}>Home</li>
                            <li className='text-[22px] font-[400] leading-[normal] tracking-[0.44px] text-[#5B5B5B] mr-[40px]  cursor-pointer' onClick={()=> router.push("/Course")}>Courses</li>
                            <li className='text-[22px] font-[400] leading-[normal] tracking-[0.44px] text-[#5B5B5B] mr-[40px]  cursor-pointer' onClick={()=> router.push("/Search")}>Careers</li>
                            <li className='text-[22px] font-[400] leading-[normal] tracking-[0.44px] text-[#5B5B5B] mr-[40px]  cursor-pointer' onClick={()=> router.push("/Blog")}>Blog</li>
                            <li className='text-[22px] font-[400] leading-[normal] tracking-[0.44px] text-[#5B5B5B] mr-[60px]  cursor-pointer' onClick={()=> router.push("/Literature")}>About Us</li>
                        </ul>
                    </div>
                    <div className="gap-3 flex items-center ">
                        <div className='w-[44px] h-[44px] rounded-full flex items-center  bg-[#D9D9D9]'>
                            <Image
                                src="/Profile/Profile.svg"
                                alt=''
                                height={24}
                                width={24}
                                className='h-[44px] w-[44px]' />
                        </div>
                        <p className='text-[#000]   font-[500] leading-[normal] tracking-[0.36px] text-[18px]'>Nina</p>
                        <Image
                            src="/Down.png"
                            alt=""
                            height={24}
                            width={24}
                            className="h-[18px] w-[18px] " />
                    </div>
                </div>
            </div>




            <nav className="w-full bg-white xl:hidden">
                <div className="justify-between px-5 mx-auto lg:max-w-7xl lg:items-center  lg:flex lg:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
                            <div className="logo lg:col-span-3 my-auto sm:col-span-6">
                                <div className='flex '>
                                    <Image src="/Logo.svg" alt="Logo" width={80} height={80} className="w-20 h-20" />
                                </div>
                            </div>
                            <div className="lg:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-black "
                                            viewBox="0 0 20 20"

                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                                className="text-black"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="fill-current h-6 w-6"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <title>Menu</title>
                                            <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" fillRule="evenodd" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 mb-0 ${navbar ? "block" : "hidden"}`}>
                            <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                            <li className='text-[22px] font-[400] leading-[normal] tracking-[0.44px] text-[#5B5B5B] mr-[40px]  cursor-pointer' onClick={()=> router.push("/")}>Home</li>
                            <li className='text-[22px] font-[400] leading-[normal] tracking-[0.44px] text-[#5B5B5B] mr-[40px]  cursor-pointer' onClick={()=> router.push("/Course")}>Courses</li>
                            <li className='text-[22px] font-[400] leading-[normal] tracking-[0.44px] text-[#5B5B5B] mr-[40px]  cursor-pointer' onClick={()=> router.push("/Search")}>Careers</li>
                            <li className='text-[22px] font-[400] leading-[normal] tracking-[0.44px] text-[#5B5B5B] mr-[40px]  cursor-pointer' onClick={()=> router.push("/Blog")}>Blog</li>
                            <li className='text-[22px] font-[400] leading-[normal] tracking-[0.44px] text-[#5B5B5B] mr-[60px]  cursor-pointer' onClick={()=> router.push("/Literature")}>About Us</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header