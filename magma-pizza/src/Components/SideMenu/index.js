import React from 'react';

function SideMenu() {
  return <div>
      <div class="flex flex-col gap-y-6 w-1/3">
        <button class="bg-red hover:bg-light-red text-white font-bold py-2 w-64">Pizzas</button>
        <button class="bg-red hover:bg-light-red text-white font-bold py-2 w-64">Bebidas</button>
        <button class="bg-red hover:bg-light-red text-white font-bold py-2 w-64">Postres</button>
        <button class="bg-red hover:bg-light-red text-white font-bold py-2 w-64">Acompañamientos</button>
        <button class="bg-red hover:bg-light-red text-white font-bold py-2 w-64">Promos</button>
      </div>
  </div>
}

export default SideMenu;
