import React from 'react';
import { AddCartBtn } from '../Buttons';


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
                <AddCartBtn />
            </div>
        </div>
    </div>
}

export default MenuItem;
