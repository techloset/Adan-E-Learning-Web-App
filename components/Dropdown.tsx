"use client"
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Image from "next/image";
import { useRouter } from 'next/navigation';


const Dropdown = () => {
    const router= useRouter()
    return (

        <>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button>
                        <div className="gap-3 flex items-center xl:mr-[15px] sm:mr-1">
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
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            <Menu.Item >
                                <p className='border-b-2 cursor-pointer hover:bg-gray-100 border-gray-400 text-black block px-4 py-2 text-md'   onClick={()=>router.push("/Meeting")} >
                                    Meeting
                                </p>
                            </Menu.Item>
                            <Menu.Item>
                                <p className='border-b-2 cursor-pointer hover:bg-gray-100 border-gray-400 text-black block px-4 py-2 text-md'   onClick={()=>router.push("/MemberShip")} >
                                    Member Ship
                                </p>
                            </Menu.Item>
                            <Menu.Item>
                                <p className='border-b-2 cursor-pointer hover:bg-gray-100 border-gray-400 text-black block px-4 py-2 text-md' onClick={()=>router.push("/ChekOut")} >
                                    Check Out
                                </p>
                            </Menu.Item>
                            <Menu.Item>
                                <p className='border-b-2 cursor-pointer hover:bg-gray-100 border-gray-400 text-black block px-4 py-2 text-md'  onClick={()=>router.push("/Blog/Details")} >
                                    Blog Details
                                </p>
                            </Menu.Item>
                            <Menu.Item>
                                <p className=' cursor-pointer hover:bg-gray-100 border-gray-400 text-black block px-4 py-2 text-md' onClick={()=>router.push("/Course/Details")}  >
                                    Course Details
                                </p>
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    )
}

export default Dropdown