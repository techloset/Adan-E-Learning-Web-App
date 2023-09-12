import Image from 'next/image'
const CloudSoftware = () => {
    return (
        <div className=' mt-20 '>
            {/* Heading */}
            <div className='text-center  space-y-3 '>
                <h2 className='text-[36px] font-bold leading-[180%]  text-[#2F327D]'>All-In-One <span className='text-[#00CBB8]'>Cloud Software.</span></h2>
                <div className='flex items-center justify-center text-center'>
                    <p className='max-w-[837px] flex  text-[24px] font-[400] leading-[180%] Blacktext
             text-[#696984]'>TOTC is one powerful online software suite that combines all
                        the tools needed to run a successful school or office.
                    </p>
                </div>
            </div>

            {/* Cards */}
            <div className='mt-20 grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 justify-center items-center  mx-auto 2xl:w-[75%]  xl:w-[80%]  lg:w-[90%]  md:w-[95%]  sm:w-[98%]  xs:w-[98%%]  '>


                <div className='relative homeCloudBlackBorder rounded-[40px] min-h-[430px]  max-w-[450px] w-auto mx-auto flex flex-col justify-end px-10 py-5'>
                    <Image
                        src="/homepage/CloudSoftware/CardOne.svg"
                        alt=""
                        height={150}
                        width={150}
                        className='absolute top-[-15%] left-[35%]' />
                    <div className='pt-3 relative'>
                        <h3 className='text-center text-[#2F327D] text-[30px] font-[500] leading-[normal] mb-3'>Online Billing, <br />Invoicing, & Contracts</h3>
                             <div className='flex flex-col justify-center items-center text-center w-full'>
                        <p className='text-[#696984] font-[400] text-[20px] leading-[180%] mb-3 max-w-[377px]'>Simple and secure control of your organization’s financial and legal transactions.
                             Send customized invoices and contracts</p>
                        </div>
                    </div>

                </div>
              
                <div className='relative homeCloudBlackBorder rounded-[40px] min-h-[430px]  max-w-[450px] w-auto mx-auto flex flex-col justify-end px-10 py-5'>
                    <Image
                        src="/homepage/CloudSoftware/CardTwo.svg"
                        alt=""
                        height={150}
                        width={150}
                        className='absolute top-[-15%] left-[35%]' />
                    <div className='pt-3 relative'>
                        <h3 className='text-center text-[#2F327D] text-[30px] font-[500] leading-[normal] mb-3'>Easy Scheduling &<br/> Attendance Tracking</h3>
                        <div className='flex flex-col justify-center items-center text-center w-full'>
                        <p className='text-[#696984] font-[400] text-[20px] leading-[180%] mb-3 max-w-[377px]'>Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendances</p>
                        </div>
                     
                    </div>

                </div>
              
                <div className='relative homeCloudBlackBorder rounded-[40px] min-h-[430px]  max-w-[450px] w-auto mx-auto flex flex-col justify-end px-10 py-5'>
                    <Image
                        src="/homepage/CloudSoftware/CardThree.svg"
                        alt=""
                        height={150}
                        width={150}
                        className='absolute top-[-15%] left-[35%]' />
                    <div className='pt-3 relative space-y-8'>
                        <h3 className='text-center text-[#2F327D] text-[30px] font-[500] leading-[normal] mb-3'>Customer Tracking</h3>
                        <div className='flex flex-col justify-center items-center text-center w-full'>
                        <p className='text-[#696984] font-[400] text-[20px] leading-[180%] mb-3 max-w-[319px]'>Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization </p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
export default CloudSoftware