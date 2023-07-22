import React from 'react';
import {deleteed} from '../../Assets'
import { Link } from 'react-router-dom';
const LIST = ['История заказов', 'Персональные данные', 'Смена пароля', 'Список желаний', 'Выйти']
const User = () => {
  return (
    <div className='bg-white w-[25%] h-[70%] absolute top-[15%] left-[50%] translate-x-[-50%] p-10 rounded-lg'>
        <img src={deleteed} alt='img' className='ml-auto'/>
        <h1 className='text-4xl font-normal'>Мой аккаунт</h1>
        <ul className='leading-[50px] mt-12'>
            {LIST.map(val => {
                return <li key={val} className='font-inter text-xl font-medium transition-all duration-300 hover:text-[#B3B3B3]'><Link to={val}>{val}</Link></li>
            })}
        </ul>
    </div>
  )
}

export default User