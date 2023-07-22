import React from 'react'
import { Link } from 'react-router-dom';
import {deleteed} from '../../Assets/index'

const LINKS = ['О нас', 'Веломастерская', 'Хранение', 'Гарантии', 'Пользовательское соглашение', 'Доставка и оплата', 'Блог','Контакты' ]

const BarList = ({onChange}) => {
  return (<div className='bg-white w-[448px] h-screen p-10  absolute top-0 right-0 z-[99999]'>
    <img src={deleteed} alt='img' className='ml-auto mb-10 block cursor-pointer' onClick={()=> onChange()}/>
    <h1 className='text-[35px] font-inter font-normal tracking-[2px]'>Доп. Информация</h1>
    <ul  className='leading-6 mt-12'>
        {LINKS.map(val => {
          return <li key={val} className='font-inter text-lg font-medium transition-all duration-300 tracking-[0.18px] hover:text-orange'><Link>{val}</Link></li>
        })}
    </ul>
  </div>
  )
}

export default BarList