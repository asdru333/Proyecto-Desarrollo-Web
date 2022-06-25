import React from 'react';
import { GridItemBtn } from '../Buttons';


function MenuItem({name, description, price, image, alt}){
    return <div>
        <div className="flex flex-col">
            <div className="flex justify-center">
                <img className = "w-56" src={image} alt={alt} />
            </div>
            <div className = "text-center flex flex-col gap-1">
                <p>{name}</p>
                <p className='whitespace-pre-line'>{description}</p>
                <p>Precio: {price}</p>
                <GridItemBtn text= 'Agregar al carrito' />
            </div>
        </div>
    </div>
}

function CartItem(){
    return <div>
        <div className="flex flex-col">
            <div className="flex justify-center">
                <img className = "w-56" src={require('./pan.jpg')} alt="pan" />
            </div>
            <div className = "text-center flex flex-col gap-1">
                <p>nombre</p>
                <p>precio</p>
                <p>cantidad</p>
                <GridItemBtn text='Eliminar' />
            </div>
        </div>
    </div>
}


export { MenuItem, CartItem }
