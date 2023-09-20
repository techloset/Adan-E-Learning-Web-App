import Image from 'next/image'
const Feature = () => {
    return (
        <div className=' mt-20 '>
            {/* Heading */}
            <div className='text-center  space-y-3 '>
                <h2 className='text-[36px] font-bold leading-[180%]  text-[#2F327D]'>Our <span className='text-[#00CBB8]'> Features</span></h2>
                <div className='flex items-center justify-center text-center'>
                    <p className='flex  text-[24px] font-[400] leading-[180%] text-[#696984]'>This very extraordinary feature, can make learning activities more efficient
                    </p>
                </div>
            </div>
            {/* Cards */}
            {/* Card One */}
            <div className=' w-[90%] mx-auto'>
                <div className="flex flex-col lg:flex-row items-center justify-center pt-8 gap-2">
                    <div className="lg:w-1/2 2xl:w-2/3 xl:w-2/3  md:w-full sm:w-full xs:w-full ">
                        <Image
                            src="/homepage/Feature/CardOne/Picture.png"
                            alt='Pic'
                            width={1000}
                            height={1000} />
                    </div>
                    <div className="lg:w-1/2 2xl:w-[auto] xl:w-2/3  md:w-full sm:w-full xs:w-full flex flex-col justify-center items-center ">
                        <h1 className='2xl:text-[40px] xl:text-[40px] text-[30px] font-[600] leading-[160%]  text-[#2F327D]  max-w-[542px]'>A <span className='text-[#00CBB8]'>user interface</span> designed for the classroom</h1>
                        <div className='mt-8 space-y-10'>
                            <div className='flex gap-8 items-center'>
                                <div className='flex justify-center items-center text-center w-[60px] h-[60px] bg-[#fff]  shadow-xl homeFeatureBlackBorder   rounded-full'>
                                    <Image
                                        src="homepage/Feature/CardOne/ListOne.svg"
                                        alt='List Tag'
                                        height={100}
                                        width={100}
                                        className='w-[26.591px] h-[26px]' />
                                </div>
                                <p className='text-[#696984] text-[22px] font-[400] leading-[180%] tracking-[0.44px] max-w-[443px]'>Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
                            </div>
                            <div className='flex gap-8 items-center'>
                                <div className='flex justify-center items-center text-center w-[60px] h-[60px] bg-[#fff]  shadow-xl homeFeatureBlackBorder   rounded-full'>
                                    <Image
                                        src="homepage/Feature/CardOne/ListTwo.svg"
                                        alt='List Tag'
                                        height={100}
                                        width={100}
                                        className='w-[28px] h-[26px]' />
                                </div>
                                <p className='text-[#696984] text-[22px] font-[400] leading-[180%] tracking-[0.44px] max-w-[443px]'>TA’s and presenters can be moved to the front of the class.</p>
                            </div>
                            <div className='flex gap-8 items-center'>
                                <div className='flex justify-center items-center text-center w-[60px] h-[60px] bg-[#fff]  shadow-xl homeFeatureBlackBorder   rounded-full'>
                                    <Image
                                        src="homepage/Feature/CardOne/ListThree.svg"
                                        alt='List Tag'
                                        height={100}
                                        width={100}
                                        className='w-[30px] h-[26px]' />
                                </div>
                                <p className='text-[#696984] text-[22px] font-[400] leading-[180%] tracking-[0.44px] max-w-[459px]'>Teachers can easily see all students and class data at one time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Card Two */}
            <div className='mt-20 grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-10 justify-between items-center  mx-auto 2xl:w-[80%]  xl:w-[85%]  lg:w-[85%]  md:w-[90%]  sm:w-[98%]  xs:w-[98%%]  '>
                <div className='flex flex-col relative md:justify-center '>
                    <Image
                        src="homepage/Feature/CardTwo/Hand.svg"
                        alt="Orange Hand"
                        width={100}
                        height={100}
                        className='w-[37.959px] h-[55.005px] absolute top-[42%] right-[42%]' />
                    <div className='space-y-4 relative'>
                        <h1 className='text-[40px] font-[600] leading-[160%]  text-[#2F327D]  max-w-[393px]'> <span className='text-[#00CBB8]'> Tools</span> For Teachers And Learners</h1>
                        <p className='text-[#696984] text-[22px] font-[400] leading-[180%] tracking-[0.44px] max-w-[568px]'>Class has a dynamic set of teaching tools built to be deployed and used during class.
                            Teachers can handout assignments in real-time for students to complete and submit.</p>
                    </div>
                </div>
                <div>
                    <Image
                        src="homepage/Feature/CardTwo/Girl.svg"
                        alt='Pic'
                        width={1000}
                        height={1000} /></div>
            </div>
            {/* Card Three */}
            <div className='mt-[7rem] grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-10    mx-auto 2xl:w-[80%]  xl:w-[85%]  lg:w-[85%]  md:w-[90%]  sm:w-[98%]  xs:w-[98%%]  '>
                <div>
                    <Image
                        src="homepage/Feature/CardThree/View.svg"
                        alt='Pic'
                        width={1500}
                        height={1500} />
                </div>
                <div className='flex flex-col space-y-4 justify-center 2xl:pb-40 sm:pb-2 xs:pb-2 mx-auto pb-3'>
                    <h1 className='text-[40px] font-[600] leading-[160%]  text-[#2F327D]  max-w-[347px]'> Assessments, <span className='text-[#00CBB8]'> Quizzes</span>, Tests</h1>
                    <p className='text-[#696984] text-[22px] font-[400] leading-[180%] tracking-[0.44px] max-w-[596px]'>Easily launch live assignments, quizzes, and <br/>tests.
                        Student results are automatically entered in the online gradebook.</p>
                </div>

            </div>
            {/* Card Four */}
            <div className='mt-20 grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-10 justify-between items-center  mx-auto 2xl:w-[80%]  xl:w-[85%]  lg:w-[85%]  md:w-[90%]  sm:w-[98%]  xs:w-[98%%]  '>
                <div className='flex flex-col relative md:justify-center space-y-4 '>
                    <h1 className='text-[40px] font-[600] leading-[160%]  text-[#2F327D]  max-w-[420.817px]'> <span className='text-[#00CBB8]'> Class Management</span>  Tools for Educators</h1>
                    <p className='text-[#696984] text-[22px] font-[400] leading-[180%] tracking-[0.44px] max-w-[645.719px]'>Class provides tools to help run and manage the class such as Class Roster,
                        Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time..</p>
                </div>
                <div>
                    <Image
                        src="homepage/Feature/CardFour/Profile.svg"
                        alt='Pic'
                        width={1000}
                        height={1000} /></div>
            </div>
            {/* Card Five */}
            <div className='mt-20 grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-10    mx-auto 2xl:w-[80%]  xl:w-[85%]  lg:w-[85%]  md:w-[90%]  sm:w-[98%]  xs:w-[98%%]  '>
                <div>
                    <Image
                        src="homepage/Feature/CardFive/Profile.svg"
                        alt='Pic'
                        width={1500}
                        height={1500} />
                </div>
                <div className='flex flex-col space-y-4 justify-center mx-auto'>
                    <h1 className='text-[40px] font-[600] leading-[160%]  text-[#2F327D]  max-w-[274px]'> One-on-One<span className='text-[#00CBB8]'> Discussions</span></h1>
                    <p className='text-[#696984] text-[22px] font-[400] leading-[180%] tracking-[0.44px] max-w-[540px]'>Teachers and teacher assistants can talk with
                        students privately without leaving the Zoom environment.</p>
                </div>
            </div>
            {/* Button */}
            <div className='mt-20 mb-10 flex flex-col justify-center items-center text-center'>
                <button className='text-[#49BBBD] border-[#49BBBD] font-[Nunito-Sans] font-[400] leading-[120%]  tracking-[0.48%] text-[24px]  w-[280px] h-[80px] flex flex-col justify-center text-center items-center border-[1px] rounded-[80px]'>See more features</button>
            </div>
        </div>
    )
}
export default Feature