import pagesLogo from "../assets/images/pagez-logo.png"
import defaultPfp from "../assets/images/default-pfp.jpg"
import { RiUser6Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import Headroom from "react-headroom";
import Notification from "./Notification";
import { TbSunMoon } from "react-icons/tb";
import { LuLibrary } from "react-icons/lu";
import { RiSearch2Line } from "react-icons/ri";
import { BsArrowsFullscreen } from "react-icons/bs";

function Nav() {



    return (

        <header className="font-montserrat w-ful max-sm:sticky top-0 bg-white z-20 relative px-7 max-sm:px-5">
            {/* <Headroom pinStart={0}> */}
            <nav className="flex justify-between items-center max-container py-5 bg-white sticky top-0 z-index-10">
                <a href="/" className="flex justify-start items-center gap-2 text-base font-medium w-[200px]">
                    <img src={pagesLogo} alt="logo" className=" h-9" />
                    <h1 className="logoText">Pagez</h1>

                </a>

                <div className='relative w-full max-w-[600px]'>
                    <input className="search transition bg-gray-200 bg-opacity-80 max-sm:bg-gray-100 backdrop-blur-md text-sm " type="search" placeholder="Find a Book.." />
                    <RiSearch2Line className="absolute top-0 bottom-0 m-auto left-4 size-5 text-[#333] " />
                </div>

                <div className="flex w-fit justify-end items-center min-w-[170px]  ">

                    <a href="#" className="group navbar-link p-2">
                        <TbSunMoon className="text-2xl cursor-pointer relative transition text-black group-hover:text-main-color" />
                    </a>

                    <a href="#" className="group navbar-link p-2 ml-2">
                        <LuLibrary className="text-2xl cursor-pointer relative transition text-black group-hover:text-main-color" />
                        {/* <Notification label={9} /> */}
                    </a>
                    <a href="#" className="group navbar-link rounded-full ml-3 flex items-center justify-center relative">
                        <img src={defaultPfp} className=" h-8 rounded-full " />
                        <p className=" text-sm font-semibold absolute w-fit whitespace-nowrap bg-gray-100 py-2 px-3 right-0 -bottom-[130%] rounded-md shadow-xl  tranition hidden group-hover:block">Clare thomson</p>
                    </a>

                </div>

            </nav>
            {/* </Headroom> */}
        </header>

    )
}

export default Nav