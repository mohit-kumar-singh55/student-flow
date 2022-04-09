import React from 'react';
import Image from 'next/image';
import { AiOutlineLeft } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

const Progress = () => {
    return (
        <div className="h-full whitespace-nowrap font-roboto px-4 sm:px-9 p-9 w-full block mx-auto capitalize">
            <div className="mb-9 flex gap-3 items-end">
                <h1 className="text-2xl font-semibold text-[#5E5252]">
                    My Progress
                </h1>
            </div>

            <main className='flex items-center justify-between w-full flex-wrap-reverse gap-8'>
                {/* main */}
                <Main />

                {/* right sidebar */}
                <RightSidebar />
            </main>
        </div>
    )
}

export default Progress;


// main
const Main = () => {
    return (
        <div className='bg-white rounded-2xl sm:flex-1 h-[632px] py-4 px-8'>
            {/* top */}
            <div className='flex items-center justify-between w-full'>
                {/* image and subject */}
                <div className='flex items-center justify-center gap-3'>
                    <div className='relative w-14 h-14'>
                        <Image
                            src='/Images/revuserimg.png'
                            alt='tutor'
                            objectFit='contain'
                            layout='fill'
                        />
                    </div>
                    <div className='flex flex-col items-start justify-center gap-2'>
                        <h2 className='font-bold text-xl'>
                            Gardening
                        </h2>
                        <small className='text-[#5F5F5F]'>
                            Annette Black Sessions for gardening
                        </small>
                    </div>
                </div>

                <button className='border-none text-[#5B5151] text-lg flex items-center justify-center gap-1'>
                    <AiOutlineLeft /> Back
                </button>
            </div>

            {/* center */}
            <div className='flex items-center justify-between w-full flex-wrap mt-10'>
                {/* steps */}
                <div className='overflow-scroll'>

                </div>

                {/* sidebox */}
                <div className='flex flex-col gap-3 p-3 border-2 border-[#C8C8C8] rounded-lg sm:w-[397px] w-full h-full font-roboto overflow-y-scroll'>
                    {/* session */}
                    <div className='flex flex-col w-full gap-1'>
                        <div className='flex items-center justify-between'>
                            <p className='font-medium text-[#484848]'>
                                Session 1
                            </p>
                            <small className='font-bold text-[#20C374]'>
                                completed
                            </small>
                        </div>
                        <div className='flex items-center'>
                            <p className='font-medium text-[#8C8C8C]'>
                                Introduction
                            </p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='font-medium text-[#8C8C8C]'>
                                Date - 5-March-2022
                            </p>
                            <button className='flex items-center justify-center'>
                                <FiEdit />
                            </button>
                        </div>
                    </div>

                    {/* session agenda */}
                    <div className='flex flex-col gap-2'>
                        <p className='font-bold text-[#484848]'>
                            Session Agenda
                        </p>
                        <p className='text-[#414141] whitespace-normal text-[14px]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum duis orci blandit commodo cursus
                            <br />
                            lacus adipiscing molestie. Suspendisse enim dui id sed id lectus pharetra eleifend. Faucibus sit ut cras scelerisque. Dolor tortor sed placerat dui sociis
                        </p>
                        <div className='flex justify-end w-full'>
                            <button className='font-bold text-[#818181] text-[12px]'>
                                Read more
                            </button>
                        </div>
                    </div>

                    {/* session tutor remark */}
                    <div className='flex flex-col gap-2'>
                        <p className='font-bold text-[#484848]'>
                            Post Session Tutor Remarks
                        </p>
                        <p className='text-[#414141] whitespace-normal text-[14px]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum duis orci blandit commodo cursus
                            <br />
                            lacus adipiscing molestie. Suspendisse enim dui id sed id lectus pharetra eleifend. Faucibus sit ut cras scelerisque. Dolor tortor sed placerat dui sociis
                        </p>
                        <div className='flex justify-end w-full'>
                            <button className='font-bold text-[#818181] text-[12px]'>
                                Read more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


// right sidebar
const RightSidebar = () => {
    return (
        <div className='flex flex-col sm:w-[309px] w-full h-[632px] gap-2'>
            <p className='pl-1 font-semibold text-lg tracking-wide text-[#414141]'>
                My Targeted skills
            </p>
            {/* skills */}
            <div className='flex flex-col items-center gap-1 pt-1 bg-white rounded-2xl w-full h-full overflow-y-scroll'>
                {/* map on it */}
                <SkillsCard />
                <SkillsCard />
                <SkillsCard />
            </div>
        </div>
    )
}


// skills card
const SkillsCard = () => {
    return (
        <div className='w-full h-[75px] flex items-center justify-start gap-4 pl-5 rounded-md'>
            {/* Image */}
            <div className='relative w-12 h-12'>
                <Image
                    src='/Images/revuserimg.png'
                    alt='tutor'
                    objectFit='contain'
                    layout='fill'
                />
            </div>

            <div className='flex flex-col items-start justify-center'>
                <h2 className='font-semibold text-lg text-[#565555] tracking-wide'>
                    Arlene McCoy
                </h2>
                <p className='text-[#5F5F5F] font-medium'>
                    Gardening
                </p>
            </div>
        </div>
    )
}


// circle green
// #2E9C3F

// line
// #9E9E9E

// secont text color
// #888888

// in progress color
// #1976D2
// its bg
// #F6F4FD

// circle border and text color
// #9E9E9E