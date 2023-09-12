'use client';
import Image from "next/image";
import { useState } from "react"
interface InputProps {
    label: string;
    id: string;
    type?: string;
    placeholder: string
}
const Input: React.FC<InputProps> = ({
    label,
    id,
    type,
    placeholder
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className="2xl:w-[435px] xl:w-[435px] lg:w-[435px] md:w-[435px] sm:w-[317.148px] xs:w-[317.148px] space-y-3">
            <label className="block text-[#000]  leading-[normal] font-[400] text-[16px] text-left" htmlFor={id}>{label}</label>
            <div className="mt-2 relative">
                <input
                    id={id}
                    type={showPassword ? 'text' : type}
                    placeholder={placeholder}
                    className={` block w-full rounded-[40px] border-[1px] placeholder:text-[#ACACAC] text-[15px] font-[300] leading-[normal] h-[54px] border-[#49BBBD] bg-[#fff] focus:border-[#1d5051] pl-5 text-[#000]`}
                />
                {label == "Password" &&
                    (<>{showPassword ?
                        (<Image src="Auth/OpenEye.svg" alt=""
                            width={20}
                            height={20}
                            className="absolute right-7 bottom-[17px]"
                            onClick={togglePasswordVisibility}
                        />)
                        : <Image src="Auth/ClosedEye.svg" alt=""
                            width={20}
                            height={20}
                            className="absolute right-7 bottom-[17px]"
                            onClick={togglePasswordVisibility}
                        />}</>)}
            </div>
        </div>
    )
}
export default Input