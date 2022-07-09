import React from 'react';
import { GridItemBtn } from '../Buttons';
import { useState } from "react";


function MenuItem({name, description, price, image, alt}){
    return (
        <div className="flex flex-col min-h-[380px] justify-between ">
            <div className="flex justify-center">
                <img className = "w-56 h-56" src={image} alt={alt} />
            </div>
            <div className = "text-center text-pizza text-lg font-semibold w-56">
                <p>{name}</p>
            </div>
            <div className = "text-center w-56">
                <p className='whitespace-pre-line'>{description}</p>
            </div>
            <div className = "text-center w-56">
                <p>Precio: {price} </p>
            </div>
            <div className = "text-center">
                <GridItemBtn text= 'Agregar al carrito' />
            </div>
        </div>
    )
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

    return (
        <div className="flex flex-col min-h-[450px] justify-between ">
            <div className="flex justify-center">
                <img className = "w-56 h-56" src={image} alt={alt} />
            </div>
            <div className = "text-center text-pizza text-lg font-semibold w-56">
                <p>{name}</p>
            </div>
            <div className = "text-center w-56">
                <p className='whitespace-pre-line'>{description}</p>
            </div>
            <div className= "text-center">
                <select className= "appearance-none bg-pizza text-white w-40" onChange={(evt) => handleDropdownChange(evt.target.value)}>
                    <option className="focus:bg-yellow" value="Pequeña">Pequeña</option>
                    <option value="Mediana">Mediana</option>
                    <option value="Grande">Grande</option>
                    <option value="Monstruo">Monstruo</option>
                </select>
            </div>
            <div className = "text-center w-56">
                <p>Precio:{sizePrice}</p>
            </div>
            <div className = "text-center">
                <GridItemBtn text= 'Agregar al carrito' />
            </div>
        </div>
    )
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

function HomeItem({name, image})
{
    return <div className='flex flex-col items-center'>
        <img className = "w-56 h-56" src={image} alt={name} />
        <p className="lg:text-xl cel:text-lg text-pizza text-center w-60">{name}</p>
    </div>
}


export { MenuItem, CartItem, HomeItem, MenuPizzaItem }