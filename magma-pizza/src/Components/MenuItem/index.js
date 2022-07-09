import React from 'react';
import { GridItemBtn } from '../Buttons';
import { useState } from "react";


function MenuItem({name, description, price, image, alt}){
    return <div>
        <div className="flex flex-col">
            <div className="flex justify-center">
                <img className = "w-56 h-56" src={image} alt={alt} />
            </div>
            <div className = "text-center flex flex-col gap-1 w-56">
                <p>{name}</p>
                <p className='whitespace-pre-line'>{description}</p>
                <p>Precio: {price}</p>
                <GridItemBtn text= 'Agregar al carrito' />
            </div>
        </div>
    </div>
}

function MenuPizzaItem({name, description, price, image, alt}){
    const [size, setSize] = useState("Pequeña");
    const [sizePrice, setSizePrice] = useState(parseInt(price));
    
    const handleDropdownChange = (itemValue) => {
        let itemPrice = 0;
        if (itemValue === "Mediana")
            itemPrice = itemPrice + 750
        else if (itemValue === "Grande")
            itemPrice = itemPrice + 1500
        else if (itemValue === "Monstruo")
            itemPrice = itemPrice + 2100
        let newPrice = parseInt(price) + itemPrice;
        setSizePrice(newPrice);
        setSize(itemValue);
    }

    return <div>
        <div className="flex flex-col">
            <div className="flex justify-center">
                <img className = "w-56 h-56" src={image} alt={alt} />
            </div>
            <div className = "text-center flex flex-col gap-1 w-56">
                <p>{name}</p>
                <p className='whitespace-pre-line'>{description}</p>
                <div>
                    <select className= "bg-pizza text-white w-56" onChange={(evt) => handleDropdownChange(evt.target.value)}>
                        <option className="active:bg-yellow" value="Pequeña">Pequeña</option>
                        <option className="focus:bg-yellow" value="Mediana">Mediana</option>
                        <option className="hover:bg-yellow" value="Grande">Grande</option>
                        <option className="hover:bg-yellow" value="Monstruo">Monstruo</option>
                    </select>
                </div>
                <p>Precio: {sizePrice}</p>
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

function HomeItem({description, image, alt})
{
    return <div>
        <img className = "w-56 h-56" src={image} alt={alt} />
        <p className="lg:text-center text-lg text-pizza">{description}</p>
    </div>
}


export { MenuItem, CartItem, HomeItem, MenuPizzaItem }