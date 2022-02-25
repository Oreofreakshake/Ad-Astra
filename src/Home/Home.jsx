import React from "react";
import Jobs from "../components/Jobs";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const Home = () => {
    return (
        <div className="overflow-hidden">
        <div className="p-4 bg-gradient-to-r from-indigo-600 to-blue-700 shadow-none hover:shadow-lg fixed top-0 w-full">
            <Navbar />
        </div>
        <Slider/>
        <Jobs/>
        </div>
    );
};

export default Home;
