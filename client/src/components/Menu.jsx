import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GoChevronDown } from "react-icons/go";
import { TbSearch } from "react-icons/tb";
import { GoGitBranch } from "react-icons/go";
import Logo from "../assets/logo.png";
import Badge from "./Badge";
import { TbLogout2 } from "react-icons/tb";
import { RiAccountCircleLine } from "react-icons/ri";
import { MdOutlineDownloading } from "react-icons/md";
import { HiCollection } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { genres } from "../constants/data";
import { RiCustomerService2Line } from "react-icons/ri";
import ButtonLink from "./ButtonLink";
import { IoChevronDownSharp } from "react-icons/io5";

function Menu() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [username, setUserName] = useState("");
    const [userId, setUserId] = useState("none");

  // checking logged in user
  useEffect(() => {
    const userId = localStorage.getItem("gamezillaUserId");
    if (userId) {
      setUserId(userId);
    } else {
      setUserId("none");
    }
  }, []);


  const changeBg = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBg);
  }, []);

  window.addEventListener("load", () => {
    setScrollPosition(window.scrollY);
  });

  useEffect(() => {
    if (userId !== "") {
      const res = localStorage.getItem("gamezillaUsername");
      setUserName(res);
    }
  }, [userId]);

  const handleLogout = () => {
    localStorage.removeItem("gamezillaUsername");
    localStorage.removeItem("gamezillaUserId");

    window.location.reload();
  };

  return (
    <div
      className={`min-h-fit w-full px-[24px] py-0 h-[60px] bg-stone-100 dark:bg-container-color text-body-color dark:text-text-color flex items-center gap-3 ${
        scrollPosition > 60 ? "  " : "  "
      } `}
    >
      <div className="w-full h-fit flex items-center justify-between">
        <div className="w-fit min-w-fit h-full flex items-center justify-start gap-4 ">
          <Link
            to="/"
            className="font-bold text-2xl tracking-tighter flex items-center justify-center mr-3 gap-1 "
          >
            <img src={Logo} className="h-9" />
            Gamezilla
          </Link>

          <Link
            to={`/`}
            className={`text-[15px] capitalize text-black dark:text-text-color/80 font-DMsans font-medium tracking-tight transition-colors h-full cursor-pointer py-2 px-1`}
          >
            All games
          </Link>

          <Link
            to={`/`}
            className={`text-[15px] capitalize text-black dark:text-text-color/80 font-DMsans font-medium tracking-tight transition-colors cursor-pointer py-2 px-1`}
          >
            collections
          </Link>
          <button
            className={`group text-[15px] h-[60px] capitalize text-black dark:text-text-color/80 font-DMsans font-medium tracking-tight transition-colors cursor-pointer py-2 px-1 flex items-center gap-1`}
          >
            genres
            <IoChevronDownSharp  />
            <div className="h-[400px] w-full absolute top-[60px] bg-container-color left-0 right-0 mx-auto z-30 hidden group-hover:flex transition-all cursor-default">
              
            </div>

          </button>
        </div>

        <div className={`h-full w-fit relative flex items-center gap-4`}>
          <Link
            to={`/login`}
            className={` relative group flex px-1 gap-1 `}
          >
            <BsCart className="text-xl dark:text-text-color text-black" />
            {/* <Badge count={0} /> */}
          </Link>

          {userId === "none" ? (
            <Link 
              to={`/login`}
              className={`flex items-center justify-center gap-3 h-[35px] aspect-square rounded-full min-w-fit bg-stone-300 text-black dark:text-text-color dark:bg-stone-500/20  mr-2 `}
            >
              <AiOutlineUser className="text-[18px]" />
            </Link>
          ) : (
            <div
              className={`group flex items-center gap-2 h-full w-fit min-w-fit cursor-default relative ${
                userId === "none" && "hidden"
              }`}
            >
              <p className="dark:bg-container-color bg-stone-200 text-black dark:text-white h-8 aspect-square flex items-center justify-center capitalize font-mono font-bold text-2xl rounded-full  ">
                {username.charAt(0)}
              </p>
              <p>{username}</p>
              <div className="absolute top-[30px] pt-3 right-0 w-fit min-w-[200px] h-fit opacity-0 -z-50 pointer-events-none group-hover:opacity-100 group-hover:z-10 -translate-y-4 group-hover:translate-y-0 transition group-hover:pointer-events-auto   ">
                <div className="bg-container-color bad rounded-lg p-2 w-full h-full">
                  <button className="text-sm px-2 h-[40px] rounded-lg hover:bg-stone-500/10 w-full text-left flex items-center justify-start gap-2 hover:text-main-color font-normal capitalize ">
                    <RiAccountCircleLine className=" text-[25px] cursor-pointer " />{" "}
                    Account
                  </button>
                  <button className="text-sm px-2 h-[40px] rounded-lg hover:bg-stone-500/10 w-full text-left flex items-center justify-start gap-2 hover:text-main-color font-normal capitalize ">
                    <MdOutlineDownloading className=" text-[25px] cursor-pointer " />{" "}
                    Downloads
                  </button>
                  <button className="text-sm px-2 h-[40px] rounded-lg hover:bg-stone-500/10 w-full text-left flex items-center justify-start gap-2 hover:text-main-color font-normal capitalize ">
                    <HiCollection className=" text-[25px] cursor-pointer " />{" "}
                    Collection
                  </button>
                  <div className="w-full h-[1px] bg-border-line-color/60 my-2"></div>
                  <button
                    onClick={handleLogout}
                    className="text-sm px-2 h-[40px] rounded-lg hover:bg-stone-500/10 w-full text-left flex items-center justify-start gap-2 hover:text-red-500 font-normal capitalize "
                  >
                    <TbLogout2 className="text-[25px] cursor-pointer " /> Logout
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="w-fit h-[25px] border-l-[2px] border-l-stone-500/60"></div>
          <a
            href="https://github.com/kevindermot99/gamezilla"
            target="_blank"
            className="text-sm font-semibold flex items-center tracking-wide h-fit transition hover:text-main-color"
            title={`Source Code`}
          >
            SC <GoGitBranch className="ml-[5px]" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Menu;