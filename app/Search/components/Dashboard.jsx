const Dashboard = () => {
    return (
        <div className="bgimageed h-[500px] lg:h-[326px] relative bg-center py-24 bg-cover bg-no-repeat " style={{ backgroundImage: "url(/Search/search.svg)" }}>
            <div className=" absolute inset-0 bg-[#49BBBD] bg-opacity-40 flex  py-28 flex-col items-center">
                <div className="w-3/4 max-w-[1324px]  relative">
                    <div className=" flex flex-col space-y-4 md:space-y-0 md:flex-row ">
                        <div className="relative flex-grow">
                            <input
                                type="text"

                                placeholder="Search your favourite course"
                                className="w-full h-[73px]  pl-6 md:pl-16 pr-16 py-2 border   text-base md:text-xl border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            />
                            <button className="absolute lg:text-2xl font-bold right-1 h-[63px] top-1 px-4 lg:px-10 bg-[#49BBBD] text-white rounded-md">
                                Search
                            </button>
                        </div>


                    </div>
                    <br />
                </div>




                <div className="2xl:flex xl:flex sm:hidden xs:flex w-3/4 max-w-[1324px] flex-col 2xl:text-2xl lg:flex-row justify-between mt-4 md:mt-0 ">

                    <div className="relative">
                        <div className="relative">
                            <select
                                className="block text-center font-semibold h-[73px] 2xl:w-[170px] 2xl:h-[73px] xl:w-full xl:h-full xs:w-full xs:h-full  py-2 pl-4 pr-12 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 appearance-none"
                            >
                                <option value="" className="">
                                    Subject
                                </option>

                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <svg
                                    className="h-5 w-5 "
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="5"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                        </div>
                    </div>





                    <div className="relative ">
                        <select
                            className="block h-[73px] text-center font-semibold 2xl:w-[170px] 2xl:h-[73px] xl:w-full xl:h-full xs:w-full xs:h-full   py-2 pl-4 pr-12 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 appearance-none"
                        >
                            <option value="" className="">
                                Partner
                            </option>

                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg
                                className="h-5 w-5 "
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="5"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>



                    <div className="relative">
                        <select

                            className="block h-[73px] text-center font-semibold 2xl:w-[192px] 2xl:h-[73px] xl:w-full xl:h-full xs:w-full xs:h-full  py-2 pl-4 pr-12 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 appearance-none"
                        >
                            <option value="" className="">
                                Program
                            </option>

                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg
                                className="h-5 w-5 "
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="5"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>


                    <div className="relative">
                        <select
                            className="block h-[73px] text-center font-semibold  2xl:w-[209px] 2xl:h-[73px] xl:w-full xl:h-full xs:w-full xs:h-full py-2 pl-4 pr-12 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 appearance-none"
                        >
                            <option value="" className="">
                                Language
                            </option>

                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg
                                className="h-5 w-5 "
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="5"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>



                    <div className="relative">
                        <select

                            className="block h-[73px] text-center font-semibold   2xl:w-[216px] 2xl:h-[73px] xl:w-full xl:h-full xs:w-full xs:h-full py-2 pl-4 pr-12 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 appearance-none"
                        >
                            <option value="" className="">
                                Availability
                            </option>

                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg
                                className="h-5 w-5 "
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="5"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>




                    <div className="relative">
                        <select
                            className="block h-[73px] text-center font-semibold 2xl:w-[267px] 2xl:h-[73px] xl:w-full xl:h-full xs:w-full xs:h-full py-2 pl-4 pr-12 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 appearance-none"
                        >
                            <option value="" className="">
                                Learning Type
                            </option>

                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg
                                className="h-5 w-5 "
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="5"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    )
}
export default Dashboard