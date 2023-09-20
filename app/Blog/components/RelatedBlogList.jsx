"use client"


import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';


const cardData = [
    {
        title: 'UX/UI',
        image: '/Blog/RelatedBlogs/1.svg',
    },
    {
        title: 'React',
        image: '/Blog/RelatedBlogs/2.svg',
    },
    {
        title: 'PHP',
        image: `/Blog/RelatedBlogs/3.svg`,
    },
    {
        title: 'JavaScript',
        image: `/Blog/RelatedBlogs/5.svg`,
    },
];

const RelatedBlogList = () => {
    return (
        <>
            <div>
                <div className='flex mx-auto 2xl:w-[90%]  xl:w-[85%]  lg:w-[85%]  md:w-[90%]  sm:w-[98%]  xs:w-[98%%] '>
                </div>
                <h1 className='ml-[5%]  mt-20 text-[#000] text-[30px] font-[700] leading-[normal] ' >Reading blog list</h1>
                {/* Destop View */}
                <div className='py-5 2xl:grid xl:grid lg:grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-2 md:hidden   sm:hidden xs:hidden gap-10    mx-auto 2xl:w-[90%]  xl:w-[85%]  lg:w-[85%]  md:w-[90%]  sm:w-[98%]  xs:w-[98%%]  '>
                    {cardData.map((card, index) => (
                        <div className='rounded-[20px] p-2 bg-cover bg-center bg-no-repeat 2xl:w-[356px] h-[327px] flex justify-center items-end pb-[1.75rem]' style={{ backgroundImage: `url(${card.image})` }} key={index}>
                            <button className='flex justify-center items-center  rounded-[12px] h-[63px] BlogRelatedBolgsBg BlogRelatedBolgstext text-[24px] font-[700] w-[236px] leading-[normal]'> {card.title}</button>
                        </div>
                    ))}
                </div>
                {/* Mobile View */}
                <div className='md:flex sm:flex xs:flex 2xl:hidden xl:hidden lg:hidden items-center justify-center mt-10 '>
                    <Slider
                        className='w-[80%] h-[auto] mx-auto'
                        dots={true}
                        infinite={true}
                        arrows={false}
                        speed={500}
                        slidesToShow={1}
                        slidesToScroll={1}  >
                        {cardData.map((card, index) => (
                            <div key={index} >
                                <div
                                    className='mx-auto bg-cover bg-center bg-no-repeat flex items-end justify-center w-[356px] h-[327px] px-10' style={{ backgroundImage: `url(${card.image})` }}>

                                    <button className=' flex justify-center items-center  
                                    rounded-[12px] h-[63px] BlogRelatedBolgsBg BlogRelatedBolgstext 
                                    text-[24px] font-[700] w-[236px] leading-[normal] '>
                                        {card.title}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>

    )
}

export default RelatedBlogList