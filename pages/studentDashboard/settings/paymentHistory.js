import React from 'react'

const PaymentHistory = () => {
    return (
        <div className="md-[1px] h1wi ml-[1px] mb-[1px] bg-white h-[calc(100vh-150px)] max-h-fit capitalize lg:ml-[30px] lg:mt-[34px] lg:mb-[30px] lg:rounded-2xl font-poppins">
            <div className="flex justify-between p-5 sm:px-8">
                <h1 className="text-2xl font-semibold text-[#5E5252]">
                    Payment history
                </h1>
                <h1 className="font-bold text-[#3F97FF]">Update Billing Info</h1>
            </div>

            <hr className="text-[#E2E2E2]" />

            <div className="flex sm:flex-row flex-col sm:gap-6 text-[#545454] text-md capitalize font-medium w-full justify-between">
                {/* Date */}
                <div className='flex sm:flex-col sm:justify-center justify-between'>
                    <p className='py-4 px-8 text-[#858585]'>
                        Date
                    </p>

                    <hr className="text-[#E2E2E2]" />

                    <p className='py-4 px-8 text-[#5F5F5F]'>
                        8 Dec 2021
                    </p>

                    <hr className="text-[#E2E2E2]" />
                </div>

                {/* Hours */}
                <div className='flex sm:flex-col sm:justify-center justify-between'>
                    <p className='py-4 px-8 text-[#858585]'>
                        Hours
                    </p>

                    <hr className="text-[#E2E2E2]" />

                    <p className='py-4 px-8 text-[#5F5F5F]'>
                        1hr
                    </p>

                    <hr className="text-[#E2E2E2]" />
                </div>

                {/* Subject */}
                <div className='flex sm:flex-col sm:justify-center justify-between'>
                    <p className='py-4 px-8 text-[#858585]'>
                        Subject
                    </p>

                    <hr className="text-[#E2E2E2]" />

                    <p className='py-4 px-8 text-[#5F5F5F]'>
                        IT Project Management
                    </p>

                    <hr className="text-[#E2E2E2]" />
                </div>

                {/* Download */}
                <div className='flex sm:flex-col sm:justify-center justify-between text-[#3F97FF]'>
                    <p className='py-4 px-8'>
                        Download All
                    </p>

                    <hr className="text-[#E2E2E2]" />

                    <p className='py-4 px-8'>
                        Get Reciept
                    </p>

                    <hr className="text-[#E2E2E2]" />
                </div>
            </div>
        </div>
    )
}

export default PaymentHistory