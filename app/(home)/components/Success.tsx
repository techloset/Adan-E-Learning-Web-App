import Image from "next/image"
const Success = () => {
    return (
        <div className='w-[86%] mx-auto mt-20  mb-10  font-buenos-aires'>
            {/* Heading */}
            <div className='text-center  space-y-3 '>
                <h2 className='text-[49px] font-bold leading-[160%] Blacktext '> Our Success</h2>
                <div className='flex items-center justify-center text-center'>
                    <p className='max-w-[750px] flex  text-[18px] font-[400] leading-[160%] Blacktext '>Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin
                        at nec <br/>nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel
                        nisl orci. </p>
                </div>
            </div>
            {/* Instrctions */}
            <div className='mt-20 grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-2 '>

                <div className='text-center flex flex-col justify-center items-center space-y-2'>
                    <Image 
                    src="homepage/Success/15K+.svg" 
                    alt="" 
                    height={200} 
                    width={200}
                    className="w-[156px] h-[96px]"/>
                    <p className='text-[32px] font-[400] leading-[130%] Blacktext'>Students</p>
                </div>
                <div className='text-center flex flex-col justify-center items-center'>
                    <Image 
                    src="homepage/Success/75.svg" 
                    alt="" 
                    height={200} 
                    width={200}
                    className="w-[156px] h-[96px]"/>
                    <p className='text-[32px] font-[400] leading-[130%] Blacktext'>Total success</p>
                </div>
                <div className='text-center flex flex-col justify-center items-center'>
                    <Image 
                    src="homepage/Success/35.svg" 
                    alt="" 
                    height={120} 
                    width={120}
                    className="w-[90px] h-[96px]"/>
                    <p className='text-[32px] font-[400] leading-[130%] Blacktext'>Main questions</p>
                </div>
                <div className='text-center flex flex-col justify-center items-center'>
                    <Image 
                    src="homepage/Success/26.svg" 
                    alt="" 
                    height={120} 
                    width={120}
                    className="w-[90px] h-[96px]"/>
                    <p className='text-[32px] font-[400] leading-[130%] Blacktext'>Chief experts</p>
                </div>
                <div className='text-center flex flex-col justify-center items-center'>
                    <Image 
                    src="homepage/Success/16.svg" 
                    alt="" 
                    height={100} 
                    width={100}
                    className="w-[80px] h-[90px]"/>
                    <p className='text-[32px] font-[400] leading-[130%] Blacktext'>Years of experience</p>
                </div>
            </div>
        </div>
    )
}
export default Success