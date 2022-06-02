import React from 'react';
import { SideMenuBtn } from '../Buttons';

function SideMenu() {
  return <div>
      <div class="flex flex-col gap-y-6 w-1/3">
        <SideMenuBtn text = 'Pizzas'/>
        <SideMenuBtn text = 'Bebidas'/>
        <SideMenuBtn text = 'Postres'/>
        <SideMenuBtn text = 'Acompañamientos'/>
        <SideMenuBtn text = 'Promos'/>
      </div>
  </div>
}

export default SideMenu;
