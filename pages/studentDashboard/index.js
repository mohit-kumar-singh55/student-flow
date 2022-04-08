import React from 'react';
import { TiTick } from 'react-icons/ti';

const HomePage = () => {
    return (
        <>
            <div className="h-full whitespace-nowrap p-5 font-roboto capitalize lg:p-2 xl:p-9">
                <div className="mb-9 flex gap-3 items-end">
                    <h1 className="text-2xl font-semibold text-[#5E5252]">
                        Profile And Trail Sessions
                    </h1>
                    <small className="text-[#A0A0A0] font-bold text-[12px] pb-1">Last 365 Days</small>
                </div>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-3 xl:gap-9 ">
                    {/* Next Session */}
                    <div className="rounded-2xl bg-white  lg:px-2 lg:py-4 xl:py-[30px] xl:px-4 ">
                        <div className="mb-[54px] flex flex-col gap-[11px]    ">
                            <h3 className="text-2xl font-semibold">next session</h3>
                            <p className="text-base font-medium">
                                is with in
                                <span className="font-bold text-[#FC4D6D]"> 00:00:15:35 </span>
                                minutes{' '}
                            </p>
                        </div>
                        <div className="p-4 lg:px-2 lg:py-4 xl:p-4 ">
                            <div className="grid grid-cols-2 gap-y-4 text-lg">
                                <label className="font-bold">date</label>
                                <p className=" justify-self-end font-medium">12-feb-2022</p>
                                <label className="font-bold">duration</label>
                                <p className=" justify-self-end font-medium">
                                    3:00pm to 4:00pm
                                </p>
                                <label className="font-bold">skill</label>
                                <p className=" justify-self-end font-medium">gardening</p>
                                <label className="font-bold">Tutor</label>
                                <p className=" justify-self-end font-medium">mr.jhon carter</p>
                                <label className="font-bold">session no.</label>
                                <p className=" justify-self-end font-medium">5</p>
                            </div>
                            <div className="mt-[59px]  mb-5">
                                <button className=" w-full rounded-2xl bg-[#FC4D6D] py-5 text-2xl font-bold capitalize text-white ">
                                    enter classroom
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Courses, Progress and Certificates */}
                    <div className="rounded-2xl bg-white lg:px-2 lg:py-4 xl:py-[30px] xl:px-4 ">
                        <div className="mb-[37px] flex flex-col  gap-[7px]  ">
                            <h3 className="text-3xl font-semibold text-[#5E5252]">
                                Courses in progress
                            </h3>
                            <p className="text-[40px] font-semibold text-[#494949] pl-3">2</p>
                        </div>
                        <div className="mb-[47px] flex flex-col gap-[7px]   ">
                            <h3 className="text-3xl font-semibold text-[#5E5252]">
                                Courses Completed
                            </h3>
                            <p className="text-[40px] font-semibold text-[#494949] pl-3">3</p>
                        </div>
                        <div className="flex flex-col gap-[7px]">
                            <h3 className="text-3xl font-semibold text-[#5E5252]">
                                Certificates Earned
                            </h3>
                            <p className="text-[40px] font-semibold text-[#494949] pl-3">3</p>
                        </div>
                    </div>

                    {/* Targeted Skill Status */}
                    <div className="rounded-2xl bg-white lg:px-2 lg:py-4 xl:py-[30px] xl:px-4 ">
                        <div className="mb-[37px] flex flex-col">
                            <h3 className="text-[22px] font-semibold text-[#5E5252]">
                                Targeted Skill Status
                            </h3>
                        </div>
                        <label className="text-lg font-medium text-[#767676]">
                            Profile score
                        </label>
                        <div className="mb-[45px] flex gap-[31px]">
                            <p className="text-[34px] font-semibold text-[#494949]">83%</p>
                            <div className="my-auto h-5 w-auto rounded-[30px] bg-[#F2F2F2] px-2 py-0.5 text-xs font-normal text-[#03CD0B]">
                                Live
                            </div>
                        </div>
                        <div className="text-lg font-medium text-[#767676] flex flex-col gap-3">
                            <div className="flex gap-3">
                                <input
                                    type="checkbox"
                                    name="profileUploaded"
                                    id=""
                                    className="my-auto h-[18px] w-[18px] border-2 border-[#E04343]"
                                />
                                <label>profile uploaded</label>
                            </div>
                            <div className="flex gap-3">
                                <input
                                    type="checkbox"
                                    name="profileUploaded"
                                    id=""
                                    className="my-auto h-[18px] w-[18px] border-2 border-[#E04343]"
                                />
                                <label>profile uploaded</label>
                            </div>
                            <div className='flex gap-3'>
                                <TiTick className="text-[#03CD0B]" />
                                <label>profile uploaded</label>
                            </div>{' '}
                            <div className='flex gap-3'>
                                <TiTick className="text-[#03CD0B]" />
                                <label>profile uploaded</label>
                            </div>{' '}
                            <div className='flex gap-3'>
                                <TiTick className="text-[#03CD0B]" />
                                <label>profile uploaded</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;