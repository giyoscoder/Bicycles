import React from 'react';
import { heart, heart_active, cart, cart_active, user,searchBar,bars, } from '../../../Assets';

const PersonalData = () => {
  return (
    <div className='flex items-center gap-6 '>
        <img src={searchBar} alt='iconImg'  className='h-6 w-6 cursor-pointer' />
        <img src={user} alt='iconImg'  className='h-6 w-6 cursor-pointer'/>
        <img src={heart_active} alt='iconImg'  className='h-6 w-6 cursor-pointer'/>
        <img src={cart_active} alt='iconImg'  className='h-6 w-6  cursor-pointer'/>
        <img src={bars} alt='iconImg'  className='h-6 w-6 cursor-pointer ml-[58px]'/>
    </div>
  )
}

export default PersonalData