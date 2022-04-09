import React from 'react';
import Image from 'next/image';
import { AiOutlineLeft } from "react-icons/ai";

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
        <div className='bg-white rounded-2xl sm:flex-1 h-[632px] overflow-scroll py-4 px-8'>
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

                <button className='border-none text-[#858585] text-lg flex items-center justify-center gap-1'>
                    <AiOutlineLeft /> Back
                </button>
            </div>

            {/* center */}
            <div className='flex items-center justify-between w-full'>
                {/* steps */}
                <div>

                </div>

                {/* sidebox */}
                <div>

                </div>
            </div>
        </div>
    )
}


// right sidebar
const RightSidebar = () => {
    return (
        <div className='flex flex-col sm:w-[309px] w-full h-[632px] gap-2'>
            <p className='pl-1 font-semibold text-lg tracking-wide'>
                My Targeted skills
            </p>
            {/* skills */}
            <div className='flex flex-col items-center gap-1 pt-1 bg-white rounded-2xl w-full h-full overflow-y-scroll'>
                {/* map on it */}
                <SkillsCard />
            </div>
        </div>
    )
}


// skills card
const SkillsCard = () => {
    return (
        <div className='w-full h-[70px] flex items-center justify-start gap-4 pl-5 rounded-md'>
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