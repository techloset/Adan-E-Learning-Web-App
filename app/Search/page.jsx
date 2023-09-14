"use client"
import Card from './components/Card'
import Education from '../CheckOut/components/Education';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cards from './components/Cards';
import Cardss from './components/Cardss';



const Searchpage = () => {



    const creators = [
        {
            img: "/Search/Creator/1.png",
            name: "Jane Cooper",
            profession: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
        },
        {
            img: "/Search/Creator/2.png",
            name: "Adam",
            profession: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
        }, {
            img: "/Search/Creator/3.png",
            name: "Tomara",
            profession: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
        }, {
            img: "/Search/Creator/1.png",
            name: "Jane Cooper",
            profession: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
        }, {
            img: "/Search/Creator/1.png",
            name: "Jane Cooper",
            profession: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
        }, {
            img: "/Search/Creator/1.png",
            name: "Jane Cooper",
            profession: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
        },
    ]

    const learningOptions = ['option1', 'option2', 'option3'];
    const languageOptions = ['option1', 'option2', 'option3'];
    const programOptions = ['option1', 'option2', 'option3'];
    const subjectOptions = ['option1', 'option2', 'option3'];
    const partnerOptions = ['option1', 'option2', 'option3']
    const availabilityOptions = ['option1', 'option2', 'option3']






    return (
        <div>
            <Header />
            <div className="bgimageed h-[500px] lg:h-[326px] relative bg-center py-24 bg-cover bg-no-repeat " style={{ backgroundImage: "url(/Search/search.svg)" }}>
                <div className=" absolute inset-0 bg-[#49BBBD] bg-opacity-40 flex  py-28 flex-col items-center">


                    <div className="w-3/4  relative">
                        <div className=" flex flex-col space-y-4 md:space-y-0 md:flex-row ">
                            <div className="relative flex-grow">
                                <input
                                    type="text"

                                    placeholder="Search your favourite course"
                                    className="w-full h-14  pl-6 md:pl-16 pr-16 py-2 border text-base md:text-xl border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                />
                                <button className="absolute lg:text-2xl font-bold right-1 h-12 top-1 px-4 lg:px-10 bg-[#49BBBD] text-white rounded-md">
                                    Search
                                </button>
                            </div>


                        </div>
                        <br />
                    </div>




                    <div className="flex w-3/4 flex-col 2xl:text-2xl lg:flex-row justify-between mt-4 md:mt-0 ">

                        <div className="relative">



                            <div className="relative">
                                <select
                                    className="block text-center font-semibold w-full py-2 pl-4 pr-12 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 appearance-none"
                                >
                                    <option value="" className="">
                                        Subject
                                    </option>
                                    {subjectOptions.map((subject, index) => (
                                        <option key={index} value={subject}>
                                            {subject}
                                        </option>
                                    ))}
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





                        <div className="relative">
                            <select
                                className="block text-center font-semibold w-full py-2 pl-4 pr-12 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 appearance-none"
                            >
                                <option value="" className="">
                                    Partner
                                </option>
                                {partnerOptions.map((partner, index) => (
                                    <option key={index} value={partner}>
                                        {partner}
                                    </option>
                                ))}
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

                                className="block text-center font-semibold w-full py-2 pl-4 pr-12 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 appearance-none"
                            >
                                <option value="" className="">
                                    Program
                                </option>
                                {programOptions.map((program, index) => (
                                    <option key={index} value={program}>
                                        {program}
                                    </option>
                                ))}
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
                                className="block text-center font-semibold w-full py-2 pl-4 pr-12 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 appearance-none"
                            >
                                <option value="" className="">
                                    Language
                                </option>
                                {languageOptions.map((language, index) => (
                                    <option key={index} value={language}>
                                        {language}
                                    </option>
                                ))}
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

                                className="block text-center font-semibold w-full py-2 pl-4 pr-12 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 appearance-none"
                            >
                                <option value="" className="">
                                    Availability
                                </option>
                                {availabilityOptions.map((availability, index) => (
                                    <option key={index} value={availability}>
                                        {availability}
                                    </option>
                                ))}
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
                                className="block text-center font-semibold w-full py-2 pl-4 pr-12 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 appearance-none"
                            >
                                <option value="" className="">
                                    Learning Type
                                </option>
                                {learningOptions.map((learning, index) => (
                                    <option key={index} value={learning}>
                                        {learning}
                                    </option>
                                ))}
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




            <Cards />
            <Cardss />



            <div className='bg-[#9DCCFF] bg-opacity-20 mx-12 lg:mx-28 lg:p-14  p-6 rounded-2xl flex-col xl:flex-row justify-between flex'>

                <div >

                    <p className='font-semibold lg:text-3x text-2xl '>Know about learning<br /> learning platform</p>
                    <br />
                    <div className='flex'>
                        <div className='bg-[#55EFC4] mt-2 mx-2 rounded-full w-5 h-3 lg:w-4 lg:h-4  md:w-4 md:h-4'></div>
                        <p className='lg:text-2xl text-xl '>Free E-book, video & consolation</p>

                    </div>
                    <br />
                    <div className='flex'>
                        <div className='bg-[#55EFC4] mt-2 mx-2 rounded-full w-5 h-3  md:w-4 md:h-4 lg:w-4 lg:h-4'></div>
                        <p className='lg:text-2xl text-xl '>Top instructors from around world</p>

                    </div>
                    <br />
                    <div className='flex'>
                        <div className='bg-[#55EFC4] mt-2 mx-2 rounded-full w-4 h-3  md:w-4 md:h-4 lg:w-4 lg:h-4'></div>
                        <p className='lg:text-2xl text-xl '>Top courses from your team</p> <br />

                    </div>
                    <br />
                    <button className='lg:text-2xl text-xl font-extrabold text-white px-6 rounded-xl py-3 bg-[#49BBBD] '>Start learning now</button>
                </div>
                <br />

                <div className='xl:w-1/2'>
                    <img src="Search/office.png" alt="" />
                </div>
            </div>
            <br /><br />


            <Card />

            <br /><br /><br />

            <div className='lg:mx-28  mx-12'>
                <div className=' flex justify-between '>
                    <p className='lg:text-3xl font-semibold'>Classes taught by real creators</p>
                    <p className='text-[#49BBBD] font-semibold '>See all</p>
                </div>
            </div>
            <div>
                <br /><br /><br /><br /><br /><br />


                <div className='grid 2xl:grid-cols-3 md:grid-cols-2  gap-y-36  gap-x-6  mx-8 lg:mx-20'>
                    {creators.map((card,index) => {
                        return (
                            <div className="shadow-2xl relative max-w-md mx-auto h-[300px] lg:w-[400px] xl:w-[430px] sm:w-[450px] w-[300px] " key={index}>

                                <div className="bg-white shadow-inner py-5 px-6">
                                    <br /><br /><br /><br /><br />
                                    <h2 className="text-xl text-center font-semibold mb-4">{card.name}</h2>
                                    <p className='text-center text-[#696984] '>{card.profession}</p>
                                </div>
                                <div className="absolute inset-x-0 -top-1/3 flex justify-center">
                                    <img src={card.img} alt="" className="w-[258px] h-[230px] border-white" />
                                </div>
                            </div>
                        );
                    })}</div>

                <br /><br />

            </div>
            <br /><br />

            <div className='bg-[#9DCCFF] bg-opacity-20 '>
                <br /><br />
                <div className='xl:mx-28 lg:mx-16  mx-10'>
                    <p className='lg:text-3xl font-semibold '>What our students have to say</p>
                    <br /><br />
                    <div className='flex flex-col  lg:flex-row justify-between bg-white  rounded-2xl p-12'>
                        <img src="/Search/girl.png" alt="" className='lg:w-1/3' />
                        <div className='lg:w-1/2'>
                            <p className='lg:text-3xl font-bold'>Savannah Nguyen</p><br />
                            <p className='lg:text-2xl '>tanya.hill@example.com</p><br />
                            <p className='text-[#696984] text-[18px] '>Lorem ipsum dolor sit amet, consectetur adipising elit, <br /> sed do eiusmod tempor <br />
                                Lorem ipsum dolor sit amet, consectetur adipising elit, <br />  sed do eiusmod tempor <br />
                                Lorem ipsum dolor sit amet, consectetur adipising elit, <br /> sed do eiusmod tempor</p>
                            <br />
                            <div className='flex'>
                                <button  className="mb-2 inline-block bg-[#49BBBD] rounded-full p-3 mx-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"  >
                                    <span className='hidden'>a</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </button>

                                <button     className="mb-2 inline-block bg-[#49BBBD] rounded-full p-3 mx-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg" >
                                    <span className='hidden'>a</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                    </svg>
                                </button>

                                <button  className="mb-2 inline-block bg-[#49BBBD] rounded-full p-3 mx-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg" >
                                    <span className='hidden'>a</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </button>
                            </div>
                        </div>





                        <div className='lg:flex lg:flex-col'>
                            <img alt="images" src="/Search/Creator/1.png"
                                className="mb-2 w-20 h-20 inline-block rounded-full p-3 lg:mx-3 "
                            />
                            <img alt="images" src="/Search/Creator/2.png"
                                className="mb-2 w-20 h-20 inline-block rounded-full p-3 lg:mx-3 "
                            />

                            <img alt="images" src="/Search/Creator/3.png"
                                className="mb-2 w-20 h-20 inline-block rounded-full p-3 lg:mx-3 "
                            />

                            <img alt="images" src="/Search/Creator/4.png"
                                className="mb-2 w-20 h-20 inline-block rounded-full p-3 lg:mx-3 "
                            />
                        </div>



                    </div>
                </div>
                <br /><br /><br />


            </div>


            <br /> <br />
            <Education />
            <br /><br /><br />
            <Footer />
        </div>
    )
}

export default Searchpage