import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function MiniNavBar() {
    const location = useLocation()
  return (
    <div className='w-full h-fit bg-white dark:bg-body-color '>
    <div className="h-fit w-full max-w-[1100px] px-5 py-3 mx-auto flex items-center justify-start gap-3 ">
        <form className="">
          <input
            type="search"
            name="search"
            className="bg-stone-100 hover:bg-stone-200/80 focus:bg-stone-200/80 dark:hover:bg-border-line-color/80 dark:focus:bg-border-line-color/80 text-black dark:text-white placeholder:text-text-color-light/80 dark:bg-container-color px-4 h-[45px] font-medium text-sm w-full max-w-[260px] "
            autoComplete="off"
            placeholder="Search Game"
          />
        </form>
        <Link to={`/`}
          className={`px-3 h-[45px] flex items-center justify-center text-[15px] font-DMsans font-medium tracking-tight  ${location.pathname === '/' ? 'text-black dark:text-white border-b-[2px] border-main-color ' : 'text-black dark:text-text-color-light'}`}
        >
          Discover
        </Link>
        <Link to={`/browse`}
        
          className={`px-3 h-[45px] flex items-center justify-center text-[15px] font-DMsans font-medium tracking-tight  ${location.pathname === '/browse' ? 'text-black dark:text-white border-b-[2px] border-main-color ' : 'text-black dark:text-text-color-light'}`}
        >
          Browse
        </Link>
      </div>
      </div>
  )
}

export default MiniNavBar