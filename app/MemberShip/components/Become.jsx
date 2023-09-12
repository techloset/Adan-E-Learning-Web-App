import Image from "next/image"
const Become = () => {
    return (
        <div className="2xl:w-[85%] xl:w-[90%] lg:w-[95%] md:w-[80%] sm:w-[98%] xs:w-[98%] mx-auto  mb-[8rem]">
            <div className='grid  justify-between lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-10'>
                <div className="max-w-[786px] w-auto h-auto rounded-[20px] bg-[#fff] MemberShipBoxShadow py-4 px-3">
                    <Image src='/Blog/Dashboard/office.svg' alt="" height={750} width={750} />
                    <h3 className="text-[#252641] text-[26px] font-medium leading-[180%] mt-3">Become a Teacher</h3>
                    <p className="mt-3 max-w-[685.125px] text-[#696984] tracking-[0.4px] leading-[180%] font-[400] text-[20px]">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                    <div className="w-full flex justify-end items-end">
                        <button className="mt-3 flex items-center justify-center  text-[#fff] text-[20px] font-[500] leading-[180%] bg-[#49BBBD] w-[254px] h-[63px] rounded-[13px]">Apply a Teacher</button>
                    </div>
                </div>
                <div className="max-w-[786px] w-auto  h-auto rounded-[20px] bg-[#fff] MemberShipBoxShadow py-4 px-3">
                    <Image src='/Blog/Dashboard/office.svg' alt="" height={750} width={750} />
                    <h3 className="text-[#252641] text-[26px] font-medium leading-[180%] mt-3">Become a Coursector</h3>
                    <p className="mt-3 max-w-[685.125px] text-[#696984] tracking-[0.4px] leading-[180%] font-[400] text-[20px]">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                    <div className="w-full flex justify-end items-end">
                        <button className="mt-3 flex items-center justify-center  text-[#fff] text-[20px] font-[500] leading-[180%] bg-[#49BBBD] w-[254px] h-[63px] rounded-[13px]">Apply a  Coursector</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Become