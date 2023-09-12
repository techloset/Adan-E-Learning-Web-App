import Image from "next/image";
const Dashboard = () => {
  return (
    <div className="bg-[#49BBBD] 2xl:rounded-b-[70%]  xl:rounded-b-[70%]  lg:rounded-b-[70%]  md:rounded-b-[0%]  xs:rounded-b-[0%]  sm:rounded-b-[0%]   overflow-hidden h-auto  ">

      <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-4 ">

        <div className="2xl:px-[9rem] xl:px-20 lg:px-20 md:px-16 sm:px-14 xs:px-12  2xl:pt-28 xl:pt-28 lg:pt-20 md:pt-16 sm:pt-14 xs:pt-12 2xl:pb-[20rem] xl:pb-[10rem] lg:pb-[7rem] md:pb-[1rem] sm:pb-[1rem] xs:pb-[1rem] w-full flex flex-col justify-center space-y-8 ">
          <p className="max-w-[681px] md:w-auto xl:text-[54px]  2xl:text-[54px] lg:text-[47px] md:text-[40px]  sm:text-[30px] xs:text-[25px] leading-[normal] text-white font-bold "><span className="text-[#F48C06]">Studying</span> Online is now much easier</p>
          <p className="2xl:text-[24px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] xs:text-[14px]  leading-[160%] font-[Nunito-Sans] text-white font-[400] 2xl:w-[523px] md:w-auto">TOTC is an interesting platform that will teach you in more an interactive way</p>
          <div className="flex gap-2 2xl:pt-10 xl:pt-10 lg:pt-4 md:pt-4 sm:pt-3 xs:pt-2 justify-between  max-w-[604px]  items-center text-center">
            <button className="text-white   2xl:text-[24px] xl:text-[22px] lg:text-[10px] md:text-[18px] sm:text-[16px] xs:text-[12px]  leading-[normal]   2xl:w-[220px] 2xl:h-[80px] xl:w-[200px]  xl:h-[75px] lg:w-[100px] lg:h-[50px]  md:w-[160px] md:h-[60px]  sm:w-[140px] sm:h-[60px]   xs:w-[120px] xs:h-[50px] rounded-[80px]  flex justify-center items-center text-center TransparentBg font-semibold">Join for free</button>
            <div className="flex items-center justify-center text-center 2xl:w-[80px] 2xl:h-[80px]  xl:w-[80px] xl:h-[80px]  lg:w-[40px] lg:h-[40px]  md:w-[80px] md:h-[80px] sm:w-[60px] sm:h-[60px] xs:w-[60px] xs:h-[60px]   rounded-full bg-white">
              <Image
                src="/homepage/Dashboard/palybtn.svg"
                alt="play Button"
                height={100}
                width={100}
                className="2xl:h-8 2xl:w-8 xl:h-8 xl:w-8 lg:h-4 lg:w-4 md:h-8 md:w-8  sm:h-6 sm:w-6   xs:h-6 xs:w-6" />
            </div>
            <p className="text-[#252641] 2xl:text-[24px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] xs:text-[12px]  font-[400] leading-[normal]">Watch how it works</p>
          </div>
        </div>

        <div className="w-full bg-cover bg-bottom  ">
          <Image
            src="/homepage/Dashboard/Girl.svg"
            alt="Thinking Girl"
            width={1000}
            height={1500} />
        </div>

      </div>

    </div>
  )
}
export default Dashboard