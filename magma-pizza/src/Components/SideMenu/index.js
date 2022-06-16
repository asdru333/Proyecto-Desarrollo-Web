import React from 'react';
import { SideMenuBtn } from '../Buttons';


function SideMenu() {
  return <div>
      <div className="flex flex-col gap-y-4 ml-40 w-1/3">
        <SideMenuBtn text = 'Pizzas' link = 'Pizzas'/>
        <SideMenuBtn text = 'Bebidas' link = 'Bebidas'/>
        <SideMenuBtn text = 'Postres' link = 'Postres'/>
        <SideMenuBtn text = 'Acompañamientos' link = 'Acompanamientos'/>
        <SideMenuBtn text = 'Promos' link = 'Promos'/>
      </div>
  </div>
}

export default SideMenu;
