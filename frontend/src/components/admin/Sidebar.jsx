import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className='flex flex-col border-r border-gray-200 min-h-full pt-6'> 
        <NavLink end={true} to={'/admin'} className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-[#000099]/10 border-r-4 border-[#000099]"}`}>
            <img src={assets.dashboard_home} alt="" className='min-w-4 w-5'/>
            <p className='hidden md:inline-block'>Dashboard</p>
        </NavLink>

        <NavLink end={true} to={'/admin/addBlog'} className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-[#000099]/10 border-r-4 border-[#000099]"}`}>
            <img src={assets.dashboard_add} alt="" className='min-w-4 w-5'/>
            <p className='hidden md:inline-block'>Add Blog</p>
        </NavLink>

        <NavLink end={true} to={'/admin/listBlog'} className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-[#000099]/10 border-r-4 border-[#000099]"}`}>
            <img src={assets.dashboard_list} alt="" className='min-w-4 w-5'/>
            <p className='hidden md:inline-block'>Blog Lists</p>
        </NavLink>
    </div>
  )
}

export default Sidebar