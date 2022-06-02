import React from 'react';

function AddCartBtn() {
    return <div>
        <button class="h-10 w-40 bg-red hover:bg-light-red text-white font-bold py-2">Agregar al carrito</button>
    </div>
}

function SideMenuBtn(props) {
    return <div>
        <button class="h-14 w-64 bg-red hover:bg-light-red text-white text-lg font-bold py-2">{props.text}</button>
    </div>
}

export { AddCartBtn, SideMenuBtn }