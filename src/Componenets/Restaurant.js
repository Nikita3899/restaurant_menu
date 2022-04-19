import React, { useState } from 'react'
import "./Style.css"
import Menu from './MenuApi.js'
import MenuCard from './Basics/MenuCard'
import Navbar from './Basics/Navbar'

const uniqueList = [...new Set(Menu.map((curElem)=>{
  return curElem.category
}))]


const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu)
    const [menuList, setMenuList] = useState()

    const filterItem = (category) => {
      const updatedList = Menu.filter((curElem) => {
        return curElem.category === category
      })
      setMenuData(updatedList);
    }

  return (
  <>
   <Navbar filterItem = {filterItem}/>     
  <MenuCard menuData={menuData}/>
  </>
  )
  }
export default Restaurant