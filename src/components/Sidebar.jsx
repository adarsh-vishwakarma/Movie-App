import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-10">
      <h1 className="text-2xl text-white font-bold">
        <i className="text-[#6556CD] mr-2 ri-tv-fill"></i>
        <span>SCSDB</span>
      </h1>

      <nav className="flex flex-col text-zinc-400 text-md gap-2">
        <h1 className="text-white font-semibold mt-8 mb-2 text-xl">
          New Feeds
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4">
          <i className="mr-2 ri-fire-fill"></i>Trending
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4">
          <i className="mr-2 ri-bard-fill"></i>Popular
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4">
          <i className="mr-2 ri-movie-2-fill"></i>Movies
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4">
          <i className="mr-2 ri-tv-2-fill"></i>TV Shows
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4">
          <i className="mr-2 ri-team-fill"></i>People
        </Link>
      </nav>
      <hr className="border-none h-[1px] bg-zinc-400 mt-2"/>
      <nav className="flex flex-col text-zinc-400 text-md gap-2">
        <h1 className="text-white font-semibold mt-8 mb-2 text-xl">
          
          Website Information
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4">
          <i className="mr-2 ri-information-fill"></i>About
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4">
          <i className="mr-2 ri-phone-fill"></i>Contact
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
