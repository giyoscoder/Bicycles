import React from 'react';
import {logo} from '../../Assets/index'
import Navigation from './Navigation/Navigation';
import PersonalData from './PersonalData/PersonalData';

const Navbar = ({onChange}) => {
  return (
    <div className='py-7 flex items-center justify-between'>
      <div>
        <img src={logo} alt='logoImg' className='min-h-[49px] min-w-[87px]'/>
      </div>
      <Navigation/>
      <PersonalData onChange={onChange}/> 
      
    </div>
  )
}

export default Navbar