import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import './Filterbar.css'
import { MdWbSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";


export default function Filterbar() {

    let {filterData,filterHandler,dark,themeHandler} = useContext(AppContext);

  return (
    <div className='filterbar'>
      <button className='theme' onClick={themeHandler}>
        {
          dark ?  <div className='moon'><IoMoon/></div> : <div className='sun'><MdWbSunny/></div>
        }
      </button>
        {
            filterData.map((option) => {
                return <button onClick={() => filterHandler(option)} key={option}>{`#${option}`}</button>
            })
        }
    </div>
  )
}
