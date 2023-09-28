import Image from 'next/image'
import React from 'react'
import Choices from '../components/Choices'

const Detailspage = () => {
  return (
    <div className='bg-[#fff]'>
      <Image
        src="/Blog/Details/Bg.svg"
        alt=''
        height={10000}
        width={10000}
        className='2xl:flex xl:flex lg:flex md:hidden sm:hidden xs:hidden' />

      <div className='2xl:w-[90%] md:w-[95%] xs:w-[98%] mx-auto mt-[3rem] '>
        <div className='flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col-reverse sm:flex-col-reverse xs:flex-col-reverse  justify-center  mx-auto'>


          {/* GRID One */}
          <div className='2xl:w-[60%] max-w-[950px] xl:w-[60%] lg:w-[50%] md:w-[90%] sm:w-[100%] xs:w-[100%] mx-auto relative'>
            {/* Button */}
            <div className='flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col 2xl:justify-between xl:justify-between lg:justify-between md:justify-between sm:justify-center xs:justify-center   items-center gap-5 mx-auto'>
              <button className='text-[#000] text-opacity-[0.40] hover:bg-[#49BBBD] hover:text-opacity-100 hover:text-[#fff] hover:bg-opacity-100 text-[20px] font-bold leading-[normal] w-[200px] h-[63px] rounded-[12px] bg-[#000] bg-opacity-[0.10] flex justify-center items-center '>Overview</button>
              <button className='text-[#000] text-opacity-[0.40] hover:bg-[#49BBBD] hover:text-opacity-100 hover:text-[#fff] hover:bg-opacity-100 text-[20px] font-bold leading-[normal] w-[200px] h-[63px] rounded-[12px] bg-[#000] bg-opacity-[0.10] flex justify-center items-center '>Overview</button>
              <button className='text-[#000] text-opacity-[0.40] hover:bg-[#49BBBD] hover:text-opacity-100 hover:text-[#fff] hover:bg-opacity-100 text-[20px] font-bold leading-[normal] w-[200px] h-[63px] rounded-[12px] bg-[#000] bg-opacity-[0.10] flex justify-center items-center '>Overview</button>
              <button className='bg-[#49BBBD] text-white text-[20px] font-bold leading-[normal] w-[200px] h-[63px] rounded-[12px]  flex justify-center items-center '>Overview</button>
            </div>
            {/* Card */}
            <div className='bg-[#9dccff] max-w-[950px]  w-auto h-auto rounded-[20px] bg-opacity-[0.30] p-3 mt-10 flex flex-col justify-between '>
              {/* Rating */}
              <div className='flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col 2xl:justify-between xl:justify-between lg:justify-between md:justify-between sm:justify-center  xs:justify-center  items-center gap-4 pt-8 2xl:px-20 px-2 '>
                {/* White Box */}
                <div className='max-w-[257px] sm:w-auto xs:w-auto md:w-[40%] 2xl:w-[40%] lg:w-[40%] xl:w-[40%] max-h-[199px] h-auto bg-[white] p-4 rounded-[16px] flex flex-col justify-center items-center text-center space-y-3'>
                  <h1 className='text-[#000] pt-4 opacity-50 text-[30px] font-semibold leading-[normal] tracking-[0.6px]'>4 out of 5</h1>
                  <Image
                    src="/Course/Detail/Stars.svg"
                    alt=''
                    height={200}
                    width={200}
                    className='w-[130px] h-[22px] mt-4' />
                  <p className='text-[#000] pt-4 opacity-[0.50] text-[20px] font-[400] leading-[normal] tracking-[0.4px] text-center'>Top Rating</p>
                </div>

                <div className=' flex flex-col 2xl:w-[60%] xl:w-[60%] md:w-[60%] lg:w-[60%]  sm:w-[90%] xs:w-[90%] gap-3'>


                  <div className=' flex  items-center  w-auto gap-4'>
                    <p className='text-[#000] text-[20px] font-[400] leading-[normal] tracking-[0.4px] opacity-[0.5] w-[20%]'>5 Stars</p>
                    <div className='w-[80%] flex '>
                      <hr className='bg-[#49BBBD] max-w-[372px] w-[60%] h-[8px] rounded-[2px]' />
                      <hr className='bg-[#D9D9D9] w-[25%] max-w-[111px] h-[8px] rounded-[2px]' />
                    </div>
                  </div>

               <div className=' flex  items-center  w-auto gap-4'>
                    <p className='text-[#000] text-[20px] font-[400] leading-[normal] tracking-[0.4px] opacity-[0.5] w-[20%]'>4 Stars</p>
                    <div className='w-[80%] flex '>
                      <hr className='bg-[#49BBBD] max-w-[372px] w-[60%] h-[8px] rounded-[2px]' />
                      <hr className='bg-[#D9D9D9] w-[25%] max-w-[111px] h-[8px] rounded-[2px]' />
                    </div>

                  </div>


                  <div className=' flex  items-center  w-auto gap-4'>
                    <p className='text-[#000] text-[20px] font-[400] leading-[normal] tracking-[0.4px] opacity-[0.5] w-[20%]'>3 Stars</p>
                    <div className='w-[80%] flex '>
                      <hr className='bg-[#49BBBD] max-w-[372px] w-[60%] h-[8px] rounded-[2px]' />
                      <hr className='bg-[#D9D9D9] w-[25%] max-w-[111px] h-[8px] rounded-[2px]' />
                    </div>
                  </div>

                  <div className=' flex  items-center  w-auto gap-4'>
                    <p className='text-[#000] text-[20px] font-[400] leading-[normal] tracking-[0.4px] opacity-[0.5] w-[20%]'>2 Stars</p>
                    <div className='w-[80%] flex '>
                      <hr className='bg-[#49BBBD] max-w-[372px] w-[60%] h-[8px] rounded-[2px]' />
                      <hr className='bg-[#D9D9D9] w-[25%] max-w-[111px] h-[8px] rounded-[2px]' />
                    </div>
                  </div>

                  <div className=' flex  items-center  w-auto gap-4'>
                    <p className='text-[#000] text-[20px] font-[400] leading-[normal] tracking-[0.4px] opacity-[0.5] w-[20%]'>1 Stars</p>
                    <div className='w-[80%] flex '>
                      <hr className='bg-[#49BBBD] max-w-[372px] w-[60%] h-[8px] rounded-[2px]' />
                      <hr className='bg-[#D9D9D9] w-[25%] max-w-[111px] h-[8px] rounded-[2px]' />
                    </div>
                  </div>
                </div>

              </div>

              <div className='flex flex-col space-y-10 mx-5 mt-8 px-10'>
                <div>
                  <div className='flex justify-between'>
                    <div className='flex  justify-center items-center  gap-3'>
                      <div className='flex justify-center w-[70.81px] h-[70.81px]  items-center rounded-[60px]  bg-[#D9D9D9]'>
                        <Image
                          src="/Profile/Profile.svg"
                          alt=""
                          height={300}
                          width={300}
                          className=' w-[70.81px] h-[70.81px]' />
                      </div>
                      <div className='flex flex-col justify-between'>
                        <p className='text-[#000]text-[18px] font-[500] leading-[normal] tracking-[0.36px]'>Lina</p>
                        <Image src="/Course/Detail/Stars.svg" alt=''
                          height={200}
                          width={200}
                          className='w-[130px] h-[22px]' />
                      </div>
                    </div>
                    <div className='flex justify-end gap-3 items-end'>
                      <Image
                        src="/Blog/Marketing/Time.svg"
                        alt=""
                        height={300}
                        width={300}
                        className='w-[24px] h-[24px]' />
                      <p className='text-[#696984] text-[14px] font-medium leading-[normal] tracking-[0.28px]'>3 Month</p>
                    </div>
                  </div>
                  <p className='text-[#696984] mt-6 max-w-[847] w-auto text-[20px] font-[400]  leading-[normal] tracking-[0.4px] '>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                </div>
                <hr className='bg-[#696984] h-[0.5px]' />
                <div className='pb-10'>
                  <div className='flex justify-between'>
                    <div className='flex  justify-center items-center  gap-3'>
                      <div className='flex justify-center w-[70.81px] h-[70.81px]  items-center rounded-[60px]  bg-[#D9D9D9]'>
                        <Image
                          src="/Profile/Profile.svg"
                          alt=""
                          height={300}
                          width={300}
                          className=' w-[70.81px] h-[70.81px]' />
                      </div>
                      <div className='flex flex-col justify-between'>
                        <p className='text-[#000]text-[18px] font-[500] leading-[normal] tracking-[0.36px]'>Lina</p>
                      </div>
                    </div>
                    <div className='flex justify-end gap-3 items-end'>
                      <Image
                        src="/Blog/Marketing/Time.svg"
                        alt=""
                        height={300}
                        width={300}
                        className='w-[24px] h-[24px]' />
                      <p className='text-[#696984] text-[14px] font-medium leading-[normal] tracking-[0.28px]'>3 Month</p>
                    </div>
                  </div>
                  <p className='text-[#696984] mt-6 max-w-[847] w-auto text-[20px] font-[400]  leading-[normal] tracking-[0.4px] '>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                </div>
              </div>


            </div>
          </div>
          {/* Grid two */}
          <div className=' flex justify-center relative 2xl:w-[40%] xl:w-[40%] lg:w-[50%] md:w-[90%] sm:w-[98%] xs:w-[98%] mx-auto'>
            <div className=' 2xl:w-[501px] xl:w-[501px] lg:w-[501px] md:w-[501px] sm:w-[375px] xs:w-[375px] bg-white rounded-[20px] border-[30px] border-white  flex flex-col 2xl:absolute 2xl:mt-[-40%] xl:absolute xl:mt-[-50%] lg:absolute lg:mt-[-40%]  md:relative md:mt-2 sm:relative sm:mt-2 xs:relative xs:mt-2' >
              <Image src="/Course/Detail/Bg.svg" alt='' height={300} width={300} className='max-w-[443px] w-auto min-h-[268px]' />
              <div className='flex justify-between items-center mt-2'>
                <p className='text-[#000] font-semibold leading-[normal] tracking-[0.9px] text-[45px]'>$49.65</p> 
                <p className='text-[#000] text-[28px] line-through opacity-[0.50] font-semibold tracking-[0.56px] leading-[normal]'>$99.99</p>
                <p className='text-[#000] text-[24px] leading-[normal] tracking-[0.56px] font-semibold text-opacity-[0.50]'>50% Off</p>
              </div>
              <p className='text-[#49BBBD] mt-7 text-center text-[20px] font-semibold leading-[normal] tracking-[0.4px]'>11 hour left at this price</p>
              <button className='flex bg-[#49BBBD] mt-8 text-[20px] leading-[normal] font-bold h-[63px] justify-center items-center w-full text-center rounded-[12px] text-[#fff] '>Buy Now</button>
              <hr className='bg-[#696984] my-5' />
              <h1 className='text-[#000] font-semibold leading-[normal] tracking-[0.6px] text-[30px] text-left'>This Course included</h1>
              <div className='mt-5 space-y-3'>


                <div className='flex gap-2'>
                  <Image
                    src="/Course/Detail/list/1.svg"
                    alt=''
                    height={300}
                    width={300}
                    className='h-[20px] w-[20px]' />
                  <p className='text-[#000] text-opacity-[0.50] font-semibold leading-[normal] tracking-[0.28px] text-[14px]'>Money Back Guarantee</p>
                </div>

                <div className='flex gap-2'>
                  <Image
                    src="/Course/Detail/list/2.svg"
                    alt=''
                    height={300}
                    width={300}
                    className='h-[20px] w-[20px]' />
                  <p className='text-[#000] text-opacity-[0.50] font-semibold leading-[normal] tracking-[0.28px] text-[14px]'>Access on all devices</p>
                </div>

                <div className='flex gap-2'>
                  <Image
                    src="/Course/Detail/list/3.svg"
                    alt=''
                    height={300}
                    width={300}
                    className='h-[20px] w-[20px]' />
                  <p className='text-[#000] text-opacity-[0.50] font-semibold leading-[normal] tracking-[0.28px] text-[14px]'>Certification of completion</p>
                </div>

                <div className='flex gap-2'>
                  <Image
                    src="/Course/Detail/list/4.svg"
                    alt=''
                    height={300}
                    width={300}
                    className='h-[20px] w-[20px]' />
                  <p className='text-[#000] text-opacity-[0.50] font-semibold leading-[normal] tracking-[0.28px] text-[14px]'>32 Moduls</p>
                </div>


              </div>
              <hr className='bg-[#696984] my-7' />
              <h1 className='text-[#000] font-semibold leading-[normal] tracking-[0.6px] text-[30px] text-left'>Training 5 or more people</h1>
              <p className='text-[#696984] text-[14px] leading-[180%] tracking-[0.28px] my-3'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
              <hr className='bg-[#696984] my-5' />
              <h1 className='text-[#000] font-semibold leading-[normal] tracking-[0.6px] text-[30px] text-left'>Share this course</h1>
              <div className='flex gap-5 mt-7'>
                <Image src="/Course/Detail/icons/6.svg" alt='' height={300} width={300} className='h-[32px] w-[32px]' />
                <Image src="/Course/Detail/icons/2.svg" alt='' height={300} width={300} className='h-[32px] w-[32px]' />
                <Image src="/Course/Detail/icons/3.svg" alt='' height={300} width={300} className='h-[32px] w-[32px]' />
                <Image src="/Course/Detail/icons/4.svg" alt='' height={300} width={300} className='h-[32px] w-[32px]' />
                <Image src="/Course/Detail/icons/5.svg" alt='' height={300} width={300} className='h-[32px] w-[32px]' />
                <Image src="/Course/Detail/icons/6.svg" alt='' height={300} width={300} className='h-[32px] w-[32px]' />
              </div>


            </div>
          </div>



        </div>
      </div>

      <div className='mt-[7rem]'>
        <Choices Heading="Marketing Articles" Bg="bg-[#9DCCFF]" />
      </div>
      <div className="mt-40 my-10">
        <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-10 justify-center items-center  mx-auto 2xl:w-[80%]  xl:w-[85%]  lg:w-[85%]  md:w-[90%]  sm:w-[98%]  xs:w-[98%%]  '>

          <div className="relative max-w-[800px] mx-[auto]"  >
            <div className="h-[73px] w-[73px] rounded-full bg-[#33EFA0] absolute top-0 left-0 " />
            <div className="h-[30px] w-[30px] rounded-full bg-[#33EFA0] absolute bottom-[36%] right-0 " />
            <div className="relative m-2">
              <h1 className="max-w-[655px] text-[36px] font-[500] leading-[160%] text-[#2F327D]">Everything you can do in a physical<br /> classroom, <span className="text-[#00CBB8]">you can do with TOTC</span></h1>
              <p className="relative max-w-[730px] text-[#696984] font-[400] text-[24px] leading-[180%] tracking-[0.48px] mt-[2rem]">
                TOTC’s school management software helps traditional
                and online schools manage scheduling, attendance, payments and
                virtual
                classrooms all in one secure cloud-based system.
              </p>
              <button className="text-[#696984] text-[22px] font-[400] underline leading-[180%] mt-[2rem]">Learn More</button>
            </div>
          </div>
          <div>
            <Image
              alt="Office"
              src="/homepage/Tofc/Office.svg"
              height={1000}
              width={1000}
              className="" />
          </div>

        </div>

      </div>



      <div className='   md:grid sm:hidden xs:hidden'>
        <div className='2xl:w-[90%] md:w-[95%] xs:w-[98%] mx-auto mt-[3rem] pb-20'>
          {/* Heading */}
          <div className='flex justify-between  mx-auto pl-8 pr-14' >
            <h3 className='text-[#000] font-[500] leading-[normal] tracking-[0.6px] 2xl:text-[30px] xl:text-[27px] lg:text-[24px] md:text-[21px] sm:text-[18px] xs:text-[15px]'>Top  Education offers and deals are listed here</h3>
            <p className='text-[#49BBBD] 2xl:text-[20px] xl:text-[18px]  lg:text-[16px]  md:text-[14px]  sm:text-[12px] xs:text-[10px] font-[700] leading-[normal]'>See all</p>
          </div>
          {/* Cards */}
          <div className='grid xl:grid-cols-2  2xl:grid-cols-3  mx-auto lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1  mt-8 gap-8 pl-5 pr-10'>
            <div className='bg-cover pl-10 py-10 rounded-[20px] mx-auto  bg-center bg-no-repeat !w-[506px]  h-auto min-h-[477.419px]' style={{ backgroundImage: "url(/Course/Detail/Card.svg)" }}>
              <p className='w-[100px] flex justify-center items-center leading-[normal] font-bold text-white  h-[100px] rounded-[12px] bg-[#FF000099] bg-opacity-[0.60] text-[24px]'>50%</p>
              <h4 className='text-[#fff] text-[32px] font-semibold leading-[normal] mt-7'>FOR INSTRUCTORS</h4>
              <p className='text-[#fff] mt-7 text-[24px] font-[400] leading-[180%] tracking-[0.48px] max-w-[405px] w-auto'>TOTC’s school management software helps traditional and online schools manage scheduling,</p>
            </div>

            <div className='bg-cover pl-10 py-10 rounded-[20px] mx-auto  bg-center bg-no-repeat !w-[506px]  h-auto min-h-[477.419px]' style={{ backgroundImage: "url(/Course/Detail/Card.svg)" }}>
              <p className='w-[100px] flex justify-center items-center leading-[normal] font-bold text-white  h-[100px] rounded-[12px] bg-[#FF000099] bg-opacity-[0.60] text-[24px]'>50%</p>
              <h4 className='text-[#fff] text-[32px] font-semibold leading-[normal] mt-7'>FOR INSTRUCTORS</h4>
              <p className='text-[#fff] mt-7 text-[24px] font-[400] leading-[180%] tracking-[0.48px] max-w-[405px] w-auto'>TOTC’s school management software helps traditional and online schools manage scheduling,</p>
            </div>

            <div className='bg-cover pl-10 py-10 mx-auto rounded-[20px]  bg-center bg-no-repeat !w-[506px]  h-auto min-h-[477.419px]' style={{ backgroundImage: "url(/Course/Detail/Card.svg)" }}>
              <p className='w-[100px] flex justify-center items-center leading-[normal] font-bold text-white  h-[100px] rounded-[12px] bg-[#FF000099] bg-opacity-[0.60] text-[24px]'>50%</p>
              <h4 className='text-[#fff] text-[32px] font-semibold leading-[normal] mt-7'>FOR INSTRUCTORS</h4>
              <p className='text-[#fff] mt-7 text-[24px] font-[400] leading-[180%] tracking-[0.48px] max-w-[405px] w-auto'>TOTC’s school management software helps traditional and online schools manage scheduling,</p>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Detailspage