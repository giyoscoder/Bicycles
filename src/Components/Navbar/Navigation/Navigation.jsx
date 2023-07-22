import React from 'react'
import { NavLink } from 'react-router-dom';

const navigation_links = [
    {value: 'Trade In'},
    {value: 'Велосипеды'},
    {value: 'Запчасти'},
    {value: 'Экипировка'},
    {value: 'Аксессуары'},
    {value: 'Велостанки'},

]

const Navigation = () => {
  return (
    <nav>
        <ul className='flex items-center gap-8'>
            {navigation_links.map((data, idx)=>{
            return <NavLink key={idx} className='text-white hidden  xl:flex text-[12px] font-inter font-normal transition-all duration-300 hover:text-orange focus:text-orange uppercase'>{data.value}</NavLink>})}
        </ul>
    </nav>
  )
}

export default Navigation