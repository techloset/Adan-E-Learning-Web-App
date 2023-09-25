import Image from "next/image"
const Dashboard = () => {
    return (
        <div className="lg:w-[90%] md:w-[98%] sm:w-[98%] xs:w-[98%] mx-auto my-10">
            <div className='flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-10'>
                <div className="max-w-[982px] lg:w-[60%] md:w-full sm:w-full xs:w-full h-auto rounded-[20px] bg-[#fff] MemberShipBoxShadow p-5 px-10">
                    <h3 className="text-[#252641] text-[36px] font-semibold leading-[normal] mt-5">Checkout</h3>
                    <p className="mt-1 text-[#5B5B5B] text-[18px] font-semibold leading-[normal]">Cart Type</p>
                    <div className="flex xl:flex-row lg:flex-col md:flex-col sm:flex-col xs:flex-col lg:justify-start md:justify-start sm:justify-center xs:justify-center items-center gap-3 mt-5 w-full">
                        <div className="xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col items-center gap-3 flex">
                            <Image
                                src="/Checkout/1.svg"
                                alt=""
                                height={150}
                                width={150}
                            />
                            <Image
                                src="/Checkout/2.svg"
                                alt=""
                                height={150}
                                width={150}
                            />
                        </div>
                        <div className="xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col items-center gap-3 flex">
                            <Image
                                src="/Checkout/3.svg"
                                alt=""
                                height={150}
                                width={150}
                            />
                            <Image
                                src="/Checkout/2.svg"
                                alt=""
                                height={150}
                                width={150}
                            />
                        </div>

                    </div>
                    <form className="mt-10 flex flex-col gap-6">

                        <div className="flex flex-col gap-3">
                            <label className="text-[#5B5B5B] text-[18px] font-semibold leading-[normal]">Name on Card</label>
                            <input
                                placeholder="Enter name on Card"
                                type="text"
                                className=' block w-full max-w-[842px] rounded-[10px] border-[1px] placeholder:text-[#9D9B9B] text-[18px] font-[400]   leading-[normal] h-[60px] border-[#D9D9D9] bg-[#D9D9D9] bg-opacity-0  focus:border-[#1d5051] pl-5 text-[#000]' />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-[#5B5B5B] text-[18px] font-semibold leading-[normal]">Card Number</label>
                            <input
                                placeholder="Enter Card Number"
                                type="text"
                                className=' block w-full max-w-[842px] rounded-[10px] border-[1px] placeholder:text-[#9D9B9B] text-[18px] font-[400]   leading-[normal] h-[60px] border-[#D9D9D9] bg-[#D9D9D9] bg-opacity-0  focus:border-[#1d5051] pl-5 text-[#000]' />
                        </div>
                        <div className="flex gap-1 flex-col max-w-[842px]">
                            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-3">
                                <div className="flex flex-col gap-3">
                                    <label className="text-[#5B5B5B] text-[18px] font-semibold leading-[normal]">Expiration Date ( MM/YY )</label>
                                    <input
                                        placeholder="Enter Expiration Date"
                                        type="text"
                                        className=' block w-full max-w-[403px] rounded-[10px] border-[1px] placeholder:text-[#9D9B9B] text-[18px] font-[400]   leading-[normal] h-[60px] border-[#D9D9D9] bg-[#D9D9D9] bg-opacity-0  focus:border-[#1d5051] pl-5 text-[#000]' />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <label className="text-[#5B5B5B] text-[18px] font-semibold leading-[normal]">CVC</label>
                                    <input
                                        placeholder="Enter CVC"
                                        type="text"
                                        className=' block w-full max-w-[403px] rounded-[10px] border-[1px] placeholder:text-[#9D9B9B] text-[18px] font-[400]   leading-[normal] h-[60px] border-[#D9D9D9] bg-[#D9D9D9] bg-opacity-0  focus:border-[#1d5051] pl-5 text-[#000]' />
                                </div>
                            </div>
                            <div className='flex gap-[2px] items-center'>
                                <input type="checkbox" placeholder='n' className="mr-2 h-[12px] w-[12px] text-[#000] border-[#D9D9D9] border-[1px] rounded-[4px] focus:ring-gray-300" />
                                <p className=" text-[18px] font-[400] text-[#9D9B9B] leading-[normal]">Save my information for faster checkout</p>
                            </div>
                        </div>
                        <button className="rounded-[12px] bg-[#49BBBD] text-[#fff] text-[26px] font-[400] leading-[normal] max-w-[842px] w-full h-[63px] flex justify-center items-center text-center my-5">Confirm Payment</button>
                    </form>
                </div>
                <div className="lg:w-[40%] px-[2.15rem] max-w-[662px] rounded-[20px] bg-opacity-[0.2] bg-[#9DCCFF] md:w-full sm:w-full xs:w-full 2xl:h-[630px] sm:h-auto p-4 mx-auto">
                    <h3 className="text-[#252641] text-[24px] font-[400] leading-[normal]">Summary</h3>

                    <div className="flex flex-col gap-2">
                        <div className="flex gap-8  mt-10 xl:flex-row sm:flex-col xs:flex-col items-center">
                            <Image
                                src="/Checkout/card.svg"
                                alt=""
                                height={200}
                                width={200} 
                                className=" w-auto max-w-[160px] !h-[107px]" />
                            <div className="flex flex-col gap-2 justify-center py-2">
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-[#000] text-[18px] font-[400] leading-[180%] tracking-[0.36px]">adipising elit, sed do eiusmod tempor</h3>
                                    <p className="text-[#5B5B5B] text-[18px] font-[400] leading-[180%]  tracking-[0.36px]">Lorem ipsum dollar...</p>
                                </div>
                                <p className="text-[#000] text-[24px] font-[400] leading-[180%] tracking-[0.48px]">$24.69</p>
                            </div>

                        </div>
                        <hr className=" h-[0.5px] bg-[#5B5B5B]" />
                    </div>

                    <div className="flex flex-col gap-2 my-2">
                        <div className="flex xl:flex-row sm:flex-col xs:flex-col  gap-8  items-center">
                            <Image
                                src="/Checkout/card.svg"
                                alt=""
                                height={200}
                                width={200}
                                className=" w-auto max-w-[160px] !h-[107px]" />
                            <div className="flex flex-col gap-2 justify-center ">
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-[#000] text-[18px] font-[400] leading-[180%] tracking-[0.36px]">adipising elit, sed do eiusmod tempor</h3>
                                    <p className="text-[#5B5B5B] text-[18px] font-[400] leading-[180%]  tracking-[0.36px]">Lorem ipsum dollar...</p>
                                </div>
                                <p className="text-[#000] text-[24px] font-[400] leading-[180%] tracking-[0.48px]">$24.69</p>
                            </div>

                        </div>
                        <hr className=" h-[0.5px] bg-[#5B5B5B]" />
                    </div>

                    <div className="flex flex-col gap-4 ">
                        <div className="flex justify-between">
                            <p className="text-[#5B5B5B] text-[20px] font-[600] leading-[180%] tracking-[0.4px]">Subtotal</p>
                            <p className="text-[#5B5B5B] text-[20px] font-[600] leading-[180%] tracking-[0.4px]">$51.38</p>
                        </div>
                        <hr className=" h-[0.5px] bg-[#5B5B5B]" />
                    </div>

                    <div className="flex flex-col gap-4 ">
                        <div className="flex justify-between">
                            <p className="text-[#5B5B5B] text-[20px] font-[600] leading-[180%] tracking-[0.4px]">Coupon Discount</p>
                            <p className="text-[#5B5B5B] text-[20px] font-[600] leading-[180%] tracking-[0.4px]">0 %</p>
                        </div>
                        <hr className=" h-[0.5px] bg-[#5B5B5B]" />
                    </div>


                    <div className="flex flex-col gap-4 ">
                        <div className="flex justify-between">
                            <p className="text-[#5B5B5B] text-[20px] font-[600] leading-[180%] tracking-[0.4px]">TAX</p>
                            <p className="text-[#5B5B5B] text-[20px] font-[600] leading-[180%] tracking-[0.4px]">5</p>
                        </div>
                        <hr className=" h-[0.5px] bg-[#5B5B5B]" />
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between">
                            <p className="text-[#000] text-[20px] font-[600] leading-[180%] tracking-[0.4px]">Total</p>
                            <p className="text-[#000] text-[20px] font-[600] leading-[180%] tracking-[0.4px]">$56.38</p>
                        </div>
                      
                    </div>

                </div>
            </div>
        </div>

    )
}
export default Dashboard