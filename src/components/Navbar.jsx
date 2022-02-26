import React from "react";

const Navbar = () => {
    return (
        <div>
        <div className=" flex justify-between">
            <div className="p-3 w-44 font-bold text-3xl text-white">Ad Astra</div>
            <div className="flex justify-between align-to p-2">
                <Text>Jobs</Text>
                <Buttons>Get hired</Buttons>
                <Text>News</Text>
                <Buttons>Start hiring</Buttons>
            </div>
        </div>
        </div>
    );
};

const Buttons = (props) => {
    return (
        <div className=" bg-gradient-to-b from-indigo-400 to-indigo-500 shadow-none flex justify-center p-3 w-29 h-12 cursor-pointer font-semibold text-base rounded-lg text-white hover:shadow-md mr-3 hover:from-indigo-800 hover:to-indigo-900">
            {props.children}
        </div>
    );
};

const Text = (props) => {
    return (
        <div className=" shadow-none flex justify-center p-3 w-29 h-12 cursor-pointer font-semibold text-base rounded-lg text-white hover:text-indigo-900 mr-3 ">
            {props.children}
        </div>
    );
};

export default Navbar;
