import { DotsHorizontalIcon, SearchIcon } from "@heroicons/react/outline";
import { PlusIcon, UserIcon } from "@heroicons/react/solid";
import React from "react";

export default function Widgets() {
  return (
    <div className="absolute z-20 h-[835px] w-[750px] bg-gray-700/90 top-0 left-4 -mt-[800px] rounded-lg text-gray-200">
      {/* Header */}
      <div className="relative">
        <p className="absolute left-1/2 -translate-x-1/2 text-3xl mt-5">
          15:44
        </p>
        <div className="w-[88px] h-11 bg-gray-600/90 absolute right-4 top-4 rounded-md flex justify-center items-center">
          <PlusIcon className="w-6" />
          <div className="rounded-full w-7 aspect-square bg-zinc-200 ml-1 flex justify-center items-center">
            <UserIcon className="w-5 fill-zinc-700" />
          </div>
        </div>
      </div>
      {/* Search Bar */}
      <div className="w-[615px] h-9 bg-zinc-800/90 mt-20 relative left-1/2 -translate-x-1/2 rounded flex items-center">
        <SearchIcon className="w-5 ml-2" />
        <input
          type="text"
          name=""
          id=""
          className="h-7 bg-transparent ml-1 w-11/12 outline-none"
          placeholder="Search the web"
          autoFocus={true}
        />
      </div>
      {/* Widgets */}
      <div className="w-[615px] relative left-1/2 -translate-x-1/2 mt-8">
        {/* Stack 1 */}
        <div className="flex justify-between">
          {/* Sports Card */}
          <div className="w-[301px] bg-zinc-800/80 h-[145px] rounded p-4">
            <div className="flex relative">
              <img src="/icons/ipl.png" alt="" className="w-4 mr-3" />
              <p className="opacity-90">Indian Premier League</p>
              <DotsHorizontalIcon className="w-5 mt-0.5 absolute right-0" />
            </div>
            {/* Scores */}
            <div className="flex mt-5 relative">
              <img
                src="/icons/csk.png"
                alt=""
                className="w-[52px] opacity-80"
              />
              <div className="text-sm ml-1 mt-2 opacity-80">
                <p className="">200/7</p>
                <p className="">20.0 overs</p>
              </div>

              <img
                src="/icons/mi.png"
                alt=""
                className="w-[52px] opacity-80 h-10 absolute right-0 mt-1"
              />
              <div className="text-sm ml-6 mt-2 opacity-80">
                <p className="text-right">138/7</p>
                <p className="">16.8 overs</p>
              </div>
            </div>
            {/* For Extras */}
            <p className="text-sm mt-2 text-center text-cyan-500 opacity-80 hover:opacity-100 transition-all ease-in-out">
              <a
                href="https://www.cricbuzz.com/"
                target="_blank"
                rel="noopener,noreferrer"
              >
                See more about IPL
              </a>
            </p>
          </div>
          {/* Stock Card */}
          <div className="w-[301px] bg-zinc-800/80 h-[145px] rounded p-4">
            <div className="flex relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 mr-2 stroke-green-400"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              <p className="opacity-90">Stock Market</p>
              <DotsHorizontalIcon className="w-5 mt-0.5 absolute right-0" />
            </div>
            <div className="px-4 pt-4 opacity-90">
              <span className="flex justify-between">
                <p className="">Apple Inc.</p>
                <p className="">+1.35%</p>
              </span>
              <span className="flex justify-between">
                <p className="">Tata Motors</p>
                <p className="">+0.35%</p>
              </span>
            </div>
            <p className="text-sm mt-2 text-center text-cyan-500 opacity-80 hover:opacity-100 transition-all ease-in-out">
              <a
                href="https://www.nseindia.com/market-data/live-equity-market"
                target="_blank"
                rel="noopener,noreferrer"
              >
                Check stock prices
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}