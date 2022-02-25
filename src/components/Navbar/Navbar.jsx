import React from "react";

const Navbar = () => {
    return (
        <div className=" flex justify-between">
            <div className="p-5 w-44 font-bold text-4xl">Logo</div>
            <div className="flex justify-between align-top">
                <Buttons>Jobs</Buttons>
                <Buttons>Get hired</Buttons>
                <Buttons>News</Buttons>
                <Buttons>Start hiring</Buttons>
            </div>
        </div>
    );
};

const Buttons = (props) => {
    return (
        <div className=" bg-gradient-to-b from-green-500 to-green-600 shadow-none flex justify-center p-5 w-28 h-16 cursor-pointer font-bold text-xl text-center rounded-lg text-white hover:shadow-md mr-3">
            {props.children}
        </div>
    );
};

export default Navbar;
