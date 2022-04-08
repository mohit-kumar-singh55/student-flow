import React from 'react';

const MySessions = () => {
    return (
        <div className="h-full whitespace-nowrap font-roboto capitalize px-4 sm:px-9 p-9 w-full block mx-auto">
            <div className="mb-9 flex justify-between">
                <h1 className="text-2xl font-semibold text-[#5E5252]">
                    Active Sessions
                </h1>
                <h1 className="font-bold text-[#FC4D6D]">archived Sessions</h1>
            </div>

            <main className="flex items-center md:justify-between justify-center flex-wrap gap-10">
                {/* Next Session (map on it) */}
                <div className="sm:w-[380px] w-full h-[500px] rounded-2xl bg-white p-4 shadow-lg">
                    <div className="mb-[40px] flex flex-col gap-[11px]">
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
                        <div className="mt-[40px]">
                            <button className=" w-full rounded-2xl bg-[#FC4D6D] py-5 text-2xl font-bold capitalize text-white ">
                                enter classroom
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default MySessions;