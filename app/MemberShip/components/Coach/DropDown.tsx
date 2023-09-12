"use client"
import Image from "next/image"
import { useState } from "react"

interface DropDownProps{
    Heading:String,
    Text:String
}

const DropDown:React.FC<DropDownProps> = ({Heading,Text}) => {

    const [Open, setOpen] = useState(false)

    return (
        <div className="flex flex-col space-y-3 cursor-pointer"   onClick={() => setOpen(!Open)}>
            <div className="flex items-center justify-between gap-2">

                <div className="flex items-center gap-2">
                    <div className="w-[20px] h-[20px] rounded-full opacity-[0.48] bg-[#55EFC4]" />
                    <p className="text-[#2D3436]  leading-[32px] font-[400]  lg:text-[18px] md:text-[16px] sm:text-[14px] xs:text-[12px]">{Heading}</p>
                </div>

                <div >
                    {Open ? <Image src="/MemberShip/Coach/UpArrow.svg" alt=""
                        height={200}
                        width={200}
                        className="w-[24px] h-[24px]" />:<Image src="/MemberShip/Coach/DownArrow.svg" alt=""
                        height={200}
                        width={200}
                        className="w-[24px] h-[24px]" />}                   
                </div>
            </div>
            {Open && 
            <p className="text-[#696984] text-[14px] font-[400] leading-[180%] tracking-[0.2px] max-w-[1624px] w-auto ">{Text}</p>}
            <hr className="bg-[#696984] h-[0.5px]" />
        </div>
    )
}

export default DropDown