import React, { useRef, useState } from "react";
import {
  heart,
  heart_active,
  cart,
  cart_active,
  user,
  searchBar,
  bars,
  searchnav,
} from "../../../Assets";
import BarList from "../../BarList/BarList";

const PersonalData = ({onChange}) => {
  const [search, setSearch] = useState(false);
  const navbarRef = useRef("");
  const searchHandler = () => {
    setSearch(prev => !prev)
  };

  return (
    <div className="flex items-center gap-2 sm:gap-6 relative ">
     {search && <label
        htmlFor=""
        className="flex justify-between py-[10px] px-4 bg-[#101010] shadow-base rounded-[5px] absolute top-[100%] right-[110%]"
      >
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent border-none outline-none text-white"
        />
        <img src={searchnav} alt="searchBar" className="pr-4" />
      </label>}
      <img src={searchBar} alt="iconImg" className="h-6 w-6 cursor-pointer" onClick={searchHandler}/>
      <img src={user} alt="iconImg" className="h-6 w-6 cursor-pointer" />
      <img
        src={heart_active}
        alt="iconImg"
        className="h-6 w-6 cursor-pointer"
      />
      <img
        src={cart_active}
        alt="iconImg"
        className="h-6 w-6  cursor-pointer"
      />
      <img
        src={bars}
        alt="iconImg"
        className="h-6 w-6 cursor-pointer ml-[20px] md:ml-[58px]"
        onClick={()=> onChange()}
      />

    </div>
  );
};

export default PersonalData;
