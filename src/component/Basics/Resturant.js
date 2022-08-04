import React, { useState } from 'react'
import "./style.css";
import Menu from "./menuApi"; // ye menu ke api ko get karne ke liye kiya hu
import MenuCard from "./MenuCard";

const Resturant = () => {
   const [menuData, setMenuData] = useState(Menu);
   console.log(menuData);
  return (
    <>
     < MenuCard menuData = {menuData} />
    </>
  );
};

export default Resturant;