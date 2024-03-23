import React, { useEffect, useState } from 'react'
import pagesLogo from "../assets/images/pagez-logo.png"
import { TbMenu2 } from "react-icons/tb";
import { TbViewportNarrow } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { MdOutlineExplore } from "react-icons/md";
import { LuLibrary } from "react-icons/lu";
import { MdOutlineContactSupport } from "react-icons/md";
import { SlSettings } from "react-icons/sl";
import { SlLike } from "react-icons/sl";
import { MdOutlineWatchLater } from "react-icons/md";
import { TbViewportWide } from "react-icons/tb";

import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";


function SideBar() {
    const [sidebar, setSidebar] = useState("big")

    const toggleSidebar = () => {
        if (sidebar === "big") {
            setSidebar("small")
            localStorage.setItem("sidebar","small")
        }
        else {
            setSidebar("big")
            localStorage.setItem("sidebar","big")
        }
    }
    
    useEffect(() => {
        const sidebarState = localStorage.getItem("sidebar")
        if (sidebarState === "big") {
            setSidebar("big")
        }
        else {
            setSidebar("small")
        }
    },[])


    return (
        <div className={` sticky top-0 duration-200 ${sidebar === "big" && 'w-[240px]'}  ${sidebar === "small" && 'w-[80px]'}  relative h-[100vh] flex flex-col items-start justify-start px-3 py-5 bg-stone-100  dark:bg-dark-sidebar`}>
            <button onClick={toggleSidebar} className={`absolute left-[105%] top-0 bottom-0 m-auto z-30 h-fit flex items-center justify-center rounded-full`}>
                {sidebar === "big" ?
                    <FaAngleLeft className="text-xl text-stone-500 dark:text-stone-700 transition hover:text-main-color" />
                    :
                    <FaAngleRight className="text-xl text-stone-500 dark:text-stone-700 transition hover:text-main-color" />
                }

            </button>
            <div className={`group flex justify-between items-center mb-3 w-full `}>

                <div className={`${sidebar === "small" && 'flex justify-center items-center gap-0 max-w-[50px] w-full'} flex justify-start items-center text-base font-medium max-w-[50px] cursor-default `}>
                    <img src={pagesLogo} alt="logo" className={` transition h-auto w-[32px] mx-3 ${sidebar === "small" && 'pl-0'} `} />
                    <h1 className={`logoText ${sidebar === "small" && 'hidden'}`}>Pagez</h1>
                </div>
            </div>
            <ul className={`sidebar w-full h-full overflow-y-auto overflow-x-clip`}>
                <Link className={`active  h-[45px]  group flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 transition duration-100 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink  ${sidebar === "small" && 'p-0 justify-center max-w-[50px]'}`}>
                    <IoHomeOutline className='text-[22px5 min-h-5 min-w-5 opacity-50  group-hover:opacity-100' />
                    <p className={` text-sm font-medium dark:text-stone-300 text-stone-700  overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Home</p>
                </Link>

                <Link className={`h-[45px]  group flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 transition duration-100 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink  ${sidebar === "small" && 'p-0 justify-center max-w-[50px]'}`}>
                    <MdOutlineExplore className='text-[22px] min-h-5 min-w-5 opacity-50  group-hover:opacity-100' />
                    <p className={` text-sm font-medium dark:text-stone-300 text-stone-700  overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Explore</p>
                </Link>

                <Link className={`h-[45px]  group flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 transition duration-100 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink  ${sidebar === "small" && 'p-0 justify-center max-w-[50px]'}`}>
                    <LuLibrary className='text-[22px] min-h-5 min-w-5 opacity-50  group-hover:opacity-100' />
                    <p className={` text-sm font-medium dark:text-stone-300 text-stone-700  overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Libraries</p>
                </Link>

                <Link className={`h-[45px]  group flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 transition duration-100 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink  ${sidebar === "small" && 'p-0 justify-center max-w-[50px]'}`}>
                    <MdOutlineContactSupport className='text-[22px] min-h-5 min-w-5 opacity-50 group-hover:opacity-100' />
                    <p className={` text-sm font-medium dark:text-stone-300 text-stone-700 overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Support</p>
                </Link>

                <Link className={`h-[45px]  group flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 transition duration-100 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink  ${sidebar === "small" && 'p-0 justify-center max-w-[50px]'}`}>
                    <SlSettings className='text-[22px] min-h-5 min-w-5 opacity-50 group-hover:opacity-100' />
                    <p className={` text-sm font-medium dark:text-stone-300 text-stone-700 overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Settings</p>
                </Link>

                <div className='w-[95%] m-auto h-[1px] bg-stone-200 dark:bg-stone-800  my-3'></div>
                
                <Link className={`h-[45px]  group flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 transition duration-100 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink  ${sidebar === "small" && 'p-0 justify-center max-w-[50px]'}`}>
                    <SlLike className='text-[22px] min-h-5 min-w-5 opacity-50 group-hover:opacity-100' />
                    <p className={` text-sm font-medium dark:text-stone-300 text-stone-700 overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Liked Books</p>
                </Link>
                <Link className={`h-[45px]  group flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 transition duration-100 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink  ${sidebar === "small" && 'p-0 justify-center max-w-[50px]'}`}>
                    <MdOutlineWatchLater className='text-[22px] min-h-5 min-w-5 opacity-50 group-hover:opacity-100' />
                    <p className={` text-sm font-medium dark:text-stone-300 text-stone-700 overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Play Later</p>
                </Link>
            </ul>
        </div>
    )
}

export default SideBar