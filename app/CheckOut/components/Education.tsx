const Education = () => {
  return (
    <div className='   md:grid sm:hidden xs:hidden'>
    <div className='2xl:w-[90%] md:w-[95%] xs:w-[98%] mx-auto mt-[3rem] pb-20'>
      {/* Heading */}
      <div className='flex justify-between  mx-auto pl-5 pr-10' >
        <h3 className='text-[#000] font-[500] leading-[normal] tracking-[0.6px] 2xl:text-[30px] xl:text-[27px] lg:text-[24px] md:text-[21px] sm:text-[18px] xs:text-[15px]'>Top  Education offers and deals are listed here</h3>
        <p className='text-[#49BBBD] 2xl:text-[20px] xl:text-[18px]  lg:text-[16px]  md:text-[14px]  sm:text-[12px] xs:text-[10px] font-[700] leading-[normal]'>See all</p>
      </div>
      {/* Cards */}
      <div className='grid 2xl:grid-cols-3 xl:grid-cols-2 mx-auto lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1  mt-16 gap-4 pl-5 pr-10  '>
        <div className='bg-cover pl-10 py-10  rounded-[20px] mx-auto  bg-center bg-no-repeat w-[509.113px]  h-auto min-h-[500px]' style={{ backgroundImage: "url(/Checkout/E1.svg)" }}>
          <p className='w-[126.26px] flex justify-center items-center leading-[normal] font-bold text-white  h-[124px] rounded-[12px] bg-[#49BBBD]  text-[50px]'>50%</p>
          <h4 className='text-[#fff] text-[28px] font-bold leading-[normal] mt-7'>Lorem ipsum dolor</h4>
          <p className='text-[#fff] mt-7 text-[20px] font-[500] leading-[180%] tracking-[0.4px] max-w-[359.434px] w-auto'>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
        </div>

        <div className='bg-cover pl-10 py-10  rounded-[20px] mx-auto  bg-center bg-no-repeat w-[509.113px]  h-auto min-h-[500px]' style={{ backgroundImage: "url(/Checkout/E2.svg)" }}>
          <p className='w-[126.26px] flex justify-center items-center leading-[normal] font-bold text-white  h-[124px] rounded-[12px] bg-[#49BBBD]  text-[50px]'>10%</p>
          <h4 className='text-[#fff] text-[28px] font-bold leading-[normal] mt-7'>Lorem ipsum dolor</h4>
          <p className='text-[#fff] mt-7 text-[20px] font-[500] leading-[180%] tracking-[0.4px] max-w-[359.434px] w-auto'>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
        </div>

        <div className='bg-cover pl-10 py-10  rounded-[20px] mx-auto  bg-center bg-no-repeat w-[509.113px]  h-auto min-h-[500px]' style={{ backgroundImage: "url(/Checkout/E3.svg)" }}>
          <p className='w-[126.26px] flex justify-center items-center leading-[normal] font-bold text-white  h-[124px] rounded-[12px] bg-[#49BBBD]  text-[50px]'>50%</p>
          <h4 className='text-[#fff] text-[28px] font-bold leading-[normal] mt-7'>Lorem ipsum dolor</h4>
          <p className='text-[#fff] mt-7 text-[20px] font-[500] leading-[180%] tracking-[0.4px] max-w-[359.434px] w-auto'>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Education