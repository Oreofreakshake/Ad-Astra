import React from "react";

const Jobs = () => {
    return (
        <div>
            <div>
                <div className="flex justify-center align-middle mt-9">
                    <div className="text-4xl font-bold text-white">Job pool</div>
                </div>
                <div className="flex pr-24 pl-24 pb-24 pt-12 justify-center align-middle">
                    <div className="w-56 h-52 bg-indigo-400 hover:bg-indigo-600 cursor-pointer rounded-2xl mr-14">
                        <div className="p-12 w-full h-9 text-center font-bold text-3xl text-white mb-3">
                            Private
                        </div>
                        <div className="w-full h-10 flex justify-center align-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-20 h-20"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="w-56 h-52 bg-indigo-400 hover:bg-indigo-600 cursor-pointer rounded-2xl">
                        <div className="p-12 w-full h-10 text-center font-bold text-3xl text-white mb-3">
                            Civil
                        </div>
                        <div className="w-full h-10 flex justify-center align-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-20 h-20"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex pb-24 justify-center align-top">
                <div className="w-56 h-52 bg-indigo-400 hover:bg-indigo-600 cursor-pointer rounded-2xl">
                        <div className="p-12 w-full h-9 text-center font-bold text-3xl text-white mb-3">
                            Resorts
                        </div>
                        <div className="w-full h-10 flex justify-center align-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-20 h-20"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;
