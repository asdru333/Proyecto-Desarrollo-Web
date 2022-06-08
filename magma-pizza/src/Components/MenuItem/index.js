import React from 'react';
import { AddCartBtn } from '../Buttons';


function MenuItem(){
    return <div>
        <div className="flex flex-col">
            <div className="flex justify-center">
                <img className = "w-56" src={require('./pan.jpg')} alt="pan" />
            </div>
            <div className = "text-center flex flex-col gap-1">
                <p>nombre</p>
                <p>descripcion</p>
                <p>precio</p>
                <AddCartBtn />
            </div>
        </div>
    </div>
}

export default MenuItem;
