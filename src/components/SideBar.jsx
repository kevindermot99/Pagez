import React, { useEffect, useState } from 'react'
import pagesLogo from "../assets/images/pagez-logo.png"
import { TbMenu2 } from "react-icons/tb";
import { TbViewportNarrow } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { MdOutlineExplore } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { MdOutlineContactSupport } from "react-icons/md";
import { SlSettings } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { TbViewportWide } from "react-icons/tb";

import { TbLayoutSidebarRightExpand } from "react-icons/tb";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";


function SideBar() {
    const [sidebar, setSidebar] = useState("big")

    const toggleSidebar = () => {
        if (sidebar === "big") {
            setSidebar("small")
            localStorage.setItem("sidebar", "small")
        }
        else {
            setSidebar("big")
            localStorage.setItem("sidebar", "big")
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
    }, [])


    return (
        <div className={` sticky top-0 duration-200 ${sidebar === "big" && 'w-[240px]'}  ${sidebar === "small" && 'w-[80px]'}  relative h-[100vh] flex flex-col items-start justify-start px-3 py-5 bg-stone-50  dark:bg-dark-sidebar z-10`}>

            <div className={`group flex justify-between items-center mb-5 w-full `}>

                <div className={`${sidebar === "small" && 'flex justify-center items-center gap-0 max-w-[50px] w-full'} flex justify-start items-center text-base font-medium max-w-[50px] cursor-default `}>
                    <img src={pagesLogo} alt="logo" className={` transition h-auto w-[45px] mx-3 ${sidebar === "small" && 'pl-0'} `} />
                    <h1 className={`logoText ${sidebar === "small" && 'hidden'}`}>Pagez</h1>
                </div>
            </div>
            <ul className={`sidebar w-full h-full overflow-y-auto overflow-x-clip`}>
                <Link to="/app" className={`active  h-[45px]  group flex items-center justify-start text-[15px] gap-3 outline-none w-full transition duration-100 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink  ${sidebar === "small" && 'max-w-[50px]'}`}>
                    <IoHomeOutline className='text-[22px] mx-3 min-h-7 min-w-6 opacity-50  group-hover:opacity-100' />
                    <p className={` text-sm font-medium dark:text-stone-300 text-stone-700  overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Home</p>
                </Link>

                <Link className={`h-[45px]  group flex items-center justify-start text-[15px] gap-3 outline-none w-full transition duration-100 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink  ${sidebar === "small" && 'max-w-[50px]'}`}>
                    <MdOutlineExplore className='text-[22px] mx-3 min-h-7 min-w-6 opacity-50  group-hover:opacity-100' />
                    <p className={` text-sm font-medium dark:text-stone-300 text-stone-700  overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Explore</p>
                </Link>

                <Link className={`h-[45px]  group flex items-center justify-start text-[15px] gap-3 outline-none w-full transition duration-100 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink  ${sidebar === "small" && 'max-w-[50px]'}`}>
                    <BiCategoryAlt className='text-[22px] mx-3 min-h-7 min-w-6 opacity-50  group-hover:opacity-100' />
                    <p className={` text-sm font-medium dark:text-stone-300 text-stone-700  overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Categories</p>
                </Link>

                <div className='w-[95%] m-auto h-[1px] bg-stone-200 dark:bg-stone-800  my-3'></div>

                <Link className={`h-[45px]  group flex items-center justify-start text-[15px] gap-3 outline-none w-full transition duration-100 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink  ${sidebar === "small" && 'max-w-[50px]'}`}>
                    <FaRegHeart className='text-[22px] mx-3 min-h-7 min-w-6 opacity-50 group-hover:opacity-100' />
                    <p className={` text-sm font-medium dark:text-stone-300 text-stone-700 overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Liked Books</p>
                </Link>
                <Link className={`h-[45px]  group flex items-center justify-start text-[15px] gap-3 outline-none w-full transition duration-100 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink  ${sidebar === "small" && 'max-w-[50px]'}`}>
                    <MdOutlineWatchLater className='text-[22px] mx-3 min-h-7 min-w-6 opacity-50 group-hover:opacity-100' />
                    <p className={` text-sm font-medium dark:text-stone-300 text-stone-700 overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Play Later</p>
                </Link>
            </ul>
            <div className='absolute bottom-0 left-0 w-full h-fit p-3 bg-stone-200 dark:bg-dark-sidebar bg-opacity-10 dark:bg-opacity-30'>
                <button onClick={toggleSidebar} className={`group w-full py-3 px-2 flex items-center justify-center rounded-lg hover:bg-main-color transition duration-300`}>
                    {sidebar === "big" ?
                        <TbLayoutSidebarRightExpand className="text-[26px] text-stone-500 dark:text-stone-500 transition group-hover:text-white" />
                        :
                        <TbLayoutSidebarLeftExpand className="text-[26px] text-stone-500 dark:text-stone-500 transition group-hover:text-white" />
                    }

                </button>
            </div>

        </div>
    )
}

export default SideBar