import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import '../../index.css'
import Navbar from '../Navbar/Navbar';
import BarList from '../BarList/BarList';
import User from '../User/User';

const Header = () => {
  const [bars, setBars] = useState(false)
  const barsHandler = e => {
    setBars(prev => !prev)
  }
  return (
    <div className='showcase xs:bg-center'>
      <div className='px-[20px] md:px-[70px]'>
        <Navbar onChange={barsHandler}/>
        <h1 className='text-white text-3xl md:text-[110px] sm:text-[80px] sm:leading-[100px] sm:mt-40 mt-80'>Электро <br className='md:block hidden'/> велосипеды</h1>
        <p className='text-white mt-5 text-sm font-inter font-light tracking-[0.18px] max-w-[600px] md:mt-12 sm:leading-7'>Cento10 Hybrid — это гоночный велосипед с помогающим педалированию электроприводом, который устанавливает новый, очень высокий стандарт для данной категории</p>
         <button className='bg-orange py-3 px-5 mt-5 sm:mt-10 rounded-[10px] text-white sm:py-4 sm:px-20 font-inter font-medium text-base'><Link to='/'>Подробнее</Link></button>
      </div>
      {bars && <div className='h-full w-full  bg-black opacity-70 absolute top-0 left-0' onClick={barsHandler}/>}
      {bars && <BarList onChange={barsHandler} />}
      <User/>
    </div>
  )
}

export default Header