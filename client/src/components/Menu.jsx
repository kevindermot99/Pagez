import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { GoChevronDown } from "react-icons/go";
import { TbSearch } from "react-icons/tb";
import { GoGitBranch } from "react-icons/go";
import Logo from '../assets/logo.png'
import Badge from './Badge';
import { TbLogout2 } from "react-icons/tb";
import { RiAccountCircleLine } from "react-icons/ri";
import { MdOutlineDownloading } from "react-icons/md";
import { HiCollection } from "react-icons/hi";

function Menu({ userId }) {
  const location = useLocation();

  const [searchValue, setSearchValue] = useState('')
  const [resetSearch, setResetSearch] = useState(false)
  const [quickResult, setQuickResult] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [username, setUserName] = useState('')
  const navigate = useNavigate()


  const handleSearchValue = (e) => {
    setSearchValue(e.target.value)
    if (e.target.value !== '') {
      setResetSearch(true)
      setQuickResult(true)
    }
    else {
      setResetSearch(false)
      setQuickResult(false)
    }

  }

  const hideWhenEmpty = (e) => {
    if (e.target.value === '') {
      setResetSearch(false)
    }
  }

  const handleResetSearch = () => {
    setSearchValue('')
    setResetSearch(false)
    setQuickResult(false)
  }

  const searchThis = (e) => {
    e.preventDefault();
  }

  const changeBg = () => {
    setScrollPosition(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBg)
  }, [])

  window.addEventListener('load', () => {
    setScrollPosition(window.scrollY)
  })

  useEffect(() => {
    if (userId !== '') {
      const res = localStorage.getItem('gamezillaUsername')
      setUserName(res)
    }
  }, [userId])

  const handleLogout = () => {
    localStorage.removeItem('gamezillaUsername')
    localStorage.removeItem('gamezillaUserId')

    window.location.reload()
  }


  return (
    <div className={` sticky top-0 z-20 h-fit w-full px-[24px] py-2 text-light-text-color flex items-center justify-between transition-colors ease-in-out duration-500 bg-body-color  ${scrollPosition > 20 ? '  ' : '  '} `}>
    
      <form onSubmit={searchThis} className='h-fit w-full max-w-[400px] relative flex text-light-text-color'>
        <label className='w-full h-fit relative overflow-hidden flex flex-col items-center justify-center z-20'>
          <input type="search" onChange={handleSearchValue} onKeyDown={hideWhenEmpty} value={searchValue} placeholder='Search' className='bg-container-color  placeholder:text-text-color-light rounded-full h-[35px] w-full pl-9 pr-20 text-[15px] tracking-tight font-medium ' />
          <TbSearch className='text-lg absolute top-0 bottom-0 my-auto left-[12px] text-light-text-color opacity-40 ' />
          <button onClick={handleResetSearch} className={`absolute top-0 bottom-0 my-auto right-[8px] text-[14px] font-semibold items-center tracking-wide px-3 text-main-color transition  ${resetSearch ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'} `}>Cancel</button>
        </label>
        <div className={`min-h-fit w-full pt-6 pb-3 bg-body-color shadow-xl absolute top-[10px] border border-border-line-color/40 rounded-2xl flex-col ${quickResult ? 'flex ' : 'hidden'} `}>
          <div className='px-3 flex flex-col mt-3'>
            <Link to={`/`} className='group px-4 py-2 rounded-xl transition hover:bg-container-color '>
              <h1 className=' text-[15px] tracking-wide font-medium transition group-hover:text-main-color  '>Home Lander</h1>
            </Link>
          </div>
        </div>
      </form>

      <div className={`h-full w-fit min-w-fit relative flex items-center ml-5 space-x-5`}>

        <div className={`flex items-center gap-3 h-full w-fit min-w-fit ${userId !== 'none' && 'hidden'}`}>
          <Link to={`/login`} className={`h-[35px] w-fit flex items-center px-5 text-white text-[14px] font-semibold tracking-tight rounded-full transition hover:opacity-70 `}>Log In</Link>
          <Link to={`/signup`} className={`h-[35px] w-fit flex items-center px-5 bg-main-color text-white text-[14px] font-semibold tracking-tight rounded-full `}>Sign Up</Link>
        </div>
        {userId !== 'none' && (
          <div className={`group flex items-center gap-2 h-full w-fit min-w-fit cursor-default relative ${userId === 'none' && 'hidden'}`}>
            <p className='bg-main-color  backdrop-blur-md text-white h-8 aspect-square flex items-center justify-center capitalize font-mono font-bold text-2xl rounded-full  '>{username.charAt(0)}</p>
            <p>{username}</p>
            <div className='absolute top-[30px] pt-3 right-0 w-fit min-w-[200px] h-fit opacity-0 -z-50 pointer-events-none group-hover:opacity-100 group-hover:z-10 -translate-y-4 group-hover:translate-y-0 transition group-hover:pointer-events-auto   '>
              <div className='bg-container-color bad rounded-lg p-2 w-full h-full'>
                <button className='text-sm px-2 h-[40px] rounded-lg hover:bg-stone-500/10 w-full text-left flex items-center justify-start gap-2 hover:text-main-color font-normal capitalize '><RiAccountCircleLine className=' text-[25px] cursor-pointer ' /> Account</button>
                <button className='text-sm px-2 h-[40px] rounded-lg hover:bg-stone-500/10 w-full text-left flex items-center justify-start gap-2 hover:text-main-color font-normal capitalize '><MdOutlineDownloading className=' text-[25px] cursor-pointer ' /> Downloads</button>
                <button className='text-sm px-2 h-[40px] rounded-lg hover:bg-stone-500/10 w-full text-left flex items-center justify-start gap-2 hover:text-main-color font-normal capitalize '><HiCollection className=' text-[25px] cursor-pointer ' /> Collection</button>
                <div className='w-full h-[1px] bg-border-line-color/60 my-2'></div>
                <button onClick={handleLogout} className='text-sm px-2 h-[40px] rounded-lg hover:bg-stone-500/10 w-full text-left flex items-center justify-start gap-2 hover:text-red-500 font-normal capitalize '><TbLogout2 className='text-[25px] cursor-pointer ' /> Logout</button>
              </div>
            </div>
          </div>
        )
        }

        <div className='w-fit h-[25px] border-l border-l-stone-300'></div>
        <a href="https://github.com/kevindermot99/gamezilla" target='_blank' className='text-[15px] font-semibold flex items-center tracking-wide h-fit transition hover:opacity-70 ' title={`Source Code`} >SC <GoGitBranch className='ml-[5px]' /></a>
      </div>
    </div>
  )
}

export default Menu