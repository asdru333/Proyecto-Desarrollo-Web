import React from 'react';
import { GridItemBtn } from '../Buttons';


function MenuItem(){
    return <div>
        <div class="flex flex-col">
            <div class="flex justify-center">
                <img class = "w-56" src={require('./pan.jpg')} alt="pan" />
            </div>
            <div class = "text-center flex flex-col gap-1">
                <p>nombre</p>
                <p>descripcion</p>
                <p>precio</p>
                <GridItemBtn text= 'Agregar al carrito' />
            </div>
        </div>
    </div>
}

function CartItem(){
    return <div>
        <div class="flex flex-col">
            <div class="flex justify-center">
                <img class = "w-56" src={require('./pan.jpg')} alt="pan" />
            </div>
            <div class = "text-center flex flex-col gap-1">
                <p>nombre</p>
                <p>precio</p>
                <p>cantidad</p>
                <GridItemBtn text='Eliminar' />
            </div>
        </div>
    </div>
}


export { MenuItem, CartItem }
