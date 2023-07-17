import React from 'react';
import {logo} from '../../Assets/index'
import Navigation from './Navigation/Navigation';
import PersonalData from './PersonalData/PersonalData';

const Navbar = () => {
  return (
    <div className='py-7 flex items-center justify-between'>
      <div>
        <img src={logo} alt='logoImg' className='h-[49px] w-[87px]'/>
      </div>
      <Navigation/>
      <PersonalData/>
    </div>
  )
}

export default Navbar