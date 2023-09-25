import React from 'react'

const Creators = () => {
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

  return (
    <div>
       <div className='lg:mx-28  mx-12 mt-20'>
                <div className=' flex justify-between '>
                    <p className='lg:text-3xl text-[#000] leading-[normal] tracking-[0.6px] font-medium'>Classes taught by real creators</p>
                    <p className='text-[#49BBBD] font-bold  text-[20px] leading-[normal] '>See all</p>
                </div>
            </div>
            <div>
                <br /><br /><br /><br /><br /><br /><br/>


                <div className='grid 2xl:grid-cols-3 md:grid-cols-2  gap-y-36  gap-x-6  mx-8 lg:mx-20'>
                    {creators.map((card, index) => {
                        return (
                            <div className="my-[2rem] bg-white  shadow-gray-200 shadow-[2px_2px_10px_2px] relative 2xl:max-w-[530px] xl:max-w-md xs:max-w-md mx-auto 2xl:w-[516px] 2xl:h-[303px] h-[300px] lg:w-[400px] xl:w-[430px] sm:w-[450px] w-[300px] " key={index}>

                                <div className="bg-white  py-5 ">
                                    <br /><br /><br /><br /><br />
                                    <h2 className="text-[#252641] text-[24px] font-medium leading-[normal] text-center  mb-4">{card.name}</h2>
                                    <div className='flex justify-center items-center max-w-[379px] w-auto mx-auto'>
                                        <p className='text-center  text-[#696984] font-normal leading-[180%] tracking-[0.36px] text-[18px]'>{card.profession}</p>
                                    </div>
                                </div>
                                <div className="absolute inset-x-0 -top-1/2 flex justify-center">
                                    <img src={card.img} alt="" className="  2xl:w-[278px] 2xl:h-[277px]   w-[258px] h-[230px] border-white" />
                                </div>
                            </div>
                        );
                    })}</div>

                <br /><br />

            </div>
            <br /><br />
    </div>
  )
}

export default Creators